import {
  getCocktailStorageData,
  removeFromLocalStorage,
} from '../js/service/localStorage';
import CocktailAPI from './service/getCocktail';
import emptyHeart from '../images/hearts/empty-heart.png';
import fullHeart from '../images/hearts/full-heart.png';
import * as noResults from '../images/notice/notice.png';
import * as noResults2x from '../images/notice/notice@2x.png';
import Notiflix from 'notiflix';

const favorite = new CocktailAPI();
const favoriteListRef = document.querySelector('.favorite__list-card');

// ---------------------------On page load----------------------------------

export function onFavoriteIngredientsLoad() {
  // const markup = noResultsMarkup();
  const data = getCocktailStorageData(favorite.INGREDIENTS);
  if (!data.length) {
    favoriteListRef.innerHTML = noResultsMarkup();
  } else {
    toCountAndRenderIngredient(data);
    const FavListRef = document.querySelector('.favorite__list-card');
    FavListRef.addEventListener('click', onRemoveIngrBtnClick);
    FavListRef.addEventListener('click', onIngredientClick);
  }
}

// ---------------------------To render markup----------------------------------

function render(data) {
  const markup = createCards(data).join('');

  renderMarkupIngred(favoriteListRef, markup);
}

// ---------------Counting and rendering cards----------------------------------

async function toCountAndRenderIngredient(data) {
  const ingredients = [];
  data.forEach(iid => {
    const response = favorite.getIngredientById(iid);
    ingredients.push(response);
  });
  Promise.all(ingredients).then(render);
}

// ------------------Create favorite ingredients markup--------------------------

export function createFavoriteIngredientsMarkup({
  strIngredient,
  strType,
  idIngredient,
}) {
  return /*html*/ `
      <li class="favorite__list-item cocktails__item card-set-item">
      <p class="favorite__list-name dark--title">${strIngredient}</p>
      <p class="favorite__list-type dark--text">${
        strType === null ? strIngredient : strType
      }</p>
      <div class="favorite__btn-wrap">
        <button
              type="button"
              class="js-ingr cocktails__btn cocktails__button-text"
              data-modal-ingredient-open
               data-id=${idIngredient}
            >Learn more
            </button>
            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ${shouldBeActive(
              idIngredient,
              'ingredients'
            )}" data-id="${idIngredient}">Remove
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>
      </div>
    </li>`;
}

//          ---------------Function copies :(-------------------

function toIdentifyStrType(ingredient) {
  return ingredient.strType === null
    ? ingredient.strIngredient
    : ingredient.strType;
}

function toMakeDescriptionText(ingredient) {
  return ingredient.strDescription === null
    ? 'Sorry, guys we do not have any info about that'
    : ingredient.strDescription;
}

function shouldBeActive(id, payLoad) {
  const data = getCocktailStorageData(payLoad);
  if (data) {
    return localStorage.getItem(payLoad).includes(id) ? 'activated' : '';
  } else {
    return;
  }
}

function createCards(arr) {
  // console.log(arr);
  return arr.map(item =>
    createFavoriteIngredientsMarkup(item.data.ingredients[0])
  );
}

function noResultsMarkup() {
  return `<li class="garcon"> Sorry, we did not find any ingredient for you<img class="no-result" srcset = "${noResults}", srcset =  "${noResults2x}" src="${noResults2x}" alt="No Results"></img></li>`;
}

function renderMarkupIngred(element, markup) {
  element.innerHTML = markup;
}

// ---------------------On Card remove button click----------------------------

function onRemoveIngrBtnClick(e) {
  // console.log(e);
  const btn = e.target.closest('.js-remove-btn');
  // console.log(btn);
  const data = getCocktailStorageData(favorite.INGREDIENTS);
  // console.log(data);
  const id = e.target?.dataset.id;
  // console.log(id);
  if (btn) {
    if (data.includes(id)) {
      Notiflix.Notify.failure('Ingredient was removed from Your favourites!');
      removeFromLocalStorage(id, 'ingredients');
      btn.classList.remove('activated');
    }
  }
}

// ---------------------On modal remove button click----------------------------

function onModalRemoveIngrBtnClick(e) {
  // console.log(e);
  const btn = e.target.closest('.js-remove-modal-btn');
  const id = e.target?.dataset.id;
  const data = getCocktailStorageData(favorite.INGREDIENTS);

  if (btn) {
    if (data.includes(id)) {
      Notiflix.Notify.failure('Ingredient was removed from Your favourites!');
      removeFromLocalStorage(id, 'ingredients');
      btn.classList.remove('activated');
    }
  }
}

// -------------------------On learn more click----------------------------------

async function onIngredientClick(e) {
  const btn = e.target.closest('.js-ingr');
  const ingredient = btn?.dataset.id;
  const responseIngredient = await favorite.getIngredientById(ingredient);
  const ingredientsContainer = document.querySelector('.inner-modal-container');
  const markup = createIngredientsModalMarkup(responseIngredient);
  const backdrop = document.querySelector('[data-inner-modal]');

  renderMarkupIngred(ingredientsContainer, markup);
  document
    .querySelector('.js-remove-modal-btn')
    .addEventListener('click', onModalRemoveIngrBtnClick);

  backdrop.classList.remove('is-hidden-inner-modal');
}

// -----------------------Render ingredients modal-------------------------------

function createIngredientsModalMarkup(ingredients) {
  // console.log(ingredients);
  return ingredients.data.ingredients
    .map(ingredient => {
      return `<div class="ingredient-modal-wrap">
  <img class="ingredient-modal-pic" src='https://www.thecocktaildb.com/images/ingredients/${
    ingredient.strIngredient
  }-Small.png'
  alt=${ingredient.strIngredient}></div>
      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">
  <h3 class="inner-modal-name dark--title">${toIdentifyStrType(ingredient)}</h3>
  <h4 class="inner-modal-passage dark--text">
    ${ingredient.strIngredient}

  </h4>
  <div class="border"></div>
</div>
<div class="modal-ingredients-desc">

<p class="inner-modal-text dark--text">
  ${toMakeDescriptionText(ingredient)}
</p>
<ul class="ingredients-modal-list">

  <li class="inner-modal-ingredients dark--text"">
    ✶ <b>Type</b>: ${toIdentifyStrType(ingredient)}
  </li>
  <li class="inner-modal-ingredients dark--text">
    ✶ <b>Country of origin</b>: Sorry, not specified
  </li>
  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ${
    ingredient.strAlcohol
  }</li>

</ul>
</div>
<button data-id=${
        ingredient.idIngredient
      } type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back js-remove-modal-btn transparent ${shouldBeActive(
        ingredient.idIngredient,
        'ingredients'
      )}">Remove  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>`;
    })
    .join('');
}

// ------------------------------Listeners-------------------------------------

window.addEventListener('load', onFavoriteIngredientsLoad);
