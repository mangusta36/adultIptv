export const siteConfig = {
  name: "iptv adult channels",
  description:
    "iptv adult channels offers the best premium adult IPTV subscription with 26,000+ live channels, 100,000+ VOD titles, 4K/8K streaming, and multi-device support on Firestick, Smart TV, Android, and iOS. Buffer-free, private, with instant setup.",
  url: "https://www.iptvadults.net",
  twitterHandle: "@iptvadults",
};

const whatsappMessage =
  "Hi, I'm interested in IPTV. Can you send me the available plans?";

export const whatsappUrl = `https://wa.me/447828714977?text=${encodeURIComponent(whatsappMessage)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
] as const;

export const heroBadge = "Premium Adult IPTV Subscription";

export const heroHeadline =
  "iptv adult channels — Best Adult IPTV: 26,000+ Live Channels in 4K & 8K";

export const heroDescription =
  "iptv adult channels delivers the best adult IPTV subscription with 26,000+ live channels from around the world and a massive VOD library of 100,000+ premium titles. Experience buffer-free HD, 4K, and 8K streaming on Firestick, Smart TV, Android, and iOS. Your privacy is guaranteed with encrypted connections, discreet billing, and a strict no-logs policy. Sign up and start streaming in under 5 minutes — no long contracts, no hidden fees.";

export const heroTrust = [
  { value: "26000+", label: "Live Channels" },
  { value: "4K / 8K", label: "Stream Quality" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Expert Support" },
] as const;

export const features = [
  {
    icon: "Tv",
    title: "Premium Adult IPTV Channels",
    description:
      "Access thousands of premium adult IPTV channels from iptv adult channels in crystal-clear HD, Full HD, 4K, and 8K quality. Whether you prefer live adult TV or on-demand content, everything is available under one single subscription with no hidden costs. Our channel lineup spans every major premium network and is updated regularly with new additions. With 26,000+ channels to choose from, you'll never run out of fresh content to explore.",
  },
  {
    icon: "Globe",
    title: "Live Global Adult Channels",
    description:
      "Watch live adult channels from every continent with iptv adult channels. Our global network delivers ultra-low latency streaming with instant channel switching, so you can browse seamlessly between hundreds of live broadcasts. Full EPG (Electronic Program Guide) support lets you see what's playing now and what's coming up across all channels. Whether you're into European, Latin American, Asian, or North American content, our international lineup has you covered 24/7.",
  },
  {
    icon: "Film",
    title: "Massive Adult VOD Library",
    description:
      "Explore the extensive adult VOD library from iptv adult channels with 100,000+ on-demand titles available in full HD and 4K quality. New content is added daily, so there's always something fresh to watch. Our library covers every category and genre — from blockbuster features to niche collections — all organized and easy to browse. Stream any title instantly at any time, with no limits on how much you watch. It's like having an endless private cinema at your fingertips.",
  },
  {
    icon: "Smartphone",
    title: "Multi-Device IPTV Support",
    description:
      "Stream iptv adult channels on virtually any device with an internet connection — Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Android TV, Android TV boxes, Android phones and tablets, iPhone, iPad, PC, and Mac. One single subscription covers every device in your home with no additional fees for multiple connections. Our setup guides walk you through installation on any platform in just a few minutes. Switch between devices seamlessly — pick up where you left off on your phone, then continue on your TV.",
  },
  {
    icon: "Monitor",
    title: "4K & 8K Ultra HD Streaming",
    description:
      "Experience buffer-free adult IPTV streaming with iptv adult channels' advanced adaptive bitrate technology. Our system automatically detects your internet speed and adjusts the stream quality in real-time — from HD (720p) and Full HD (1080p) all the way up to 4K Ultra HD and select 8K channels. This means smooth playback even during temporary speed fluctuations, with no manual adjustments needed. For the best 4K experience, we recommend at least 25 Mbps; for HD streaming, 10 Mbps is sufficient. Every channel is optimized to deliver the highest possible quality based on your connection.",
  },
  {
    icon: "Headset",
    title: "24/7 IPTV Support",
    description:
      "Get round-the-clock support for your iptv adult channels subscription — from initial setup and installation to ongoing troubleshooting and account management. Our expert support team is available 24/7 via WhatsApp, live chat, and email, and most inquiries are answered within minutes. Whether you need help configuring your IPTV player on Firestick, setting up EPG on Smart TV, or troubleshooting a buffering issue, we've got you covered. We also provide detailed setup guides and video tutorials so you can get started on your own, anytime.",
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
  { value: "26000+", suffix: "+", label: "Live Channels", num: 26000 },
  { value: "100000+", suffix: "+", label: "VOD Titles", num: 100000 },
  { value: "99.9%", suffix: "%", label: "Uptime Guarantee", num: 99.9 },
  { value: "24/7", suffix: "", label: "Expert Support", num: 24 },
] as const;

export const plans = [
  {
    name: "3 Months",
    price: "$37",
    period: "/quarter",
    monthlyPrice: "$12.33/mo",
    description: "Perfect starter plan. Full access, no long-term commitment.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Technology",
      "All Devices Supported",
      "24/7 Support & Setup Help",
    ],
    excluded: [],
    cta: "Get Started",
    popular: false,
    savings: null,
  },
  {
    name: "6 Months",
    price: "$49",
    period: "/half-year",
    monthlyPrice: "$8.17/mo",
    description: "Great value plan. More savings, same premium quality.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Technology",
      "All Devices Supported",
      "24/7 Support & Setup Help",
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
    description: "Maximum savings, unlimited access — our most popular plan.",
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Technology",
      "All Devices Supported",
      "24/7 Support & Setup Help",
    ],
    excluded: [],
    cta: "Subscribe Now",
    popular: true,
    savings: "Save 55%",
  },
] as const;

export const trialPlan = {
  name: "24-Hour Trial",
  price: "$3",
  period: "one-time",
  description: "Try the full IPTV service for 24 hours with complete access before choosing a subscription.",
  features: [
    "Full Access to 26,000+ Live Channels",
    "Full Access to 100,000+ VODs",
    "4K & FHD Streaming Quality",
    "All Devices Supported",
    "24/7 Support During Trial",
    "No Commitment Required",
  ],
  cta: "Start Trial",
} as const;

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
    content: "The adult IPTV channels are incredible. Crystal-clear 4K streaming with zero buffering on my Firestick. I've tried many providers and this is by far the best adult IPTV subscription I've ever used. Setup took under 3 minutes.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Sophie L.",
    role: "Annual Subscriber",
    content: "Been with iptv adult channels for over a year. The adult VOD library is massive — thousands of titles in pristine HD and 4K. The live adult channels never buffer, and whenever I've needed help, support responds in minutes. Truly reliable.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Alexandre D.",
    role: "Premium Member",
    content: "After trying dozens of adult IPTV providers over the years, iptv adult channels is the only one that truly delivers. Flawless 4K adult IPTV streaming on every device at home, and the channel variety is unmatched. Worth every cent.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Isabella M.",
    role: "Premium Subscriber",
    content: "Absolutely love the service. The selection of international adult channels from every region is incredible. My family uses it daily on multiple devices and we've never looked back. The quality is always consistent.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Lucas K.",
    role: "Long-term Member",
    content: "Three years and counting with iptv adult channels. The reliability is unmatched — 99.9% uptime as advertised. Whenever I've had a question about setup or channels, support resolved it in under 5 minutes. Highly recommended.",
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
  {
    name: "Hugo P.",
    role: "New Subscriber",
    content: "I was skeptical about adult IPTV at first, but the 7-day money-back guarantee made me feel safe trying it. Best decision I've made. The setup was incredibly easy and I was watching within minutes. The picture quality on my Smart TV is outstanding.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Clara D.",
    role: "Smart TV User",
    content: "Finding an adult IPTV service that works smoothly on my Samsung Smart TV was a challenge until I found iptv adult channels. The built-in setup guide walked me through everything. No extra hardware needed, just my TV and internet. Crystal clear 4K quality.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Wei Z.",
    role: "International Viewer",
    content: "I live in Asia and was worried about latency with a UK-based IPTV provider. I shouldn't have been. The streaming is flawless with no lag, and the selection of Asian adult channels is impressive. My family loves the variety of international programming available.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "David M.",
    role: "Privacy-Conscious User",
    content: "Privacy was my biggest concern when looking for adult IPTV. iptv adult channels delivers exactly what they promise — encrypted connections, discreet billing, and no data logging. I can enjoy the service without worrying about my personal information. That peace of mind is priceless.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Emma T.",
    role: "VOD Enthusiast",
    content: "The VOD library is absolutely massive. I've been a subscriber for 6 months and I'm still discovering new content every week. The 4K movie collection is stunning, and new releases are added faster than I can watch them. It's replaced my streaming subscriptions completely.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
];

export const faqItems = [
  {
    question: "What is adult IPTV and how does it work?",
    answer:
      "Adult IPTV delivers premium adult entertainment content directly to your device over the internet — no satellite dish or cable required. iptv adult channels provides thousands of live adult IPTV channels from around the world plus a massive VOD library with 100,000+ titles. Simply subscribe, receive your login credentials via email, and start streaming instantly on Firestick, Smart TV, Android, iOS, PC, or Mac.",
  },
  {
    question: "Which devices support adult IPTV streaming?",
    answer:
      "Adult IPTV from iptv adult channels works on all major devices including Amazon Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Sony Android TV, Android TV boxes, Android phones and tablets, iPhone, iPad, PC, and Mac. One adult IPTV subscription covers every device in your home with multi-device support. Setup on each device takes just a few minutes with our step-by-step guides.",
  },
  {
    question: "Do you offer HD, 4K, and 8K adult IPTV streaming?",
    answer:
      "Yes. iptv adult channels offers streaming in HD (1080p), Full HD, 4K Ultra HD, and select channels in 8K quality. Our adaptive streaming technology automatically adjusts quality based on your internet connection, ensuring buffer-free adult IPTV playback on any device. For 4K streaming, we recommend at least 25 Mbps internet speed.",
  },
  {
    question: "How many live adult channels and VOD titles do you offer?",
    answer:
      "iptv adult channels provides access to 26,000+ live channels from around the world and a VOD library with 100,000+ premium titles. Our adult IPTV channel list covers every category and genre — from premium adult networks to international and specialty content. The library is updated daily with fresh releases.",
  },
  {
    question: "Is there a free trial or money-back guarantee for adult IPTV?",
    answer:
      "While we don't offer a free trial, all iptv adult channels plans come with a 7-day money-back guarantee. If you're not satisfied with your adult IPTV subscription for any reason — whether it's the channel selection, streaming quality, or device compatibility — contact our support team within 7 days for a full refund. No questions asked.",
  },
  {
    question: "How do I set up adult IPTV on my device?",
    answer:
      "Adult IPTV setup takes less than 5 minutes with iptv adult channels. After subscribing, you'll receive detailed installation instructions via email with your login credentials. We support popular IPTV players including TiviMate, IPTV Smarters, and others. Our 24/7 support team can guide you through setup on Firestick, Smart TV, Android, iOS, PC, or Mac if needed.",
  },
  {
    question: "What internet speed do I need for adult IPTV streaming?",
    answer:
      "For HD adult IPTV streaming we recommend at least 10 Mbps internet speed, for 4K at least 25 Mbps, and for 8K at least 50 Mbps for the best experience. iptv adult channels' adaptive streaming technology automatically adjusts quality during temporary speed fluctuations, ensuring buffer-free viewing even on moderately fast connections.",
  },
  {
    question: "Can I watch adult IPTV on multiple devices simultaneously?",
    answer:
      "Yes. Depending on your adult IPTV subscription plan, you can stream on 1-6 devices simultaneously. Our 12-month plan supports 4 simultaneous streams, making it perfect for households with multiple viewers. All devices work with a single iptv adult channels subscription — no additional fees per device. Share with family members under one account.",
  },
  {
    question: "Is adult IPTV private and secure?",
    answer:
      "Absolutely. iptv adult channels prioritizes your privacy with encrypted connections, a strict no-logs policy, and discreet billing that shows no adult-related descriptors on your credit card or PayPal statements. Your adult IPTV viewing activity, personal information, and subscription details remain completely confidential at all times.",
  },
  {
    question: "How do I get help with adult IPTV installation or troubleshooting?",
    answer:
      "Our expert support team is available 24/7 via WhatsApp, live chat, and email for all iptv adult channels subscribers. Get help with adult IPTV setup on Firestick, Smart TV, or any device — plus troubleshooting for buffering or connection issues, channel updates, EPG configuration, and account management. Most inquiries are answered within minutes.",
  },
  {
    question: "What payment methods do you accept for IPTV subscriptions?",
    answer:
      "iptv adult channels accepts a variety of secure payment methods including major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum). All transactions are processed through encrypted payment gateways. Your billing statements will show discreet descriptors with no adult-related references to protect your privacy.",
  },
  {
    question: "How do I cancel or renew my adult IPTV subscription?",
    answer:
      "Cancelling your iptv adult channels subscription is straightforward. There are no long-term contracts — you can cancel at any time. Simply contact our support team via WhatsApp or email, and we'll process your cancellation immediately. Your access will continue until the end of your paid billing period. To renew, you can extend your subscription before it expires to maintain uninterrupted service.",
  },
  {
    question: "Can I try adult IPTV before committing to a subscription?",
    answer:
      "While we don't offer a free trial, all iptv adult channels plans include a 7-day money-back guarantee. This gives you a full week to test the service on your devices, explore the channel lineup, browse the VOD library, and evaluate the streaming quality. If you're not completely satisfied within those 7 days, we'll issue a full refund — no questions asked. It's a risk-free way to experience premium adult IPTV.",
  },
  {
    question: "What content categories are available in the adult IPTV channel list?",
    answer:
      "iptv adult channels offers an extensive range of content categories including premium adult networks, international adult channels from Europe, Latin America, and Asia, 4K and 8K Ultra HD channels, specialty and niche categories, and a massive VOD library with featured movies, new releases, premium collections, and exclusive content. Our channel list is updated regularly with new additions based on subscriber requests.",
  },
  {
    question: "Can I use adult IPTV while traveling outside my home country?",
    answer:
      "Yes. Your iptv adult channels subscription works wherever you have an internet connection. You can access your account and stream content while traveling abroad, on business trips, or on vacation. Simply log in with your credentials on your laptop, phone, or tablet and enjoy the same channel lineup and VOD library you have at home. No need to request permission or change any settings.",
  },
] as const;
