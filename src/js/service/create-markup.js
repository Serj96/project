import CocktailAPI from './getCocktail';
import {
  setCocktailToLocalStorage,
  getCocktailStorageData,
  removeFromLocalStorage,
} from './localStorage';
import emptyHeart from '../../images/hearts/empty-heart.png';
import fullHeart from '../../images/hearts/full-heart.png';
import Notiflix from 'notiflix';
import * as noResults from '../../images/notice/notice.png';
import * as noResults2x from '../../images/notice/notice@2x.png';

const favorite = new CocktailAPI();

const cocktailList = document.querySelector('.cocktails__list');

//              -------Click on "Add to Favorites buttons"-------

function onAddBtnClick(e) {
  const btn = e.target.closest('.js-add-btn');
  const data = getCocktailStorageData(favorite.KEY);
  console.log(data);
  const id = btn?.id;
  if (btn) {
    if (!data) {
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'cocktails');
    }
    if (data.includes(id)) {
      Notiflix.Notify.failure('Cocktail was deleted from favourites!');
      removeFromLocalStorage(id, 'cocktails');
      btn.classList.remove('activated');
    } else {
      Notiflix.Notify.success('Cocktail was added to favourites, Congrats!');
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'cocktails');
    }
  }
}

export function onAddModalBtnClick(e) {
  const btn = e.target.closest('.js-add-btn-modal');
  const data = getCocktailStorageData(favorite.KEY);
  const id = e.target.id;
  // console.log(e);
  if (btn) {
    if (!data) {
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'cocktails');
    }
    if (data.includes(id)) {
      Notiflix.Notify.failure('Cocktail was deleted from favourites!');
      removeFromLocalStorage(id, 'cocktails');
      btn.classList.remove('activated');
    } else {
      Notiflix.Notify.success('Cocktail was added to favourites, Congrats!');
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'cocktails');
    }
  }
}

export function onClickInnerModal(e) {
  // console.log(e);
  const btn = e.target.closest('[data-inner-modal-button]');
  const data = getCocktailStorageData(favorite.INGREDIENTS);
  const id = e.target.id;
  if (btn) {
    if (!data) {
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'ingredients');
    }
    if (data.includes(id)) {
      Notiflix.Notify.failure('Ingredient was deleted from favourites!');
      removeFromLocalStorage(id, 'ingredients');
      btn.classList.remove('activated');
    } else {
      Notiflix.Notify.success('Ingredient was added to favourites, Congrats!');
      btn.classList.add('activated');

      setCocktailToLocalStorage(id, 'ingredients');
    }
  }
}

//              -------Create markup-------

export function createMarkup({ strDrink, strDrinkThumb, idDrink }) {
  return /*html*/ `
      <li class="cocktails__item card-set-item"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="200">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="cocktails__box">
          <h2 class="cocktails__second-title dark--title">${strDrink}</h2>
          <div class="cocktails__button-box">
            <button
              type="button"
              class="cocktails__btn js-split cocktails__button-text"
              data-modal-cocktail-open
               data-id=${idDrink}
                id=${idDrink}
            >Learn more
            </button>
            <button id="${idDrink}" type="button" class="cocktails__btn cocktails__button-text dark--btn-back js-add-btn transparent ${shouldBeActivated(
    idDrink,
    'cocktails'
  )}" id="${idDrink}">Add to

              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>
          </div>
        </div>
      </li>`;
}

export function createListMarkup(data) {
  return data.drinks.map(item => createMarkup(item));
}

export function createRandomMarkup(arr) {
  return arr.map(item => createMarkup(item.data.drinks[0]));
}

//              -------Filter for screens (Adaptive)-------

export function markupFilter(markup) {
  if (window.screen.width < 768) {
    return markup.filter((_, index) => index < 3).join('');
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    return markup.filter((_, index) => index < 6).join('');
  } else return markup.filter((_, index) => index < 9).join('');
}

//              -------Render markup-------

export function renderMarkup(element, markup) {
  element.innerHTML = markup;
}

export function noResultsMarkup() {
  return `<li class="garcon"><img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img></li>`;
}

//              -------To toggle Add to favorite icon-------

export function shouldBeActivated(id, payLoad) {
  const data = getCocktailStorageData(payLoad);
  if (data) {
    return localStorage.getItem(payLoad)?.includes(id) ? 'activated' : '';
  } else {
    return;
  }
}

//                  --------Listeners-----------

export function afterLogIn() {
  cocktailList.addEventListener('click', onAddBtnClick);
}

export function afterLogOut() {
  cocktailList.removeEventListener('click', onAddBtnClick);
}
