import { getUser } from './service';
import Notiflix from 'notiflix';

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuBtns: document.querySelector('[data-menu-btn]'),
    linkRefs: document.querySelectorAll('.event-stopper'),
    listBurger: document.querySelector('.burger-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  // refs.listBurger.addEventListener('click', onBurgerListClick);

  function toggleModal(e) {
    refs.menu.classList.toggle('is-open');
    console.log(e.target);
    if (!getUser()) {
      refs.linkRefs.forEach(element => {
        element.style.pointerEvents = 'none';
        element.style.opacity = 0.5;
      });
    }
  }
})();
