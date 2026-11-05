// Fichier complet : à enregistrer sous js/galerie.js
// et à charger APRÈS agence.js : <script src="js/galerie.js"></script>
// (dans index.html ET dans appartements.html)

// =====================================================
//  GALERIE : tri alphabétique des appartements
// =====================================================
(function () {
  var grid = document.querySelector('.apt-grid');
  if (!grid) return;

  var tiles = Array.prototype.slice.call(grid.querySelectorAll('.apt-tile'));

  function key(tile) {
    // utilise data-sort si présent, sinon le nom du lieu affiché
    var txt = tile.dataset.sort ||
      tile.querySelector('.apt-over-loc').textContent;
    return txt
      .trim()
      .replace(/^(à côté de|a cote de|près de)\s+/i, ''); // "À côté de CERFER" -> "CERFER"
  }

  tiles.sort(function (a, b) {
    return key(a).localeCompare(key(b), 'fr', { sensitivity: 'base' });
  });

  tiles.forEach(function (t) { grid.appendChild(t); });
})();

// =====================================================
//  GALERIE : traductions FR + EN
// =====================================================
Object.assign(I18N.fr, {
  'nav.gallery': 'Galerie',
  'gal.title': 'Galerie',
  'gal.intro': 'Nos appartements meublés et un aperçu de nos prestations.',
  'gal.more': 'Voir +',

  // --- Textes communs ---
  'gal.night': '/ nuitée',
  'gal.day': '/ jour',
  'gal.month': '/ mois',
  'gal.monthAll': '/ mois, tous frais inclus',
  'gal.deposit': "Caution d'entrée",
  'gal.book': 'Réserver sur WhatsApp',
  'gal.contact': 'Contacter sur WhatsApp',
  'gal.quote': 'Demander un devis',
  'gal.included': 'Services inclus dans le tarif de location :',
  'gal.inc.title': 'Inclus :',
  'wa.quote': "Bonjour L'AGENCE, je souhaite un devis pour l'ameublement.",

  // --- Appartement 1 : Agoè Minamadou ---
  'gal.a1.tag': 'Haut standing',
  'gal.a1.title': 'Appartement meublé, 1 chambre salon',
  'gal.a1.loc': 'Agoè Minamadou, en bordure de la voie goudronnée, à côté du supermarché Le Champion',
  'gal.inc1': 'Agent de sécurité',
  'gal.inc2': "Agent d'entretien",

  // --- Appartement 2 : Avédji ---
  'gal.a2.tag': 'Meublé',
  'gal.a2.title': "Chambre salon meublé, rez-de-chaussée d'une villa basse",
  'gal.a2.loc': 'Avédji, en bordure de goudron, près du restaurant Opéra',

  // --- Appartement 3 : Studio, Avédji Léo 2000 ---
  'gal.a3.title': 'Studio meublé à Avédji Léo 2000',

  // --- Appartement 4 : Studio, Adidogomé Madiba ---
  'gal.a4.title': 'Studio meublé à Adidogomé Madiba',

  // --- Appartement 5 : Djagblé ---
  'gal.a5.tag': 'Nouvelle construction',
  'gal.a5.title': 'Nouvelle construction à Djagblé',
  'gal.a5.loc': 'Djagblé, non loin du lycée, à 200 m du goudron',
  'gal.a5.desc': 'Nouvelle construction : pièces, WC, douche et cuisine internes. Finition en cours.',
  'gal.a5.i1': 'Avance et caution : 8 mois',
  'gal.a5.i2': 'Visite : Gratuite',
  'gal.a5.i3': "Frais d'agence : 1 mois",

  // --- Appartement 6 : 2 chambres salon, Avédji ---
  'gal.a6.tag': '2 chambres salon',
  'gal.a6.locShort': 'Avédji, von face à la pharmacie Apollon',
  'gal.a6.title': 'Appartement de 2 chambres salon à Avédji',
  'gal.a6.loc': 'Avédji, dans le von face à la pharmacie Apollon',
  'gal.a6.inc1': 'Gardien de nuit',
  'gal.a6.inc2': 'Garage pour voiture et moto',
  'gal.a6.inc3': 'Forage',
  'gal.a6.i1': 'Caution : 4 mois',
  'gal.a6.i2': 'Avance : 2 mois',
  'gal.a6.i3': 'Commission : 1 mois',

  // --- Appartements 7 à 12 ---
  'gal.a7.tag': 'Disponible',
  'gal.a7.loc': 'À côté de CERFER',
  'gal.a7.title': 'Appartement disponible à côté de CERFER',
  'gal.a8.title': 'Chambre salon, même immeuble à côté de CERFER',
  'gal.a9.title': 'Logement disponible à Sito Aéroport',
  'gal.a10.title': 'Logement disponible à Avédji',
  'gal.a10.locShort': 'Avédji, pas loin de la pharmacie Apollon',
  'gal.a11.title': 'Chambre salon à la journée',
  'gal.a12.title': '2 chambres salon à la journée',

  // --- Appartement 13 : Avédji (nuitée, non affiché pour le moment) ---
  'gal.a13.title': 'Logement disponible à Lomé, Avédji',
  'gal.a13.locShort': 'Lomé, Avédji',

  // --- Appartement 14 : Avénou, station T-oil ---
  'gal.a14.title': 'Chambre salon meublé à Avénou',
  'gal.a14.loc': 'Avénou, à la station-service T-oil',
  'gal.a14.locShort': 'Avénou, station T-oil',

  // --- Appartement 15 : Agoè Assiyéyé ---
  'gal.a15.title': "Studio meublé à l'étage à Agoè Assiyéyé",

  // --- Appartement 16 : Adidoadin ---
  'gal.a16.title': '2 chambres salon meublé à Adidoadin',

  // --- Vidéos ---
  'gal.v.title': 'Nos vidéos',

  'gal.v3.title': "Appartement meublé à l'étage, chambre salon tout interne",
  'gal.v3.f1': 'Terrasse',
  'gal.v3.f2': 'Machine à laver',
  'gal.v3.f3': 'Rooftop',
  'gal.v3.loc': 'Agbalepedo, Cours Lumière, au bord du goudron',
  'gal.v3.dep': 'Caution : 50 000 F, remboursable',
  'gal.v3.fee1': 'Honoraires : 25 % (court séjour)',
  'gal.v3.fee2': 'Honoraires : 1 mois (long séjour)',

  'gal.v6.title': "Appartement neuf à l'étage, bien staffé, dans une belle maison",
  'gal.v6.f1': 'Pièces',
  'gal.v6.f2': 'WC et douche internes',
  'gal.v6.f3': 'Cuisine interne',
  'gal.v6.f4': 'Cash power personnel',
  'gal.v6.loc': 'Amoutiévé, non loin de la pharmacie Akofa',
  'gal.v6.t1': 'Avance et caution : 10 mois',
  'gal.v6.t2': 'Visite : 5 000 F',
  'gal.v6.t3': 'Commission : 1 mois',

  'gal.v7.title': "À louer : nouvelle construction à l'étage",
  'gal.v7.loc': "Derrière l'école primaire publique Kitidjan, non loin de la maison du ministre Bawara et de la clôture de l'état-major",
  'gal.v7.t1': 'Avance et caution : 12 mois, négociable',
  'gal.v7.t2': 'Produits en direct',

  // --- Ameublements ---
  'gal.f.title': 'Nos ameublements',
  'gal.f.intro': 'Meubles et décoration pour un logement prêt à vivre.',
  'gal.f1.tag': 'Salon',
  'gal.f1.name': 'Ameublement salon',
  'gal.f1.title': 'Ameublement de salon',
  'gal.f1.desc': 'Canapés, tables et décoration pour un salon accueillant.',
  'gal.f2.tag': 'Ameublement',
  'gal.f2.name': 'Ameublement complet',
  'gal.f2.title': 'Ameublement complet',
  'gal.f2.desc': 'Meubles et décoration pour un logement prêt à vivre.',

  // --- Prestations ---
  'gal.p.title': "Nos prestations de nettoyage et d'entretien",
  'gal.p.intro': 'Quelques images de nos prestations.',

  // Page appartements.html
  'app.meta.title': "Nos appartements | L'AGENCE",
  'app.back': "← Retour à l'accueil",
  'app.title': 'Nos appartements meublés',
  'app.intro': 'Découvrez tous nos logements disponibles à Lomé, avec photos, tarifs et services inclus.',
  'app.ask': 'Un autre besoin ? Contactez-nous'
});

