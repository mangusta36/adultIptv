export const siteConfig = {
  name: "iptv adult channels",
  description:
    "iptv adult channels offers premium adult IPTV with 26,000+ live channels, 100,000+ VOD titles, 4K/8K streaming, and multi-device support on Firestick, Smart TV, Android, and iOS.",
  url: "https://www.iptvadults.net",
  twitterHandle: "@iptvadults",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
] as const;

export const heroBadge = "Premium Adult IPTV";

export const heroHeadline =
  "iptv adult channels — Premium Adult IPTV With 4K, 8K & Full HD Streaming";

export const heroDescription =
  "iptv adult channels delivers premium adult IPTV with 26,000+ live channels and 100,000+ VOD titles. Enjoy buffer-free HD, 4K, and 8K streaming on Firestick, Smart TV, Android, and iOS. Private, secure, and instant setup.";

export const heroTrust = [
  { value: "25000+", label: "Channels" },
  { value: "4K / 8K", label: "Streaming" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
] as const;

export const features = [
  {
    icon: "Tv",
    title: "Premium Adult IPTV Channels",
    description:
      "Access thousands of premium adult IPTV channels from iptv adult channels in crystal-clear HD, 4K, and 8K quality. Live adult TV and on-demand content in one subscription.",
  },
  {
    icon: "Globe",
    title: "Live Global Adult Channels",
    description:
      "Watch live adult channels from every continent with iptv adult channels. Ultra-low latency and instant channel switching with 24/7 live adult TV streaming and full EPG support.",
  },
  {
    icon: "Film",
    title: "Massive Adult VOD Library",
    description:
      "Explore the extensive adult VOD library from iptv adult channels with thousands of on-demand titles updated daily in full HD and 4K. Adult video-on-demand at your fingertips.",
  },
  {
    icon: "Smartphone",
    title: "Multi-Device IPTV Support",
    description:
      "Stream iptv adult channels on any device — Firestick, Smart TV (Samsung, LG, Sony), Android TV, iPhone, iPad, PC, and Mac. One subscription covers all devices.",
  },
  {
    icon: "Monitor",
    title: "4K & 8K Ultra HD Streaming",
    description:
      "Experience buffer-free adult IPTV streaming with iptv adult channels' adaptive bitrate technology. HD, Full HD, 4K, and select 8K channels optimized for all internet speeds.",
  },
  {
    icon: "Headset",
    title: "24/7 IPTV Support",
    description:
      "Get round-the-clock support for iptv adult channels setup, installation, and troubleshooting. Our expert team is always here to help via WhatsApp, live chat, and email.",
  },
] as const;

export const devices = [
  { name: "Android", icon: "Smartphone" },
  { name: "Firestick", icon: "Tv" },
  { name: "Smart TV", icon: "Monitor" },
  { name: "Android TV", icon: "Tv" },
  { name: "iPhone", icon: "Smartphone" },
  { name: "Tablet", icon: "Tablet" },
  { name: "PC", icon: "Monitor" },
  { name: "Mac", icon: "Monitor" },
] as const;

export const stats = [
  { value: "25000+", suffix: "+", label: "Live Channels", num: 25000 },
  { value: "50000+", suffix: "+", label: "VOD Titles", num: 50000 },
  { value: "99.9%", suffix: "%", label: "Uptime Guarantee", num: 99.9 },
  { value: "24/7", suffix: "", label: "Expert Support", num: 24 },
] as const;

export const plans = [
  {
    name: "3 Months",
    price: "$37",
    period: "/quarter",
    monthlyPrice: "$12.33/mo",
    description: "Perfect starter plan.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
      "Free Setup Assistance",
    ],
    excluded: [],
    cta: "Subscribe Now",
    popular: false,
    savings: null,
  },
  {
    name: "6 Months",
    price: "$49",
    period: "/half-year",
    monthlyPrice: "$8.17/mo",
    description: "Great value plan.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
      "Free Setup Assistance",
    ],
    excluded: [],
    cta: "Subscribe Now",
    popular: false,
    savings: "Save 34%",
  },
  {
    name: "12 Months",
    price: "$67",
    period: "/year",
    monthlyPrice: "$5.58/mo",
    description: "Our best value — most popular.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
      "Free Setup Assistance",
    ],
    excluded: [],
    cta: "Subscribe Now",
    popular: true,
    savings: "Save 55%",
  },
] as const;

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marco R.",
    role: "VIP Member",
    content: "The adult IPTV channels are incredible. Crystal-clear 4K streaming with zero buffering on my Firestick. Best adult IPTV subscription I've ever used.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Sophie L.",
    role: "Annual Subscriber",
    content: "Been with iptv adult channels for over a year. The adult VOD library is massive and the live adult channels never buffer. Support responds in minutes.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Alexandre D.",
    role: "Premium Member",
    content: "After trying dozens of adult IPTV providers, iptv adult channels is the only one that delivers. Flawless 4K adult IPTV streaming on every device at home.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Isabella M.",
    role: "Premium Subscriber",
    content: "Absolutely love the service. The selection of international channels is incredible. My family uses it daily and we've never looked back.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Lucas K.",
    role: "Long-term Member",
    content: "Three years and counting. The reliability is unmatched — 99.9% uptime. Whenever I've had a question, support resolved it in under 5 minutes.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Elena V.",
    role: "Platinum Member",
    content: "The 4K quality on my OLED TV is breathtaking. Crystal clear picture, zero buffering. This is how premium streaming should feel.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "James T.",
    role: "Sports Enthusiast",
    content: "Every sport, every league, every match. The sports coverage alone is worth the subscription. Multiple feeds for every major event.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Natalie P.",
    role: "Movie Collector",
    content: "The VOD library is incredible. Thousands of movies in pristine quality, new releases added weekly. It's like having a private cinema at home.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Daniel H.",
    role: "Power User",
    content: "Running on 5 devices simultaneously across my house. No lag, no drops, no issues. The anti-freeze technology is the real deal.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Camille B.",
    role: "Annual Subscriber",
    content: "Signed up for the 3-month plan and upgraded within a week. The quality speaks for itself. Best decision for my home entertainment setup.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Marcus W.",
    role: "VIP Member",
    content: "I manage accounts for my whole family. Easy setup on every device type, consistent quality across all connections. Highly recommended.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Aria N.",
    role: "Premium Subscriber",
    content: "The ease of use surprised me most. From payment to watching in under 3 minutes. Everything just works. Support was patient and helpful during setup.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Thomas G.",
    role: "Long-term Member",
    content: "Two years strong. The service has only improved. More channels, better quality, faster support. They genuinely care about their subscribers.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Victoria S.",
    role: "Platinum Member",
    content: "Tried the competition — came back within days. Nothing compares to the channel variety and streaming stability. Worth every penny.",
    rating: 4,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Oliver F.",
    role: "Sports Enthusiast",
    content: "Sunday football in crystal clear 4K. Multiple camera angles, no delays. This is the ultimate setup for any sports fan.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Lena J.",
    role: "Premium Subscriber",
    content: "The international channel selection is phenomenal. I can watch content from my home country plus explore new programming. A truly global service.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Ryan M.",
    role: "Annual Subscriber",
    content: "Best value in IPTV. The 12-month plan pays for itself. 4K quality, endless VOD, and support that actually helps. Zero complaints.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
];

