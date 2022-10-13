(() => {
    const refs = {
      removBtn: document.querySelector('[data-modal-d]'),
      addBtn: document.querySelector('[data-modal-c]'),
    };
  
    refs.addBtn.addEventListener('click', transformBtn);
    refs.removBtn.addEventListener('click', transformBtn2)
  
    function transformBtn() {
      refs.removBtn.classList.toggle('hidden-components-modal');
      refs.addBtn.classList.toggle('hidden-components-modal');
    }
    function transformBtn2() {
    refs.addBtn.classList.toggle('hidden-components-modal');
    refs.removBtn.classList.toggle('hidden-components-modal');
    }
  })();