Object.assign(I18N.en, {
  'nav.gallery': 'Gallery',
  'gal.title': 'Gallery',
  'gal.intro': 'Our furnished apartments and a glimpse of our services.',
  'gal.more': 'See more',

  // --- Common texts ---
  'gal.night': '/ night',
  'gal.day': '/ day',
  'gal.month': '/ month',
  'gal.monthAll': '/ month, all fees included',
  'gal.deposit': 'Entry deposit',
  'gal.book': 'Book on WhatsApp',
  'gal.contact': 'Contact on WhatsApp',
  'gal.quote': 'Request a quote',
  'gal.included': 'Services included in the rental price:',
  'gal.inc.title': 'Included:',
  'wa.quote': "Hello L'AGENCE, I would like a quote for furnishing.",

  // --- Apartment 1: Agoè Minamadou ---
  'gal.a1.tag': 'High standard',
  'gal.a1.title': 'Furnished apartment, 1 bedroom + living room',
  'gal.a1.loc': 'Agoè Minamadou, along the paved road, next to the Le Champion supermarket',
  'gal.inc1': 'Security guard',
  'gal.inc2': 'Cleaning staff',

  // --- Apartment 2: Avédji ---
  'gal.a2.tag': 'Furnished',
  'gal.a2.title': 'Furnished 1 bedroom + living room, ground floor of a low villa',
  'gal.a2.loc': 'Avédji, along the paved road, near the Opéra restaurant',

  // --- Apartment 3: Studio, Avédji Léo 2000 ---
  'gal.a3.title': 'Furnished studio in Avédji Léo 2000',

  // --- Apartment 4: Studio, Adidogomé Madiba ---
  'gal.a4.title': 'Furnished studio in Adidogomé Madiba',

  // --- Apartment 5: Djagblé ---
  'gal.a5.tag': 'New building',
  'gal.a5.title': 'New building in Djagblé',
  'gal.a5.loc': 'Djagblé, not far from the high school, 200 m from the paved road',
  'gal.a5.desc': 'New building: rooms, toilet, shower and kitchen inside. Finishing work in progress.',
  'gal.a5.i1': 'Advance and deposit: 8 months',
  'gal.a5.i2': 'Viewing: Free',
  'gal.a5.i3': 'Agency fee: 1 month',

  // --- Apartment 6: 2 bedrooms + living room, Avédji ---
  'gal.a6.tag': '2 bedrooms + living room',
  'gal.a6.locShort': 'Avédji, street opposite the Apollon pharmacy',
  'gal.a6.title': '2 bedrooms + living room apartment in Avédji',
  'gal.a6.loc': 'Avédji, on the street opposite the Apollon pharmacy',
  'gal.a6.inc1': 'Night guard',
  'gal.a6.inc2': 'Garage for car and motorbike',
  'gal.a6.inc3': 'Borehole (well water)',
  'gal.a6.i1': 'Deposit: 4 months',
  'gal.a6.i2': 'Advance: 2 months',
  'gal.a6.i3': 'Commission: 1 month',

  // --- Apartments 7 to 12 ---
  'gal.a7.tag': 'Available',
  'gal.a7.loc': 'Next to CERFER',
  'gal.a7.title': 'Apartment available next to CERFER',
  'gal.a8.title': '1 bedroom + living room, same building next to CERFER',
  'gal.a9.title': 'Property available in Sito Aéroport',
  'gal.a10.title': 'Property available in Avédji',
  'gal.a10.locShort': 'Avédji, not far from the Apollon pharmacy',
  'gal.a11.title': '1 bedroom + living room, daily rental',
  'gal.a12.title': '2 bedrooms + living room, daily rental',

  // --- Apartment 13: Avédji (nightly, not displayed for now) ---
  'gal.a13.title': 'Property available in Lomé, Avédji',
  'gal.a13.locShort': 'Lomé, Avédji',

  // --- Apartment 14: Avénou, T-oil station ---
  'gal.a14.title': 'Furnished 1 bedroom + living room in Avénou',
  'gal.a14.loc': 'Avénou, at the T-oil service station',
  'gal.a14.locShort': 'Avénou, T-oil station',

  // --- Apartment 15: Agoè Assiyéyé ---
  'gal.a15.title': 'Furnished studio on the upper floor in Agoè Assiyéyé',

  // --- Apartment 16: Adidoadin ---
  'gal.a16.title': 'Furnished 2 bedrooms + living room in Adidoadin',

  // --- Videos ---
  'gal.v.title': 'Our videos',

  'gal.v3.title': 'Furnished upper-floor apartment, 1 bedroom + living room, all indoor',
  'gal.v3.f1': 'Terrace',
  'gal.v3.f2': 'Washing machine',
  'gal.v3.f3': 'Rooftop',
  'gal.v3.loc': 'Agbalepedo, Cours Lumière, along the paved road',
  'gal.v3.dep': 'Deposit: 50,000 F, refundable',
  'gal.v3.fee1': 'Fees: 25% (short stay)',
  'gal.v3.fee2': 'Fees: 1 month (long stay)',

  'gal.v6.title': 'New upper-floor apartment, nicely finished, in a beautiful house',
  'gal.v6.f1': 'Rooms',
  'gal.v6.f2': 'Indoor toilet and shower',
  'gal.v6.f3': 'Indoor kitchen',
  'gal.v6.f4': 'Personal prepaid electricity meter',
  'gal.v6.loc': 'Amoutiévé, not far from the Akofa pharmacy',
  'gal.v6.t1': 'Advance and deposit: 10 months',
  'gal.v6.t2': 'Viewing: 5,000 F',
  'gal.v6.t3': 'Commission: 1 month',

  'gal.v7.title': 'For rent: new upper-floor building',
  'gal.v7.loc': "Behind Kitidjan public primary school, not far from minister Bawara's house and the General Staff fence",
  'gal.v7.t1': 'Advance and deposit: 12 months, negotiable',
  'gal.v7.t2': 'Direct utilities',

  // --- Furnishing ---
  'gal.f.title': 'Our furnishing',
  'gal.f.intro': 'Furniture and decoration for a home ready to live in.',
  'gal.f1.tag': 'Living room',
  'gal.f1.name': 'Living room furnishing',
  'gal.f1.title': 'Living room furnishing',
  'gal.f1.desc': 'Sofas, tables and decoration for a welcoming living room.',
  'gal.f2.tag': 'Furnishing',
  'gal.f2.name': 'Complete furnishing',
  'gal.f2.title': 'Complete furnishing',
  'gal.f2.desc': 'Furniture and decoration for a home ready to live in.',

  // --- Services ---
  'gal.p.title': 'Our cleaning and upkeep services',
  'gal.p.intro': 'A few pictures of our work.',

  // appartements.html page
  'app.meta.title': "Our apartments | L'AGENCE",
  'app.back': '← Back to home',
  'app.title': 'Our furnished apartments',
  'app.intro': 'Discover all our available homes in Lomé, with photos, prices and included services.',
  'app.ask': 'Need something else? Contact us'
});