export const faqItems = [
  {
    question: "What is adult IPTV and how does it work?",
    answer:
      "Adult IPTV delivers premium adult entertainment content directly to your device over the internet. iptv adult channels provides thousands of live adult IPTV channels and a massive VOD library. Simply subscribe, receive your login credentials, and start streaming instantly on any compatible device — no satellite dish or cable required.",
  },
  {
    question: "Which devices support adult IPTV streaming?",
    answer:
      "Adult IPTV from iptv adult channels works on all major devices including Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Android TV, Android TV boxes, Android phones and tablets, iPhone, iPad, PC, and Mac. One adult IPTV subscription covers every device in your home with multi-device support.",
  },
  {
    question: "Do you offer HD, 4K, and 8K adult IPTV streaming?",
    answer:
      "Yes. iptv adult channels offers streaming in HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. Our adaptive streaming technology automatically adjusts quality based on your internet connection for buffer-free adult IPTV playback on any device.",
  },
  {
    question: "How many live adult channels and VOD titles do you offer?",
    answer:
      "iptv adult channels provides access to 26,000+ live channels from around the world and a VOD library with 100,000+ premium titles. Our adult IPTV channel list covers every category and genre, updated daily with fresh content.",
  },
  {
    question: "Is there a free trial or money-back guarantee for adult IPTV?",
    answer:
      "While we don't offer a free trial, all iptv adult channels plans come with a 7-day money-back guarantee. If you're not satisfied with your adult IPTV subscription for any reason, contact our support team within 7 days for a full refund — no questions asked.",
  },
  {
    question: "How do I set up adult IPTV on my device?",
    answer:
      "Adult IPTV setup takes less than 5 minutes with iptv adult channels. After subscribing, you'll receive detailed installation instructions via email. We support popular IPTV players and our 24/7 support team can guide you through setup on Firestick, Smart TV, Android, iOS, PC, or Mac.",
  },
  {
    question: "What internet speed do I need for adult IPTV streaming?",
    answer:
      "For HD adult IPTV streaming we recommend at least 10 Mbps, for 4K at least 25 Mbps, and for 8K at least 50 Mbps. iptv adult channels' adaptive streaming technology ensures smooth playback even during temporary speed fluctuations for buffer-free viewing.",
  },
  {
    question: "Can I watch adult IPTV on multiple devices simultaneously?",
    answer:
      "Yes. Depending on your adult IPTV subscription plan, you can stream on 1-6 devices simultaneously. Our 12-month plan supports 4 simultaneous streams. All devices work with a single iptv adult channels subscription — no additional fees per device.",
  },
  {
    question: "Is adult IPTV private and secure?",
    answer:
      "Absolutely. iptv adult channels prioritizes your privacy with encrypted connections, a strict no-logs policy, and discreet billing that shows no adult-related descriptors on your statements. Your adult IPTV viewing activity and personal information remain completely confidential.",
  },
  {
    question: "How do I get help with adult IPTV installation or troubleshooting?",
    answer:
      "Our expert support team is available 24/7 via WhatsApp, live chat, and email for all iptv adult channels subscribers. Get help with adult IPTV setup on Firestick, Smart TV, or any device — plus troubleshooting, channel updates, and account management.",
  },
] as const;
