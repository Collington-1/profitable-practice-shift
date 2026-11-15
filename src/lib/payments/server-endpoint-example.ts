/**
 * SERVER-SIDE STRIPE CHECKOUT ENDPOINT EXAMPLE
 * 
 * Target Endpoint: POST /api/create-checkout-session
 * 
 * This code demonstrates how the backend server should process payment requests
 * securely. It can be integrated into Node.js / Express, Next.js API route,
 * Cloudflare Worker, or Serverless Function.
 */

/*
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

// Map trusted internal plan IDs to verified Stripe Price IDs
const PLAN_PRICE_MAP: Record<string, string> = {
  pay_in_full: process.env.STRIPE_PRICE_ID_PAY_IN_FULL || '',
  two_payments: process.env.STRIPE_PRICE_ID_TWO_PAYMENTS || '',
  three_payments: process.env.STRIPE_PRICE_ID_THREE_PAYMENTS || '',
};

export async function handleCreateCheckoutSession(req: any, res: any) {
  try {
    const { planKey, customerEmail } = req.body;

    const priceId = PLAN_PRICE_MAP[planKey];
    if (!priceId) {
      return res.status(400).json({ error: 'Invalid or missing plan selected.' });
    }

    // Determine checkout mode:
    // Option 1 (Pay in full): mode 'payment'
    // Option 2 & 3: Depending on client decision:
    // - Option A: Recurring Stripe Subscription / Schedule
    // - Option B: One-time payment for 1st installment, with invoice/payment link for remaining.
    const mode = planKey === 'pay_in_full' ? 'payment' : 'payment';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode,
      customer_email: customerEmail,
      metadata: {
        programme: 'The Profitable Practice Accelerator',
        planKey: planKey,
      },
      success_url: `${process.env.APP_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}/#investment`,
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error('Stripe Server Session Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
*/