// Sur la page appartements.html, garde le bon titre d'onglet quand on change de langue.
// Met aussi à jour le message WhatsApp des boutons "Demander un devis" (classe wa-quote).
(function () {
  const baseSetLang = setLang;
  setLang = function (lang) {
    baseSetLang(lang);

    const key = document.body.dataset.title;
    if (key && I18N[lang] && I18N[lang][key]) document.title = I18N[lang][key];

    const msg = I18N[lang] && I18N[lang]['wa.quote'];
    if (msg) {
      document.querySelectorAll('.wa-quote').forEach((a) => {
        a.href = 'https://wa.me/22890458096?text=' + encodeURIComponent(msg);
      });
    }
  };
})();

// Réapplique la langue pour traduire les nouveaux textes
setLang(document.documentElement.lang === 'en' ? 'en' : 'fr');

// =====================================================
//  GALERIE : agrandissement des photos (lightbox)
// =====================================================
(function () {
  const box = document.getElementById('lightbox');
  if (!box) return;

  const img = document.getElementById('lbImg');
  const items = Array.from(document.querySelectorAll('.g-item[data-full]'));
  let groupItems = items;
  let index = 0;

  function show(i) {
    index = (i + groupItems.length) % groupItems.length;
    const el = groupItems[index];
    img.src = el.dataset.full;
    img.alt = el.querySelector('img') ? el.querySelector('img').alt : '';
  }

  function open(el) {
    // Navigation limitée aux photos du même bloc (même appartement / même grille)
    const group = el.closest('.apt-photos, .presta-grid');
    groupItems = group ? Array.from(group.querySelectorAll('.g-item[data-full]')) : items;
    show(groupItems.indexOf(el));
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
  }

  items.forEach((el) => el.addEventListener('click', () => open(el)));
  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(index + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();