const translations = {
  fr: {
    nav: {
      services: "Services",
      team: "L'équipe",
      gallery: "Galerie",
      contact: "Contact",
      book: "Prendre RDV",
    },
    hero: {
      eyebrow: "Salon de coiffure à Paris, France",
      headline: "L'art de sublimer vos cheveux",
      sub: "Expertise, créativité et soin personnalisé dans un espace d'exception.",
      cta1: "Prendre rendez-vous",
      cta2: "Découvrir",
    },
    philosophy: {
      label: "Notre philosophie",
      quote: "Chaque cheveu raconte une histoire. Nous l'écoutons.",
      body: "Chez Maison Céleste, nous croyons que la coiffure est un art de vivre. Chaque coupe, chaque couleur est pensée pour révéler votre beauté naturelle et affirmer votre caractère unique. Nos stylistes prennent le temps de vous écouter, de comprendre vos envies, et de créer quelque chose d'authentiquement vous.",
      cta: "Rencontrer l'équipe",
    },
    services: {
      title: "Nos services",
      items: [
        { name: "Coupes & Styles", desc: "Coupes sur mesure adaptées à votre morphologie et votre personnalité.", price: "À partir de 80€" },
        { name: "Coloration", desc: "Balayage, mèches, couleur pleine - des nuances qui vous ressemblent.", price: "À partir de 120€" },
        { name: "Soins & Traitements", desc: "Rituels de soin intensifs pour cheveux abimés, secs ou colorés.", price: "À partir de 60€" },
        { name: "Coiffures de Mariage", desc: "Mise en beauté complète pour votre jour le plus précieux.", price: "Sur devis" },
        { name: "Extensions", desc: "Extensions kératine et à clips pour plus de longueur et volume.", price: "À partir de 200€" },
        { name: "Conseil & Diagnostic", desc: "Consultation personnalisée pour définir votre routine capillaire idéale.", price: "Offert" },
      ],
    },
    team: {
      title: "Notre équipe",
      members: [
        { name: "Sophie Laurent", title: "Directrice Artistique", specialty: "Couleur & Techniques de lumière" },
        { name: "Élodie Martin", title: "Styliste Senior", specialty: "Coupes architecturées & Soins" },
        { name: "Marc Dubois", title: "Coloriste Expert", specialty: "Balayage & Coloration végétale" },
      ],
    },
    gallery: {
      title: "Notre travail",
    },
    testimonials: {
      title: "Ce que disent nos clients",
      items: [
        { text: "Un salon d'exception. Sophie a transformé mes cheveux avec une balayage naturelle et lumineuse. Je ne suis jamais allée ailleurs depuis.", author: "Camille R.", city: "Paris" },
        { text: "Élodie comprend exactement ce que je veux sans que j'aie besoin de tout expliquer. C'est rare et précieux.", author: "Nathalie V.", city: "Neuilly-sur-Seine" },
        { text: "Marc est un génie de la couleur. Mes cheveux n'ont jamais été aussi beaux. L'ambiance du salon est magnifique.", author: "Juliette M.", city: "Paris 8e" },
        { text: "Service impeccable, résultat parfait. Je viens depuis 3 ans et je ne changerai pour rien au monde.", author: "Isabelle T.", city: "Saint-Germain" },
        { text: "Absolutely stunning salon. The team is incredibly talented and the atmosphere is pure luxury.", author: "Sarah K.", city: "London" },
        { text: "Best hair experience I've ever had in Paris. Sophie's balayage technique is world-class.", author: "Emma D.", city: "New York" },
      ],
    },
    contact: {
      title: "Nous trouver",
      address_label: "Adresse",
      hours_label: "Horaires",
      phone_label: "Téléphone",
      email_label: "Email",
      follow_label: "Suivez-nous",
      form: {
        name: "Votre nom",
        email: "Votre email",
        phone: "Téléphone (optionnel)",
        message: "Votre message ou demande de rendez-vous",
        send: "Envoyer",
        success: "Message envoyé. Nous vous répondrons sous 24h.",
      },
    },
    footer: {
      copyright: "Tous droits réservés.",
    },
  },

  en: {
    nav: {
      services: "Services",
      team: "Our Team",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book Now",
    },
    hero: {
      eyebrow: "Hair salon in Paris, France",
      headline: "The art of beautiful hair",
      sub: "Expertise, creativity and personalised care in an exceptional space.",
      cta1: "Book an appointment",
      cta2: "Discover",
    },
    philosophy: {
      label: "Our philosophy",
      quote: "Every strand tells a story. We listen.",
      body: "At Maison Céleste, we believe hair is a way of life. Every cut, every colour is designed to reveal your natural beauty and express your unique character. Our stylists take time to understand your desires and create something authentically you.",
      cta: "Meet the team",
    },
    services: {
      title: "Our services",
      items: [
        { name: "Cuts & Styling", desc: "Bespoke cuts tailored to your face shape and personality.", price: "From €80" },
        { name: "Colour", desc: "Balayage, highlights, full colour - shades that suit you perfectly.", price: "From €120" },
        { name: "Treatments", desc: "Intensive care rituals for damaged, dry or colour-treated hair.", price: "From €60" },
        { name: "Bridal Hair", desc: "Complete bridal styling for your most precious day.", price: "On request" },
        { name: "Extensions", desc: "Keratin and clip-in extensions for extra length and volume.", price: "From €200" },
        { name: "Consultation", desc: "Personalised consultation to define your ideal hair care routine.", price: "Complimentary" },
      ],
    },
    team: {
      title: "Our team",
      members: [
        { name: "Sophie Laurent", title: "Artistic Director", specialty: "Colour & Light techniques" },
        { name: "Élodie Martin", title: "Senior Stylist", specialty: "Architectural cuts & Treatments" },
        { name: "Marc Dubois", title: "Expert Colourist", specialty: "Balayage & Natural colour" },
      ],
    },
    gallery: {
      title: "Our work",
    },
    testimonials: {
      title: "What our clients say",
      items: [
        { text: "An exceptional salon. Sophie transformed my hair with a natural, luminous balayage. I've never gone anywhere else since.", author: "Camille R.", city: "Paris" },
        { text: "Élodie understands exactly what I want without me having to explain everything. That's rare and precious.", author: "Nathalie V.", city: "Neuilly-sur-Seine" },
        { text: "Marc is a colour genius. My hair has never looked this beautiful. The salon atmosphere is stunning.", author: "Juliette M.", city: "Paris 8e" },
        { text: "Impeccable service, perfect results. I've been coming for 3 years and wouldn't change for anything.", author: "Isabelle T.", city: "Saint-Germain" },
        { text: "Absolutely stunning salon. The team is incredibly talented and the atmosphere is pure luxury.", author: "Sarah K.", city: "London" },
        { text: "Best hair experience I've ever had in Paris. Sophie's balayage technique is world-class.", author: "Emma D.", city: "New York" },
      ],
    },
    contact: {
      title: "Find us",
      address_label: "Address",
      hours_label: "Opening hours",
      phone_label: "Phone",
      email_label: "Email",
      follow_label: "Follow us",
      form: {
        name: "Your name",
        email: "Your email",
        phone: "Phone (optional)",
        message: "Your message or appointment request",
        send: "Send",
        success: "Message sent. We will reply within 24 hours.",
      },
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations["en"];

export default translations;
