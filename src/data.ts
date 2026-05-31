/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventStory, RitualItem, MomentItem, MenuCategory } from './types';

export const BRAND_INFO = {
  name: 'NŌTO Café & Bakery',
  tagline: 'Hospitality that shapes the atmosphere.',
  whatsapp: '011-6628 8087',
  whatsappLink: 'https://wa.me/601166288087',
  instagram: '@noto______',
  instagramLink: 'https://instagram.com/noto______',
  address: {
    line1: '4, Jln SS19/6',
    line2: 'SS19',
    city: '47500 Subang Jaya',
    state: 'Selangor',
    country: 'Malaysia',
  },
  positioning: 'NŌTO Café & Bakery is a modern hospitality studio creating thoughtful experiences through specialty coffee, ceremonial Japanese matcha, artisan baking and intentional service. From intimate gatherings to weddings, corporate functions and brand activations, NŌTO creates memorable moments through hospitality that shapes the atmosphere.'
};

export const SIGNATURE_EXPERIENCES = [
  {
    id: 'morning',
    title: 'Morning',
    description: 'The soft whisper of steam, the aroma of stone-ground matcha, and the crisp golden layers of early-morning pastries. Ideal for quiet wedding steps and intimate sunrise arrivals.',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'connection',
    title: 'Connection',
    description: 'Low lights, tactile ceramic cups, and quiet, unhurried conversations. An atmosphere crafted around human warmth and the simple ritual of sharing space.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'celebration',
    title: 'Celebration',
    description: 'Toasts, soft linen, delicate pastries that double as art pieces, and an attentive coffee bar setup designed to anchor your guests as they celebrate life’s milestones.',
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200'
  }
];

