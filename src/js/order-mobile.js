(() => {
  const refs = {
    openOrdermobileBtn: document.querySelector('[data-ordermobile-open]'),
    closeOrdermobileBtn: document.querySelector('[data-ordermobile-close]'),
    ordermobile: document.querySelector('[data-ordermobile]'),
  };

  refs.openOrdermobileBtn.addEventListener('click', toggleOrdermobile);
  refs.closeOrdermobileBtn.addEventListener('click', toggleOrdermobile);

  function toggleOrdermobile() {
    refs.ordermobile.classList.toggle('is-hidden');
  }
})();