// ═══════════════════════════════════════════════════════════════════
// BAYISSA HOTEL & SPA — CENTRAL CONTENT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
// All editable text, image URLs, and business content lives here.
// Replace placeholder images with real Bayissa photography and
// replace placeholder text with verified business information.
//
// IMPORTANT: Items marked as "placeholder" are NOT verified facts.
// Do not present them as real business information.
// ═══════════════════════════════════════════════════════════════════

export const site = {
  name: "Bayissa Hotel & Spa",
  shortName: "Bayissa",
  tagline: "More than a place to stay.",
  location: "Dukem, Ethiopia",
  // Contact details — placeholders to be updated with verified info
  contact: {
    phone: null as string | null, // To be updated
    email: null as string | null, // To be updated
    whatsapp: null as string | null, // To be updated
    address: null as string | null, // To be updated — exact address not yet provided
  },
  social: {
    tiktok: "@bayissa.hotel",
    tiktokUrl: null as string | null, // To be updated with verified link
    instagram: null as string | null, // Coming soon
    instagramUrl: null as string | null,
    facebook: null as string | null, // Coming soon
    facebookUrl: null as string | null,
  },
};

// ── HOME PAGE ──────────────────────────────────────────────────────

export const hero = {
  headline: ["Stay.", "Dine.", "Celebrate."],
  subtitle:
    "More than a place to stay — discover hospitality, dining, entertainment and memorable moments at Bayissa.",
  location: "Dukem, Ethiopia",
  image:
    "https://images.pexels.com/photos/34168189/pexels-photo-34168189.jpeg?auto=compress&cs=tinysrgb&w=1920",
  primaryCta: { label: "Explore Bayissa", link: "/about" },
  secondaryCta: { label: "Contact Us", link: "/contact" },
  scrollLink: { label: "Discover the Experience", link: "#intro" },
};

export const intro = {
  eyebrow: "Welcome",
  headline: ["More Than", "a Hotel."],
  body: "Bayissa brings hospitality, dining and entertainment together in one experience. Whether you're staying overnight, meeting friends, enjoying a meal or celebrating a special moment, the experience starts here.",
};

