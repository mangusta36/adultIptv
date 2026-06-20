export const supportCategories = [
  {
    slug: "getting-started",
    name: "Getting Started",
    description: "New to iptv adult channels? Start here with our beginner guides.",
    icon: "Compass",
    articles: [
      { title: "What is IPTV? A Beginner's Guide", slug: "what-is-iptv" },
      { title: "How to Subscribe to IPTV", slug: "how-to-subscribe" },
      { title: "Setting Up Your First IPTV Player", slug: "first-player-setup" },
      { title: "Understanding IPTV Plans", slug: "understanding-plans" },
    ],
  },
  {
    slug: "installation",
    name: "Installation Guides",
    description: "Step-by-step iptv adult channels setup guides for all devices.",
    icon: "Download",
    articles: [
      { title: "Firestick Installation Guide", slug: "firestick-setup" },
      { title: "Android TV / Smart TV Setup", slug: "android-tv-setup" },
      { title: "iPhone / iPad Setup", slug: "ios-setup" },
      { title: "PC / Mac Setup", slug: "pc-mac-setup" },
      { title: "Smart TV (Samsung, LG) Setup", slug: "smart-tv-setup" },
    ],
  },
  {
    slug: "troubleshooting",
    name: "Troubleshooting",
    description: "Fix common iptv adult channels issues and optimize performance.",
    icon: "Wrench",
    articles: [
      { title: "Buffering Issues and Fixes", slug: "fix-buffering" },
      { title: "Connection Problems", slug: "connection-issues" },
      { title: "Audio/Video Sync Issues", slug: "av-sync-issues" },
      { title: "Player Crashes or Freezes", slug: "player-crashes" },
      { title: "Channel Not Loading", slug: "channel-not-loading" },
    ],
  },
  {
    slug: "account",
    name: "Account & Billing",
    description: "Manage your iptv adult channels subscription and account settings.",
    icon: "User",
    articles: [
      { title: "How to Renew Your Subscription", slug: "renew-subscription" },
      { title: "Password Reset Guide", slug: "password-reset" },
      { title: "Understanding Your Dashboard", slug: "account-dashboard" },
      { title: "Requesting a Refund", slug: "refund-request" },
    ],
  },
] as const;

export const faqSupport = [
  {
    question: "How long does it take to get my account after payment?",
    answer: "iptv adult channels accounts are typically activated within 1-5 minutes after payment is confirmed. You'll receive your login credentials via email immediately.",
  },
  {
    question: "Can I switch devices without losing my settings?",
    answer: "Yes! Your iptv adult channels account settings, favorites, and watchlists are stored on our server. Simply log in on your new device with the same credentials.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, iptv adult channels offers a 7-day money-back guarantee on all plans. Contact our support team within 7 days of purchase for a full refund.",
  },
  {
    question: "How do I contact support?",
    answer: "iptv adult channels offers 24/7 support via live chat on our website, email, and WhatsApp. Most inquiries are answered within minutes.",
  },
  {
    question: "Can I use the service on multiple devices at the same time?",
    answer: "Yes, depending on your iptv adult channels plan. Our plans support 1-6 simultaneous connections. See our pricing page for details.",
  },
] as const;
