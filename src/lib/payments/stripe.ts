/**
 * STRIPE PAYMENT INTEGRATION BOUNDARY
 * 
 * This module manages payment initiation for The Profitable Practice Accelerator.
 * It follows security best practices:
 * 1. Never handles card data directly (delegates to Stripe-hosted Checkout).
 * 2. Never exposes Stripe Secret Keys or Webhook Secrets in frontend code.
 * 3. Communicates with a secure server endpoint (`/api/create-checkout-session`) 
 *    passing ONLY verified plan identifiers ('pay_in_full', 'two_payments', 'three_payments'),
 *    never arbitrary currency amounts from the client browser.
 */

export type PlanKey = 'pay_in_full' | 'two_payments' | 'three_payments';

export interface CheckoutSessionRequest {
  planKey: PlanKey;
  customerEmail?: string;
  customerName?: string;
}

export interface CheckoutResponse {
  success: boolean;
  checkoutUrl?: string;
  sessionId?: string;
  error?: string;
}

/**
 * Client-side configuration reference
 * In production, publishable key comes from import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
 */
export const STRIPE_CONFIG = {
  publishableKeyPlaceholder: "pk_test_TODO_CLIENT_ADD_STRIPE_PUBLISHABLE_KEY",
  endpoint: "/api/create-checkout-session",
  isConfigured: false, // Set to true once backend server & live credentials are provided
  returnUrls: {
    success: "/payment-success?session_id={CHECKOUT_SESSION_ID}",
    cancel: "/#investment",
  }
};

/**
 * Initiates checkout session with server
 * When Stripe credentials are pending, returns simulated modal guidance for the user/client.
 */
export async function initiateCheckout(request: CheckoutSessionRequest): Promise<CheckoutResponse> {
  // Check if live Stripe backend endpoint is active
  if (!STRIPE_CONFIG.isConfigured) {
    return {
      success: false,
      error: "STRIPE_PENDING_CLIENT_SETUP",
    };
  }

  try {
    const response = await fetch(STRIPE_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to initialize checkout session');
    }

    const data = await response.json();
    return {
      success: true,
      checkoutUrl: data.url,
      sessionId: data.sessionId,
    };
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return {
      success: false,
      error: err.message || 'An unexpected payment error occurred.',
    };
  }
}
