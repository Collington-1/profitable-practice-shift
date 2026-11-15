export interface AssetManifestEntry {
  filename: string;
  sourcePath: string;
  section: string;
  role: string;
  status: 'SUPPLIED' | 'PENDING_CLIENT_CONFIRM';
  notes: string;
}

export const ASSET_MANIFEST: AssetManifestEntry[] = [
  {
    filename: "dr-amy-logo-white.png",
    sourcePath: "/assets/dr-amy-logo-white.png",
    section: "Header Navbar & Footer",
    role: "Official Brand Logo Mark (White typography / icon)",
    status: "SUPPLIED",
    notes: "High resolution official logo provided in workspace assets folder."
  },
  {
    filename: "dr-amy-hero-portrait.png",
    sourcePath: "/assets/dr-amy-hero-portrait.png",
    section: "01 — Hero / Above the Fold",
    role: "Large circular/organic photographic hero portrait",
    status: "SUPPLIED",
    notes: "High quality authentic studio portrait of Dr Amy Traore-Shumbusho."
  },
  {
    filename: "dr-amy-about.jpg",
    sourcePath: "/assets/dr-amy-about.jpg",
    section: "04 — Founder / About Dr Amy",
    role: "Central vertical portrait in founder card",
    status: "SUPPLIED",
    notes: "Professional portrait of Dr Amy in clinical practice attire."
  },
  {
    filename: "dr-amy-speaking.jpg",
    sourcePath: "/assets/dr-amy-speaking.jpg",
    section: "03 — Methodology / 07 — Value Band",
    role: "Supporting founder presentation and lecture visual",
    status: "SUPPLIED",
    notes: "Captured during Dr Amy's clinical presentation / speaking engagement."
  },
  {
    filename: "practice-interior.jpg",
    sourcePath: "/assets/practice-interior.jpg",
    section: "06 — What Participants Receive",
    role: "Dental surgery interior & clinical equipment reference",
    status: "SUPPLIED",
    notes: "High-end clinic operatory environment."
  },
  {
    filename: "practice-clinic.jpg",
    sourcePath: "/assets/practice-clinic.jpg",
    section: "05 — Journey / Implementation",
    role: "Practice reception and clinical consulting room atmosphere",
    status: "SUPPLIED",
    notes: "Authentic practice photography."
  }
];
