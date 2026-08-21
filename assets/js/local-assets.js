const refreshLocalAssets = () => {
  document.querySelectorAll('.slides img[src], .slides iframe[src]').forEach((element) => {
    if (element.dataset.deckAssetRefreshed === 'true') return;

    const source = element.getAttribute('src');
    if (!source || /^(?:data:|blob:|#)/i.test(source)) return;

    const assetUrl = new URL(source, window.location.href);
    if (assetUrl.origin !== window.location.origin) return;

    assetUrl.searchParams.set('deck-version', String(window.deckAssetVersion));
    element.dataset.deckAssetRefreshed = 'true';
    element.src = assetUrl.href;
  });
};

Reveal.on('ready', refreshLocalAssets);

new MutationObserver(refreshLocalAssets).observe(document.querySelector('.slides'), {
  childList: true,
  subtree: true
});