export const experiences = [
  {
    number: "01",
    title: "Stay",
    description: "Settle into a comfortable stay.",
    link: "/stay",
    image:
      "https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    title: "Dine",
    description: "Enjoy food, drinks and good company.",
    link: "/dining",
    image:
      "https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    title: "Celebrate",
    description: "Create moments worth remembering.",
    link: "/events",
    image:
      "https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "04",
    title: "Experience",
    description: "Discover entertainment and nightlife.",
    link: "/events",
    image:
      "https://images.pexels.com/photos/5192291/pexels-photo-5192291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const staySection = {
  eyebrow: "Accommodation",
  headline: ["Your Stay.", "Your Space."],
  description: "Comfortable spaces designed for a relaxing stay.",
  cta: { label: "Explore Rooms", link: "/stay" },
  rooms: [
    {
      name: "Room Category",
      description: "A comfortable space designed for rest and relaxation.",
      price: { amount: "ETB 4,500", unit: "per night" },
      image:
        "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1200",
      placeholderNote: "Room details to be confirmed",
    },
    {
      name: "Room Category",
      description: "A welcoming room with warm tones and modern comfort.",
      price: { amount: "ETB 6,500", unit: "per night" },
      image:
        "https://images.pexels.com/photos/11433090/pexels-photo-11433090.jpeg?auto=compress&cs=tinysrgb&w=1200",
      placeholderNote: "Room details to be confirmed",
    },
    {
      name: "Room Category",
      description: "An elegant retreat for a restful night's stay.",
      price: { amount: "ETB 9,000", unit: "per night" },
      image:
        "https://images.pexels.com/photos/7507131/pexels-photo-7507131.jpeg?auto=compress&cs=tinysrgb&w=1200",
      placeholderNote: "Room details to be confirmed",
    },
  ],
};

export const entertainmentSection = {
  eyebrow: "Entertainment",
  headline: ["Experience", "the Night."],
  body: "From energetic nights to unforgettable gatherings, Bayissa brings entertainment into the experience.",
  cta: { label: "Explore Events", link: "/events" },
  images: [
    "https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8448581/pexels-photo-8448581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5192273/pexels-photo-5192273.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4306943/pexels-photo-4306943.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
};

export const eventsSection = {
  eyebrow: "Events",
  headline: ["Make It", "a Moment."],
  cta: { label: "Event Enquiries", link: "/contact" },
  cards: [
    {
      title: "Live Events",
      description: "Details coming soon",
      price: { amount: "ETB 800", unit: "per person" },
      image:
        "https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "To be announced",
    },
    {
      title: "Celebrations",
      description: "Details coming soon",
      price: { amount: "ETB 20,000", unit: "celebration package" },
      image:
        "https://images.pexels.com/photos/29486082/pexels-photo-29486082.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "To be announced",
    },
    {
      title: "Entertainment",
      description: "Details coming soon",
      price: { amount: "ETB 500", unit: "per person" },
      image:
        "https://images.pexels.com/photos/16108227/pexels-photo-16108227.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "To be announced",
    },
    {
      title: "Special Nights",
      description: "Details coming soon",
      price: { amount: "ETB 1,000", unit: "per person" },
      image:
        "https://images.pexels.com/photos/5192307/pexels-photo-5192307.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "To be announced",
    },
  ],
};

export const diningSection = {
  eyebrow: "Dining",
  headline: ["Good Food.", "Good Company."],
  body: "Take a seat, enjoy the atmosphere and make time for good food and good company.",
  cta: { label: "Explore Dining", link: "/dining" },
  image:
    "https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

export const socialSection = {
  title: "Follow the Experience",
  handle: "@bayissa.hotel",
  cta: { label: "Follow @bayissa.hotel", link: "#" },
  // Placeholder images styled as a social feed grid
  images: [
    "https://images.pexels.com/photos/5863542/pexels-photo-5863542.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/22891887/pexels-photo-22891887.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
};

export const galleryPreview = {
  eyebrow: "Gallery",
  headline: ["See Bayissa."],
  cta: { label: "View Gallery", link: "/gallery" },
  images: [
    {
      src: "https://images.pexels.com/photos/34168189/pexels-photo-34168189.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hotel exterior at night — placeholder",
      span: "tall",
    },
    {
      src: "https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hotel room interior — placeholder",
      span: "normal",
    },
    {
      src: "https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Dining table setting — placeholder",
      span: "normal",
    },
    {
      src: "https://images.pexels.com/photos/30658142/pexels-photo-30658142.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bar interior with warm lighting — placeholder",
      span: "tall",
    },
    {
      src: "https://images.pexels.com/photos/5192273/pexels-photo-5192273.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Nightlife and entertainment — placeholder",
      span: "normal",
    },
    {
      src: "https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Event celebration venue — placeholder",
      span: "normal",
    },
  ],
};

export const locationPreview = {
  eyebrow: "Location",
  headline: ["Find Your Way", "to Bayissa."],
  location: "Dukem, Ethiopia",
  contactNote: "Contact details to be updated",
};

export const finalCta = {
  headline: ["Your Next", "Moment Starts Here."],
  body: "Discover Bayissa.",
  primaryCta: { label: "Contact Bayissa", link: "/contact" },
  secondaryCta: { label: "Explore the Experience", link: "/events" },
  image:
    "https://images.pexels.com/photos/6728103/pexels-photo-6728103.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

// ── STAY PAGE ──────────────────────────────────────────────────────

export const stayPage = {
  hero: {
    eyebrow: "Stay",
    headline: ["Stay With Us."],
    subtitle: "Comfort, atmosphere and a place to make yourself at home.",
    image:
      "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  cta: { label: "Ask About Availability", link: "/contact" },
  rooms: [
    {
      name: "Room Category 01",
      description: "A comfortable, well-appointed space designed for rest.",
      price: { amount: "ETB 4,500", unit: "per night" },
      image:
        "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: "Room details to be confirmed",
    },
    {
      name: "Room Category 02",
      description: "A warm, inviting room with modern comfort and atmosphere.",
      price: { amount: "ETB 6,500", unit: "per night" },
      image:
        "https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: "Room details to be confirmed",
    },
    {
      name: "Room Category 03",
      description: "An elegant space for a relaxing and memorable stay.",
      price: { amount: "ETB 9,000", unit: "per night" },
      image:
        "https://images.pexels.com/photos/7507131/pexels-photo-7507131.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: "Room details to be confirmed",
    },
  ],
};

// ── DINING PAGE ────────────────────────────────────────────────────

export const diningPage = {
  hero: {
    eyebrow: "Dining",
    headline: ["Dine at Bayissa."],
    subtitle: "Food, drinks and atmosphere — all part of the experience.",
    image:
      "https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  cta: { label: "Dining Enquiries", link: "/contact" },
  sections: [
    {
      title: "Food",
      description:
        "A dining experience built around flavour, atmosphere and good company. Menu details to be updated.",
      image:
        "https://images.pexels.com/photos/6046746/pexels-photo-6046746.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: "Menu details to be updated",
      price: { amount: "ETB 650", unit: "from, per main course" },
    },
    {
      title: "Drinks",
      description:
        "From crafted cocktails to favourite classics — the bar is part of the experience. Details to be updated.",
      image:
        "https://images.pexels.com/photos/5863542/pexels-photo-5863542.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: "Drink menu details to be updated",
      price: { amount: "ETB 350", unit: "from, per cocktail" },
    },
    {
      title: "Atmosphere",
      description:
        "The setting matters as much as the plate. Warm tones, ambient lighting and space to settle in.",
      image:
        "https://images.pexels.com/photos/30658142/pexels-photo-30658142.jpeg?auto=compress&cs=tinysrgb&w=1400",
      placeholderNote: null,
    },
  ],
  venueSections: [
    {
      title: "Restaurant",
      description: "A place to sit down, take your time and enjoy a meal. Details to be updated.",
      price: { amount: "ETB 1,200", unit: "from, per person" },
      image:
        "https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Bar",
      description: "A social space for drinks, conversation and the night ahead. Details to be updated.",
      price: { amount: "ETB 300", unit: "from, per drink" },
      image:
        "https://images.pexels.com/photos/26626726/pexels-photo-26626726.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Special Dining Experiences",
      description: "Private dining and group experiences — details to be updated.",
      price: { amount: "ETB 15,000", unit: "from, per group booking" },
      image:
        "https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
};

// ── EVENTS PAGE ────────────────────────────────────────────────────

export const eventsPage = {
  hero: {
    eyebrow: "Events & Entertainment",
    headline: ["Experience", "the Night."],
    subtitle:
      "Entertainment, nightlife and celebrations — all part of the Bayissa experience.",
    image:
      "https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  cta: { label: "Event Enquiry", link: "/contact" },
  sections: [
    {
      title: "Live Entertainment",
      description: "Performers, music and energy that bring the night to life.",
      price: { amount: "ETB 500", unit: "entry, per person" },
      image:
        "https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
    {
      title: "Events",
      description: "Gatherings, celebrations and hosted occasions. Details to be updated.",
      price: { amount: "ETB 25,000", unit: "from, venue package" },
      image:
        "https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
    {
      title: "Nightlife",
      description: "The lights, the music, the crowd — a night out, without leaving.",
      price: { amount: "ETB 300", unit: "cover, per person" },
      image:
        "https://images.pexels.com/photos/8448581/pexels-photo-8448581.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
    {
      title: "Special Occasions",
      description: "Birthdays, milestones and private celebrations. Details to be updated.",
      price: { amount: "ETB 18,000", unit: "from, celebration package" },
      image:
        "https://images.pexels.com/photos/29486082/pexels-photo-29486082.jpeg?auto=compress&cs=tinysrgb&w=1400",
    },
  ],
  eventCards: [
    {
      title: "Upcoming Event",
      date: "To be announced",
      description: "Event details coming soon",
      price: { amount: "ETB 1,500", unit: "per person" },
      image:
        "https://images.pexels.com/photos/5192291/pexels-photo-5192291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Upcoming Event",
      date: "To be announced",
      description: "Event details coming soon",
      price: { amount: "ETB 2,000", unit: "per person" },
      image:
        "https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Upcoming Event",
      date: "To be announced",
      description: "Event details coming soon",
      price: { amount: "ETB 2,500", unit: "per person" },
      image:
        "https://images.pexels.com/photos/4306943/pexels-photo-4306943.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  gallery: [
    "https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8448581/pexels-photo-8448581.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5192307/pexels-photo-5192307.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/16108227/pexels-photo-16108227.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5192273/pexels-photo-5192273.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4218028/pexels-photo-4218028.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
};

// ── GALLERY PAGE ───────────────────────────────────────────────────

export const galleryPage = {
  hero: {
    eyebrow: "Gallery",
    headline: ["See Bayissa."],
    subtitle: "A visual journey through the experience — placeholders for now, ready for real photography.",
    image:
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  categories: ["All", "Hotel", "Rooms", "Dining", "Events", "Nightlife"],
  images: [
    { src: "https://images.pexels.com/photos/34168189/pexels-photo-34168189.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hotel exterior at night — placeholder", category: "Hotel" },
    { src: "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hotel room interior — placeholder", category: "Rooms" },
    { src: "https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Fine dining table setting — placeholder", category: "Dining" },
    { src: "https://images.pexels.com/photos/5192289/pexels-photo-5192289.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nightlife crowd — placeholder", category: "Nightlife" },
    { src: "https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Event venue setup — placeholder", category: "Events" },
    { src: "https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modern hotel room — placeholder", category: "Rooms" },
    { src: "https://images.pexels.com/photos/30658142/pexels-photo-30658142.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Bar interior — placeholder", category: "Dining" },
    { src: "https://images.pexels.com/photos/8448581/pexels-photo-8448581.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nightclub scene — placeholder", category: "Nightlife" },
    { src: "https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Live performer — placeholder", category: "Events" },
    { src: "https://images.pexels.com/photos/12688962/pexels-photo-12688962.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hotel lobby — placeholder", category: "Hotel" },
    { src: "https://images.pexels.com/photos/5863542/pexels-photo-5863542.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cocktails at the bar — placeholder", category: "Dining" },
    { src: "https://images.pexels.com/photos/5192307/pexels-photo-5192307.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nightlife dancing — placeholder", category: "Nightlife" },
    { src: "https://images.pexels.com/photos/7507131/pexels-photo-7507131.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Elegant room with sheer curtains — placeholder", category: "Rooms" },
    { src: "https://images.pexels.com/photos/29486082/pexels-photo-29486082.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Elegant event party — placeholder", category: "Events" },
    { src: "https://images.pexels.com/photos/26626726/pexels-photo-26626726.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Stylish bar counter — placeholder", category: "Dining" },
    { src: "https://images.pexels.com/photos/5192273/pexels-photo-5192273.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Crowd under spotlights — placeholder", category: "Nightlife" },
    { src: "https://images.pexels.com/photos/16108227/pexels-photo-16108227.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Singer on stage — placeholder", category: "Events" },
    { src: "https://images.pexels.com/photos/38438327/pexels-photo-38438327.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modern architecture at night — placeholder", category: "Hotel" },
  ],
};

// ── ABOUT PAGE ─────────────────────────────────────────────────────
// NOTE: Factual About content should be replaced after client verification.
// Do not treat placeholder copy as verified business history.

export const aboutPage = {
  hero: {
    eyebrow: "About",
    headline: ["Welcome to Bayissa."],
    subtitle: "More than a room — an experience shaped by atmosphere, people and moments.",
    image:
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  intro: {
    body: "Bayissa is designed around the idea that hospitality is more than a room. It is the atmosphere, the people, the food, the entertainment and the moments shared along the way.",
  },
  pillars: [
    {
      title: "The Stay",
      description: "A place to settle in, rest and feel at home — comfort is the starting point, not an afterthought.",
      image:
        "https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "The Experience",
      description: "Dining, entertainment and nightlife come together so every visit is more than just a stay.",
      image:
        "https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "The Atmosphere",
      description: "Warm tones, considered lighting and space designed for connection — the setting is part of the story.",
      image:
        "https://images.pexels.com/photos/18408870/pexels-photo-18408870.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  location: {
    title: "Dukem, Ethiopia",
    description: "Bayissa is located in Dukem — a place to stay, gather and celebrate.",
  },
};

// ── CONTACT PAGE ───────────────────────────────────────────────────

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headline: ["Let's Connect."],
    subtitle: "Have a question about a stay, dining or an event? We'd love to hear from you.",
    image:
      "https://images.pexels.com/photos/12688962/pexels-photo-12688962.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  formNote: "This is a demo enquiry form. Submissions are not yet sent to Bayissa — contact details to be updated.",
  location: "Dukem, Ethiopia",
  contactNote: "Contact details to be updated",
};

// ── NAVIGATION ─────────────────────────────────────────────────────

export const navLinks = [
  { label: "Stay", link: "/stay" },
  { label: "Dine", link: "/dining" },
  { label: "Events", link: "/events" },
  { label: "Gallery", link: "/gallery" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];
