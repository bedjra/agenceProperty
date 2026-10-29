// Fichier complet : à enregistrer sous js/galerie.js
// et à charger APRÈS agence.js : <script src="js/galerie.js"></script>
// (dans index.html ET dans appartements.html)

// =====================================================
//  GALERIE : traductions FR + EN
// =====================================================
Object.assign(I18N.fr, {
  'nav.gallery': 'Galerie',
  'gal.title': 'Galerie',
  'gal.intro': 'Nos appartements meublés et un aperçu de nos prestations.',
  'gal.more': 'Voir +',
  'gal.a1.tag': 'Haut standing',
  'gal.a1.title': 'Appartement meublé, 1 chambre salon',
  'gal.a1.loc': 'Agoè Minamadou, en bordure de la voie goudronnée, à côté du supermarché Le Champion',
  'gal.included': 'Services inclus dans le tarif de location :',
  'gal.inc1': 'Agent de sécurité',
  'gal.inc2': "Agent d'entretien",
  'gal.night': '/ nuitée',
  'gal.deposit': "Caution d'entrée",
  'gal.book': 'Réserver sur WhatsApp',
  'gal.a2.tag': 'Meublé',
  'gal.a2.title': "Chambre salon meublé, rez-de-chaussée d'une villa basse",
  'gal.a2.loc': 'Avédji, en bordure de goudron, près du restaurant Opéra',
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
  'gal.a1.tag': 'High standard',
  'gal.a1.title': 'Furnished apartment, 1 bedroom + living room',
  'gal.a1.loc': 'Agoè Minamadou, along the paved road, next to the Le Champion supermarket',
  'gal.included': 'Services included in the rental price:',
  'gal.inc1': 'Security guard',
  'gal.inc2': 'Cleaning staff',
  'gal.night': '/ night',
  'gal.deposit': 'Entry deposit',
  'gal.book': 'Book on WhatsApp',
  'gal.a2.tag': 'Furnished',
  'gal.a2.title': 'Furnished 1 bedroom + living room, ground floor of a low villa',
  'gal.a2.loc': 'Avédji, along the paved road, near the Opéra restaurant',
  'gal.p.title': 'Our cleaning and upkeep services',
  'gal.p.intro': 'A few pictures of our work.',

  // appartements.html page
  'app.meta.title': "Our apartments | L'AGENCE",
  'app.back': '← Back to home',
  'app.title': 'Our furnished apartments',
  'app.intro': 'Discover all our available homes in Lomé, with photos, prices and included services.',
  'app.ask': 'Need something else? Contact us'
});

// Sur la page appartements.html, garde le bon titre d'onglet quand on change de langue
(function () {
  const baseSetLang = setLang;
  setLang = function (lang) {
    baseSetLang(lang);
    const key = document.body.dataset.title;
    if (key && I18N[lang] && I18N[lang][key]) document.title = I18N[lang][key];
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