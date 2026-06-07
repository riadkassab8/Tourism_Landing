export type Lang = "en" | "fr" | "ar";

export const translations = {
  en: {
    dir: "ltr" as const,
    nav: {
      brand: "HORIZONS",
      items: ["Destinations", "Philosophy", "Journal", "Bookings"],
      cta: "Begin Journey",
    },
    hero: {
      eyebrow: "The world is waiting",
      title1: "BEYOND THE",
      title2: "MAP",
      cta: "Explore the Unknown",
    },
    philosophy: {
      icon: null,
      heading1: "You've seen the landmarks.",
      heading2: "Now, experience the extraordinary.",
      body: "We design transformative journeys for those who refuse to be tourists. No crowded buses, no generic itineraries. Just you, raw untamed nature, and the kind of silence that changes how you see the world.",
    },
    destinations: {
      heading: "Curated",
      headingAccent: "Extremes",
      sub: "Where will you go next?",
      viewAll: "View all destinations",
      items: [
        {
          title: "Patagonia",
          subtitle: "The Edge of the Earth",
          description: "Navigate the jagged spires and ancient glaciers where the wind shapes the rock.",
        },
        {
          title: "The Sahara",
          subtitle: "Ocean of Sand",
          description: "Lose yourself in the infinite amber dunes under a canopy of unpolluted starlight.",
        },
        {
          title: "The Fjords",
          subtitle: "Silent Waters",
          description: "Sail through impossibly deep channels carved by time and ice.",
        },
        {
          title: "Kyoto",
          subtitle: "Whispers of Autumn",
          description: "Step into hidden gardens where time slows among the falling crimson leaves.",
        },
      ],
    },
    spacer: {
      line1: "Silence.",
      line2: "Scale.",
      line3: "Sublime.",
      sub: "The Horizons Promise",
    },
    journal: {
      heading: "Field Notes",
      sub: "Dispatches from the edge",
      articles: [
        {
          tag: "Expedition Report",
          title: "Chasing the Aurora in Svalbard",
          excerpt: "The silence is absolute until the sky catches fire. An account of our 14-day traverse through the high Arctic.",
        },
        {
          tag: "Traveler Profile",
          title: "Finding Stillness in the Dune Sea",
          excerpt: "How stepping away from connectivity and into the vast expanse of the Sahara changes your perception of time.",
        },
      ],
    },
    features: [
      {
        title: "Remote Access",
        body: "We secure permits to locations most travelers never see. Off-grid, untouched, and strictly regulated for true isolation.",
      },
      {
        title: "Expert Guides",
        body: "Led by seasoned mountaineers, native trackers, and photographers who understand the rhythm of the landscape.",
      },
      {
        title: "Zero Impact",
        body: "Leave no trace. Our expeditions are carbon-negative, funding local conservation efforts at every destination we touch.",
      },
    ],
    testimonial: {
      quote: "I thought I knew what travel was. Horizons stripped away the artifice and showed me the raw, unfiltered world. It wasn't just a vacation — it was an awakening.",
      name: "Sarah Jenkins",
      trip: "Patagonia Expedition, 2024",
    },
    footer: {
      heading1: "Your Next Chapter",
      heading2: "Begins Here.",
      body: "Applications for the 2025 season are currently open. Spaces are strictly limited to preserve the integrity of the experience.",
      cta: "Request an Itinerary",
      links: ["Instagram", "Journal", "Terms"],
      copy: `© ${new Date().getFullYear()} Horizons Travel Co. All rights reserved.`,
    },
  },

  fr: {
    dir: "ltr" as const,
    nav: {
      brand: "HORIZONS",
      items: ["Destinations", "Philosophie", "Journal", "Réservations"],
      cta: "Commencer",
    },
    hero: {
      eyebrow: "Le monde vous attend",
      title1: "AU-DELÀ DE LA",
      title2: "CARTE",
      cta: "Explorer l'Inconnu",
    },
    philosophy: {
      icon: null,
      heading1: "Vous avez vu les monuments.",
      heading2: "Vivez maintenant l'extraordinaire.",
      body: "Nous concevons des voyages transformateurs pour ceux qui refusent d'être de simples touristes. Pas de bus bondés, pas d'itinéraires génériques. Juste vous, la nature sauvage et indomptée, et ce silence qui change votre vision du monde.",
    },
    destinations: {
      heading: "Extrêmes",
      headingAccent: "Sélectionnés",
      sub: "Où irez-vous ensuite ?",
      viewAll: "Voir toutes les destinations",
      items: [
        {
          title: "Patagonie",
          subtitle: "Au bout du monde",
          description: "Traversez les aiguilles déchiquetées et les anciens glaciers où le vent façonne la roche.",
        },
        {
          title: "Le Sahara",
          subtitle: "Océan de sable",
          description: "Perdez-vous dans les dunes ambrées infinies sous un ciel d'étoiles non pollué.",
        },
        {
          title: "Les Fjords",
          subtitle: "Eaux silencieuses",
          description: "Naviguez dans des chenaux d'une profondeur impossible, sculptés par le temps et la glace.",
        },
        {
          title: "Kyoto",
          subtitle: "Murmures d'automne",
          description: "Entrez dans des jardins cachés où le temps ralentit parmi les feuilles cramoisies tombantes.",
        },
      ],
    },
    spacer: {
      line1: "Silence.",
      line2: "Grandeur.",
      line3: "Sublime.",
      sub: "La Promesse Horizons",
    },
    journal: {
      heading: "Carnets de Route",
      sub: "Dépêches depuis l'horizon",
      articles: [
        {
          tag: "Rapport d'Expédition",
          title: "À la poursuite de l'Aurore au Svalbard",
          excerpt: "Le silence est total jusqu'à ce que le ciel s'embrase. Récit de notre traversée de 14 jours en haute Arctique.",
        },
        {
          tag: "Portrait de Voyageur",
          title: "Trouver la Sérénité dans la Mer de Dunes",
          excerpt: "Comment s'éloigner du monde connecté et plonger dans l'immensité du Sahara transforme votre perception du temps.",
        },
      ],
    },
    features: [
      {
        title: "Accès Hors des Sentiers",
        body: "Nous obtenons des permis pour des lieux que la plupart des voyageurs ne voient jamais. Hors réseau, intouchés, strictement réglementés.",
      },
      {
        title: "Guides Experts",
        body: "Dirigés par des alpinistes chevronnés, des pisteurs locaux et des photographes qui comprennent le rythme du paysage.",
      },
      {
        title: "Zéro Impact",
        body: "Ne laissez aucune trace. Nos expéditions sont carbone-négatives, finançant des efforts de conservation locale.",
      },
    ],
    testimonial: {
      quote: "Je pensais savoir ce que voyager signifiait. Horizons a tout dépouillé et m'a montré le monde brut et sans filtre. Ce n'était pas seulement des vacances — c'était un éveil.",
      name: "Sarah Jenkins",
      trip: "Expédition Patagonie, 2024",
    },
    footer: {
      heading1: "Votre Prochain Chapitre",
      heading2: "Commence Ici.",
      body: "Les candidatures pour la saison 2025 sont ouvertes. Les places sont strictement limitées pour préserver l'intégrité de l'expérience.",
      cta: "Demander un Itinéraire",
      links: ["Instagram", "Journal", "Mentions"],
      copy: `© ${new Date().getFullYear()} Horizons Travel Co. Tous droits réservés.`,
    },
  },

  ar: {
    dir: "rtl" as const,
    nav: {
      brand: "هورايزونز",
      items: ["الوجهات", "فلسفتنا", "المجلة", "الحجوزات"],
      cta: "ابدأ الرحلة",
    },
    hero: {
      eyebrow: "العالم ينتظرك",
      title1: "ما وراء",
      title2: "الخريطة",
      cta: "اكتشف المجهول",
    },
    philosophy: {
      icon: null,
      heading1: "لقد رأيت المعالم.",
      heading2: "حان الوقت لتعيش الاستثنائي.",
      body: "نصمّم رحلات تحويلية لمن يرفضون أن يكونوا مجرد سياح. لا حافلات مزدحمة، لا مسارات مبتذلة. أنت فقط والطبيعة البرية، وذلك الصمت الذي يغير نظرتك للعالم.",
    },
    destinations: {
      heading: "وجهات",
      headingAccent: "استثنائية",
      sub: "أين ستذهب في مرتك القادمة؟",
      viewAll: "عرض جميع الوجهات",
      items: [
        {
          title: "باتاغونيا",
          subtitle: "حافة الأرض",
          description: "تجوّل بين القمم الشاهقة والأنهار الجليدية العريقة حيث تشكّل الرياح الصخر.",
        },
        {
          title: "الصحراء الكبرى",
          subtitle: "محيط الرمال",
          description: "اضيع في الكثبان العنبرية اللانهائية تحت سماء مرصّعة بالنجوم بعيدًا عن التلوث الضوئي.",
        },
        {
          title: "الفيوردات",
          subtitle: "المياه الصامتة",
          description: "أبحر عبر قنوات عميقة بشكل لا يصدّق نحتها الزمن والجليد.",
        },
        {
          title: "كيوتو",
          subtitle: "همسات الخريف",
          description: "ادخل إلى حدائق مخفية حيث يتباطأ الزمن بين أوراق القرمزي المتساقطة.",
        },
      ],
    },
    spacer: {
      line1: "صمت.",
      line2: "اتساع.",
      line3: "روعة.",
      sub: "وعد هورايزونز",
    },
    journal: {
      heading: "ملاحظات ميدانية",
      sub: "تقارير من الحافة",
      articles: [
        {
          tag: "تقرير استكشافي",
          title: "ملاحقة الشفق القطبي في سفالبارد",
          excerpt: "الصمت مطبق حتى تشتعل السماء. رواية رحلتنا التي امتدت 14 يومًا عبر القطب الشمالي.",
        },
        {
          tag: "ملف مسافر",
          title: "إيجاد السكينة في بحر الكثبان",
          excerpt: "كيف يغيّر الابتعاد عن الشبكات الرقمية والانغماس في شساعة الصحراء إدراكنا للزمن.",
        },
      ],
    },
    features: [
      {
        title: "وصول للمناطق النائية",
        body: "نحصل على تصاريح لأماكن لا يراها معظم المسافرين. بعيدة عن الشبكة، بكر، وخاضعة لرقابة صارمة.",
      },
      {
        title: "مرشدون خبراء",
        body: "يقودنا متسلقون محترفون ومتتبعون محليون ومصورون يفهمون إيقاع الطبيعة.",
      },
      {
        title: "صفر تأثير",
        body: "لا أثر يُترك. رحلاتنا سلبية الكربون، وتموّل جهود الحفاظ على البيئة في كل وجهة نزورها.",
      },
    ],
    testimonial: {
      quote: "ظننت أنني أعرف ما يعنيه السفر. كشفت لي هورايزونز العالم في صورته الخام الحقيقية. لم تكن إجازة فحسب — كانت صحوةً.",
      name: "سارة جنكينز",
      trip: "رحلة باتاغونيا، 2024",
    },
    footer: {
      heading1: "فصلك القادم",
      heading2: "يبدأ من هنا.",
      body: "التسجيل لموسم 2025 مفتوح حاليًا. الأماكن محدودة للحفاظ على تميّز التجربة.",
      cta: "اطلب مسار رحلة",
      links: ["انستغرام", "المجلة", "الشروط"],
      copy: `© ${new Date().getFullYear()} هورايزونز للسفر. جميع الحقوق محفوظة.`,
    },
  },
};
