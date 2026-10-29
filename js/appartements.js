/* Page "Nos appartements" : clic sur une photo -> fenêtre avec toutes les photos + détails */
(function () {
    'use strict';

    var tiles = Array.prototype.slice.call(document.querySelectorAll('.apt-tile'));
    var modal = document.getElementById('aptModal');
    var mainImg = document.getElementById('aptMainImg');
    var thumbs = document.getElementById('aptThumbs');
    var body = document.getElementById('aptModalBody');
    var prevBtn = document.getElementById('aptPrev');
    var nextBtn = document.getElementById('aptNext');
    var photos = [];
    var index = 0;
    var lastFocus = null;

    function show(i) {
        index = (i + photos.length) % photos.length;
        mainImg.src = photos[index];
        Array.prototype.forEach.call(thumbs.children, function (t, k) {
            t.classList.toggle('active', k === index);
        });
    }

    function openModal(tile) {
        lastFocus = document.activeElement;
        var cover = tile.querySelector('img');
        photos = (tile.dataset.photos || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
        if (!photos.length) photos = [cover.getAttribute('src')];

        mainImg.alt = cover.alt;
        thumbs.innerHTML = '';
        photos.forEach(function (src, k) {
            var b = document.createElement('button');
            b.type = 'button';
            var im = document.createElement('img');
            im.src = src;
            im.alt = '';
            b.appendChild(im);
            b.addEventListener('click', function () { show(k); });
            thumbs.appendChild(b);
        });
        var multi = photos.length > 1;
        thumbs.style.display = multi ? 'flex' : 'none';
        prevBtn.style.display = multi ? '' : 'none';
        nextBtn.style.display = multi ? '' : 'none';

        // Contenu : étiquette (de la photo) + détails cachés dans la photo
        body.innerHTML = '';
        body.appendChild(tile.querySelector('.apt-tag').cloneNode(true));
        Array.prototype.forEach.call(tile.querySelector('.apt-detail').children, function (el) {
            body.appendChild(el.cloneNode(true));
        });

        show(0);
        modal.hidden = false;
        document.body.classList.add('modal-open');
        document.getElementById('aptClose').focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        mainImg.src = '';
        if (lastFocus) lastFocus.focus();
    }

    tiles.forEach(function (tile) {
        tile.addEventListener('click', function () { openModal(tile); });
        tile.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(tile);
            }
        });
    });

    document.getElementById('aptClose').addEventListener('click', closeModal);
    prevBtn.addEventListener('click', function () { show(index - 1); });
    nextBtn.addEventListener('click', function () { show(index + 1); });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (modal.hidden) return;
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowLeft') show(index - 1);
        else if (e.key === 'ArrowRight') show(index + 1);
    });

    // Balayage au doigt dans la fenêtre (mobile)
    var startX = null;
    mainImg.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    mainImg.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
        startX = null;
    });
})();