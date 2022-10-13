import CocktailAPI from './service/getCocktail';
import { loadMore, pagesDrop } from './pagination';
import {
  renderMarkup,
  createListMarkup,
  markupFilter,
} from './service/create-markup';

import Notiflix from 'notiflix';
import { onError } from './service/notification';
import { noResultsMarkup } from '../js/service/create-markup';

const listOfLetters = document.querySelector('.hero__list');
const cocktailList = document.querySelector('.cocktails__list');
const title = document.querySelector('.cocktails__first-title');
const mobileListOfLetter = document.querySelector('.hero__select');

export const btnLoad = document.querySelector('.load__more');
const optionsRef = document.querySelectorAll('.option');

listOfLetters.addEventListener('click', onLetterClick);
mobileListOfLetter.addEventListener('click', onLetterClick);
const cocktailApi = new CocktailAPI();

//! <--------1-------> ///

export function onLetterClick(e) {
  if (!e.target.innerHTML) return;
  const letter = e.target.innerHTML.toLowerCase();
  renderByLetter(letter);
  showLoadMoreBtn();
  pagesDrop();
}

function showLoadMoreBtn() {
  btnLoad.classList.remove('btn_is-hidden');
  btnLoad.addEventListener('click', loadMore);
}
export let markupLetter = '';

export async function renderByLetter(letter) {
  cocktailApi.letter = letter;
  const drinks = [];
  const response = await cocktailApi.getCocktailByLetter();
  // console.log(response);
  drinks.push(response);

  Promise.all(drinks).then(function (drinks) {
    // console.log(drinks);
    if (!drinks[0].data.drinks) {
      onError();
      title.innerHTML = "Sorry, we didn't find any cocktail for you";
      return (cocktailList.innerHTML = noResultsMarkup());
    }
    const markup = createListMarkup(drinks[0].data);
    markupLetter = markup;
    const filterMarkup = markupFilter(markupLetter);
    renderMarkup(cocktailList, filterMarkup);
  });
}
