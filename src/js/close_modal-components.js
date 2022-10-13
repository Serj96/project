const refs = {
  backdrop: document.querySelector('[data-inner-modal]'),
  closeBtn: document.querySelector('[data-inner-modal-close]'),
  openModalIngrdients: document.querySelectorAll('[data-modal-open]'),
  scaleModal: document.querySelector('[data-modal-scale]'),
};

refs.closeBtn.addEventListener('click', closeModal);

refs.openModalIngrdients.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    refs.backdrop.classList.remove('is-hidden-inner-modal');
    refs.scaleModal.classList.add('modal-scale');
  });
});
function closeModal() {
  refs.backdrop.classList.add('is-hidden-inner-modal');
  refs.scaleModal.classList.remove('modal-scale');
}