export const STORIES: EventStory[] = [
  {
    id: 'wedding-morning',
    title: 'The Wedding Morning',
    subtitle: 'Quiet anticipation. Thoughtful hospitality. Elegant details.',
    intro: 'Before the celebration begins, there is a sacred hour of quiet preparation. We bring a bespoke, slow-bar experience to your dressing suite or arrival chapel.',
    details: [
      'Bespoke slow-bar featuring ceremonial hand-whisked matcha and single-origin pour overs.',
      'A delicate selection of artisan viennoiseries, baked fresh at dawn.',
      'Sober, highly trained baristas who operate with quiet, elegant choreography.',
      'Artisanal custom menu cards designed specifically to match your wedding color scheme.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    category: 'Weddings'
  },
  {
    id: 'reception',
    title: 'The Reception',
    subtitle: 'Connection. Conversation. Celebration.',
    intro: 'As twilight falls and your guests gather, our mobile bar integrates seamlessly into your venue architecture to host a curated beverage reception.',
    details: [
      'Tailored matcha, espresso, and seasonal cold-brew mocktails served in custom textured ceramics.',
      'Speed and poise: serving groups of 50 to 500 without compromising on taste or artisanal touch.',
      'Custom bar setups designed to blend with minimalist, rustic, or luxurious spatial designs.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1200',
    category: 'Weddings'
  },
  {
    id: 'product-launch',
    title: 'The Product Launch',
    subtitle: 'Atmosphere designed around a brand.',
    intro: 'A brand launch is not just an announcement; it is a sensory universe. We curate a custom beverage and sensory menu designed to reflect your exact brand values.',
    details: [
      'Co-branded cups, custom-molded chocolates, and bespoke menu design.',
      'Signature drinks referencing the color codes, ingredients, or story of the product launch.',
      'Impeccable style and high-end etiquette matching luxury fashion or lifestyle brands.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    category: 'Brand Activations'
  },
  {
    id: 'private-gathering',
    title: 'The Private Gathering',
    subtitle: 'Intimate. Meaningful. Personal.',
    intro: 'For milestone birthdays, private gallery viewings, or cozy home dinners, we curate a warm, home-centric hospitality experience that honors your closest kin.',
    details: [
      'Personalized pairing menus matching premium coffees and matchas with artisanal tarts and savoury danishes.',
      'Flexible, ultra-minimalist footprint that fits elegantly inside a domestic setting or modern villa.',
      'Understated service that feels like a quiet extension of your own hosting.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=1200',
    category: 'Private'
  },
  {
    id: 'corporate-gathering',
    title: 'The Corporate Gathering',
    subtitle: 'Professional hospitality without feeling corporate.',
    intro: 'Say goodbye to sterile airport coffee urns and cardboard cups. We introduce high-end café standards directly into your office or boardroom space.',
    details: [
      'Uncompromising specialty coffee beans and premium Marukyu Koyamaen matchas for your executive partners.',
      'High-throughput mobile double-group head espresso setups with rapid, hyper-focused baristas.',
      'Clean billing, easy corporate setup, and highly punctual services.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    category: 'Corporate'
  }
];

export const RITUALS: RitualItem[] = [
  {
    id: 'arrival',
    title: 'Arrival Ritual',
    subtitle: 'The first drink. The first impression. The beginning of conversation.',
    description: 'We welcome your guests with standard-setting initial greeting gestures. A subtle infusion of citrus, a warm or cold micro-misted towel, and a flawless espresso drink. This gesture defines the transition from travel to sanctuary, instantly putting them at ease.',
    highlight: 'Establishes a curated sensory tone the exact second your guests enter the space.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pause',
    title: 'Pause Ritual',
    subtitle: 'Ceremonial Japanese matcha. A moment to slow down. A moment to reconnect.',
    description: 'Using high-grade ceremonial stone-ground Matcha sourced from Marukyu Koyamaen in Uji, Kyoto, we prepare every bowl with precision. The quiet rhythm of the whisking, the earthy, creamy beverage, and the focused presence of the artisan offer a serene micro-meditation mid-event.',
    highlight: 'Perfect for mid-day seminars, product presentations, or transition states in luxury wedding itineraries.',
    imageUrl: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'celebration',
    title: 'Celebration Ritual',
    subtitle: 'Coffee and hospitality during meaningful interactions.',
    description: 'The sound of laughter, the clink of glasses, and a steady flow of high-caliber flat whites, iced matcha lattes, and custom-infused lemonades. Our team steps into full harmony with the crowd, presenting drinks on wood trays with seamless grace and warmth.',
    highlight: 'Unites guests through shared appreciation of finely-crafted artisan baking and barista-level brewing.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'farewell',
    title: 'Farewell Ritual',
    subtitle: 'A final gesture before guests leave. A lasting memory.',
    description: 'We ensure the departure is as memorable as the arrival. A freshly baked, warm, mini croissant sealed in embossed wax paper for the ride home, paired with a subtle, bottled cold brew or quiet, caffeine-free herbal tea to accompany them into the night.',
    highlight: 'Transforms the simple act of leaving into a lingering, tactile memory of perfect hosting.',
    imageUrl: 'https://images.unsplash.com/photo-1530610476181-d83430b64d00?auto=format&fit=crop&q=80&w=1200'
  }
];

export const MOMENTS: MomentItem[] = [
  {
    id: 'moment-1',
    title: 'A Kinfolk Wedding at The Glasshouse',
    location: 'Seputeh, Kuala Lumpur',
    category: 'Weddings',
    date: 'April 2026',
    description: 'An elegant glass structure illuminated by fairy lights, where we set up a dual-station matcha and pour-over bar. Understated, floral, and atmospheric.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'moment-2',
    title: 'Minimalist Runway Launch — Mode Parisienne',
    location: 'Bangsar, Creative Hub',
    category: 'Brand Activations',
    date: 'March 2026',
    description: 'Crafting signature monochromatic activated charcoal lattes and stone-ground matcha teas for Malaysia’s premier sustainable fashion launch.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'moment-3',
    title: 'Kyoto Rituals in SS19',
    location: 'SS19 Boutique House',
    category: 'Matcha Experiences',
    date: 'May 2026',
    description: 'A quiet, exclusive afternoon session hosting Uji matcha pairings with our signature strawberry matcha tart, celebrating international architects.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'moment-4',
    title: 'Private Estate Evening Toast',
    location: 'Federal Hill, Kuala Lumpur',
    category: 'Private Celebrations',
    date: 'February 2026',
    description: 'An intimate 40-guest celebration of a renowned luxury hospitality veteran, anchored by our signature viennoiserie cart and single-origin long blacks.',
    imageUrl: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'moment-5',
    title: 'Sustainable Tech Summit Coffee Lounge',
    location: 'Damansara Heights',
    category: 'Corporate Events',
    date: 'January 2026',
    description: 'Serving 400 fast-paced founders and VCs without missing a beat, using local oat milks and biodegradable plant-starch cups.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'moment-6',
    title: 'Aesop Brand Activation Ritual',
    location: 'The Gardens Mall Boutique',
    category: 'Brand Activations',
    date: 'December 2025',
    description: 'Designing bespoke herbal-infused coffee lemonade and cold lattes tailored around Aesop’s lavender and rosemary fragrance ingredients.',
    imageUrl: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    quote: "With NŌTO, our wedding morning wasn't just a preparation time. They turned it into an elegant, quiet ritual where we sat together, drank the single finest matcha we've ever tasted, and felt incredibly peaceful before the storm of the day.",
    author: "Elena & Keith",
    event: "The Glasshouse Wedding"
  },
  {
    quote: "We brought NŌTO to handle our skincare brand launch in KL. Their detail was unparalleled — matching our signature palette, printing beautiful bespoke menu cards, and delivering flawless latte art that our guests couldn’t stop documenting.",
    author: "Maya Lin",
    event: "Creative Director, LUMI Brand Activation"
  },
  {
    quote: "It’s rare to find an event partner that understands 'atmosphere' rather than just volume. They didn't feel like caterers; they felt like trusted friends hosting an exquisite garden party for us.",
    author: "Dr. Nicholas Tan",
    event: "Private Estate Gathering"
  }
];

export const MENU: MenuCategory[] = [
  {
    title: 'COFFEE コーヒー',
    items: [
      { name: 'Black', nameJa: 'Espresso / Long', price: 'RM10', description: 'Clean, chocolate and berry notes, organic single-origin.' },
      { name: 'White', nameJa: 'Flat White / Latte / Cappuccino', price: 'RM13', description: 'Creamy local dairy or oat, velvety double-shot extraction.' },
      { name: 'Mocha', nameJa: 'Espresso + Cocoa', price: 'RM15', description: 'Rich single-origin chocolate blended with classical espresso.' }
    ]
  },
  {
    title: 'CHA お茶',
    items: [
      { name: 'Matcha Latte', nameJa: 'Marukyu Koyamaen', price: 'RM14', description: 'Stone-ground Uji matcha whisked hot, finished with silky microfoam.' },
      { name: 'Hojicha Latte', nameJa: 'Marukyu Koyamaen', price: 'RM14', description: 'Deeply roasted Japanese green tea, robust and caramel-sweet.' }
    ]
  },
  {
    title: 'CURATED セレクト',
    items: [
      { name: 'Seasonal Lemonade', price: 'RM11', description: 'Muddled organic lemons, sweet citrus, sprig of SS19 grown rosemary.' },
      { name: 'Coffee Lemonade', price: 'RM14', description: 'Effervescent seasonal lemonade topped with a cold-brew espresso float.' },
      { name: 'In-House Chocolate', price: 'RM13', description: 'Pure 72% Single-Origin Cocoa melted down with brown sugar.' }
    ]
  },
  {
    title: 'ARTISAN VIENNOISERIE',
    items: [
      { name: 'Classic Croissant', price: 'RM9', description: 'French butter, 36-layer lamination, baked crisp at dawn.' },
      { name: 'Pain Au Chocolat', price: 'RM13', description: 'Double dark chocolate batons wrapped in buttery pastry fold.' },
      { name: 'Almond Croissant', price: 'RM14', description: 'Viennoiserie twice-baked with rich frangipane cream and flaked almonds.' },
      { name: 'Cinnamon Bun', price: 'RM9', description: 'Soft brioche dough swirled with ceylon cinnamon dust.' },
      { name: 'Kaffir Lime Bun', price: 'RM9', description: 'Our custom signature bun infused with citrus leaf glaze.' }
    ]
  },
  {
    title: 'SIGNATURE CREATIONS & TEA PAIRINGS',
    items: [
      { name: 'Raspberry Pistachio Pain Suisse', price: 'RM17', description: 'Fresh raspberries, rich pistachio cream, laminated shell.' },
      { name: 'Wild Berry Earl Grey', price: 'RM17', description: 'Floral earl grey tea infusion over hand-picked wild summer berries.' },
      { name: 'Chocolate Rocher', price: 'RM16', description: 'Soft chocolate crumb with crunchy hazelnut shell coating.' },
      { name: 'Matcha Azuki', price: 'RM15', description: 'Sweet red bean puree aligned with high-grade ceremonial matcha.' },
      { name: 'Matcha Blueberry', price: 'RM16', description: 'Organic blueberry reduction topped with Japanese matcha froth.' },
      { name: 'Hojicha Mango', price: 'RM17', description: 'Tropical mango compote beautifully paired with earthy roasted tea.' }
    ]
  },
  {
    title: 'SAVOURY SELECTION',
    items: [
      { name: 'Mushroom Danish', price: 'RM15', description: 'Wild thyme and roasted cremini mushrooms inside puff pastry lattice.' },
      { name: 'Pesto Egg Danish', price: 'RM15', description: 'House basil pesto, soft-yolk egg, baked meticulously.' },
      { name: 'Shepherd Danish', price: 'RM17', description: 'Savory minced lamb, potato puree, flaky pastry crown.' },
      { name: 'Sausage Roll', price: 'RM16', description: 'Herbed chicken sausage in crisp multi-layered jacket.' },
      { name: 'Tomato Danish', price: 'RM14', description: 'Blistered heirloom tomatoes, soft cream cheese.' },
      { name: 'Ham & Cheese', price: 'RM14', description: 'High-grade chicken ham with melted Emmental and Gruyere laminate.' },
      { name: 'Gyu Miso Danish', price: 'RM17', description: 'Slow-braised miso beef tenderloin wrapped in flaky golden dough.' }
    ]
  },
  {
    title: 'DESSERTS & TARTS',
    items: [
      { name: 'Shokupan Toast', price: 'RM17', description: 'Fluffy Japanese milk bread toasted, served with whipped salted honey butter.' },
      { name: 'Strawberry Matcha Tart', price: 'RM15', description: 'Delicate pastry crust, fresh local berries, silky matcha custard.' },
      { name: 'Mango Lime Tart', price: 'RM15', description: 'Zesty lime curd with sweet caramelized mango cubes.' },
      { name: 'Tiramisu', price: 'RM22', description: 'Ladyfingers soaked in double-ristretto espresso and coffee liqueur.' },
      { name: 'Matcha Cheesecake', price: 'RM14', description: 'Baked Basque-style rustic cheesecake with premium green tea core.' },
      { name: 'Hojicha Cheesecake', price: 'RM14', description: 'Silky, wood-smoked caramel notes in a rich baked local cream cheese.' },
      { name: 'Panna Cotta', price: 'RM15', description: 'Organic vanilla bean panna cotta topped with seasonal wild honey.' }
    ]
  },
  {
    title: 'ADD-ONS',
    items: [
      { name: 'Oat Milk', price: '+RM2', description: 'Barista-grade premium oat milk alternative.' },
      { name: 'Extra Shot', price: '+RM3', description: 'An additional double-shot ristretto or matcha scoop.' }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Conversation',
    description: 'We meet in our SS19 House or over a quiet call. We listen to the pacing of your day, the nature of your guests, and the exact hospitality atmosphere you want to evoke. We don’t talk packages; we talk feelings.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We design a dedicated sensory map for your event. This includes drink formulas, custom-printed menus, ceramic selection, floral detailing, and spatial footprint plans designed around your venue setup.'
  },
  {
    step: '03',
    title: 'Preparation',
    description: 'Our bakeshop laments the pastries at 3 AM. Our barista team calibrates the espresso extraction and tests the stone-ground matcha batches. Every single piece is prepared with meticulous intent.'
  },
  {
    step: '04',
    title: 'Gathering',
    description: 'We arrive early, set up silently, and integrate seamlessly. We pour, whisk, serve, and converse with a quiet, polite hospitality that enhances the atmosphere without ever being intrusive.'
  },
  {
    step: '05',
    title: 'Lasting Memory',
    description: 'As the event closes, we execute our farewell gestures. Guests depart with the warm luxury of hospitality that stays with them long after they’ve returned to their homes.'
  }
];
