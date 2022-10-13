import { markupFilter } from './service/create-markup';
import { refs } from './modal_markup';
import { markupLetter, btnLoad } from './searchByLetter';

let pages = 1;

export function pagesDrop() {
  pages = 1;
}

export function btnHide() {
  const markup = markupLetter;
  if (refs.cocktailsList.children.length === markup.length) {
    btnLoad.classList.add('btn_is-hidden');
    pages = 1;
  }
}

export function loadMore() {
  const markup = markupLetter;

  const coctailsLength = refs.cocktailsList.children.length;

  pages++;

  function quantityFilter(val) {
    return markup
      .filter((_, index) => {
        if (index > coctailsLength - 1 && index < val * pages)
          // console.log('index', index);
          return index > coctailsLength - 1 && index < val * pages;
      })
      .join('');
  }

  let quantityMarkup = [];

  if (window.screen.width < 768) {
    quantityMarkup = quantityFilter(3);
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    quantityMarkup = quantityFilter(6);
  } else quantityMarkup = quantityFilter(9);

  refs.cocktailsList.insertAdjacentHTML('beforeend', quantityMarkup);

  btnHide();
}
