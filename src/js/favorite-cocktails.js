import { createRandomMarkup, renderMarkup } from './service/create-markup';
import { getCocktailStorageData } from '../js/service/localStorage';
import { onOpenModalClick } from '../js/modal_markup';
import CocktailAPI from './service/getCocktail';
import * as noResults from '../images/notice/notice.png';
import * as noResults2x from '../images/notice/notice@2x.png';

const favoriteList = document.querySelector('.cocktails__list');

const favorite = new CocktailAPI();

// ---------------------------On page load----------------------------------

export function onFavoriteCocktailsLoad() {
  const data = getCocktailStorageData(favorite.KEY);
  // console.log(data);
  if (!data.length) {
    favoriteList.innerHTML = noCocktailResultMarkup();
  } else {
    toCountAndRenderIngr(data);
  }
}

// ---------------------------To render markup----------------------------------

function render(data) {
  // console.log(data);
  const markup = createRandomMarkup(data).join('');
  // console.log(markup);
  renderMarkup(favoriteList, markup);
}

// ---------------Counting and rendering cards----------------------------------

async function toCountAndRenderIngr(data) {
  const drinks = [];
  // console.log(data);
  data.forEach(id => {
    const response = favorite.getCocktailsId(id);
    drinks.push(response);
    // console.log(drinks);
  });
  Promise.all(drinks).then(render);
}

// ------------------------Copy+text added-------------------------------

function noCocktailResultMarkup() {
  return `<li class="garcon"> Sorry, we did not find any ingredient for you<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img></li>`;
}
window.addEventListener('load', onFavoriteCocktailsLoad);
