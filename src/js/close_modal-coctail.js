(() => {
  const refs = {
    backdrop: document.querySelector('[data-modal]'),
    closeBtn: document.querySelector('[data-modal-close]'),
  };

  refs.closeBtn.addEventListener('click', closeModal);

  function closeModal() {
    refs.backdrop.classList.add('is-hidden-modal-coctails');
    document.body.classList.toggle('body-owerly');
  }
})();
