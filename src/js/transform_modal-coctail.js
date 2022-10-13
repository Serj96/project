(() => {
  const refs = {
    removBtn: document.querySelector('[data-modal-b]'),
    addBtn: document.querySelector('[data-modal-a]'),
  };

  refs.addBtn.addEventListener('click', transformBtn);
  refs.removBtn.addEventListener('click', transformBtn2);

  function transformBtn() {
    refs.removBtn.classList.toggle('hidden_remove');
    refs.addBtn.classList.toggle('hidden_remove');
  }
  function transformBtn2() {
    refs.addBtn.classList.toggle('hidden_remove');
    refs.removBtn.classList.toggle('hidden_remove');
  }
})();
