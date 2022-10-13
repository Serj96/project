import CocktailAPI from './service/getCocktail';
import {
  renderMarkup,
  onAddModalBtnClick,
  onClickInnerModal,
  shouldBeActivated,
} from './service/create-markup';
import emptyHeart from '../images/hearts/empty-heart.png';
import fullHeart from '../images/hearts/full-heart.png';
import { getUser } from './service';
import Notiflix from 'notiflix';

export const refs = {
  cocktailsList: document.querySelector('.cocktails__list'),
  modalContainer: document.querySelector('.modal-coctails'),
  modalIngrContainer: document.querySelector('.backdrop-modal-components'),
  backdrop: document.querySelector('[data-inner-modal]'),
  closeBtn: document.querySelector('[data-inner-modal-close]'),
  openModalIngrdients: document.querySelectorAll('[data-modal-open]'),
  scaleModal: document.querySelector('[data-modal-scale]'),
};

const cocktailAPI = new CocktailAPI();

function createModalMarkup(response) {
  return response.data.drinks
    .map(drink => {
      return `
      <h2 class="modal-coctail-name dark--title">${drink.strDrink}</h2>
      <h3 class="modal-ingredients dark--title">Ingredients</h3>

      <p class="modal-per dark--text">Per cocktail</p>     

        <ul class="modal-coctail-components dark--text">
        </ul>
      <img src="${drink.strDrinkThumb}" alt="cocktail" class="modal-img" />
      <h3 class="modal-Instructions dark--title">Instructions:</h3>
      <p class="modal-text dark--text">
        ${drink.strInstructions}
      </p>
       <button type="button" class="cocktails__button-text modal-button cocktails__btn dark--btn-back js-add-btn-modal transparent ${shouldBeActivated(
         drink.idDrink,
         'cocktails'
       )}" id="${drink.idDrink}">Add to
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>`;
    })
    .join('');
}

function toIdentifyStrType(ingredient) {
  return ingredient.strType === null
    ? 'Cannot say anything about its type'
    : ingredient.strType;
}

function toMakeDescriptionText(ingredient) {
  return ingredient.strDescription === null
    ? 'Sorry, guys we do not know anything about that'
    : ingredient.strDescription;
}

function createIngredientsMarkup(ingredients) {
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
<button id=${
        ingredient.idIngredient
      } type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back transparent ${shouldBeActivated(
        ingredient.idIngredient,
        'ingredients'
      )}">Add to  
              <img class="empty-heart" data-toggle="hidden-hearFt" src="${emptyHeart}" alt="" width="18" height="18"/>
              <img class="full-heart" data-toggle="empty-heart" src="${fullHeart}" alt="" width="18" height="18"/> 
            </button>`;
    })
    .join('');
}

export async function onOpenModalClick(e) {
  // console.log(e);
  if (e.target.closest('.js-split')) {
    try {
      const id = e.target.id;
      const responseID = await cocktailAPI.getCocktailsId(id);
      // console.log(responseID);
      const modalMarkup = createModalMarkup(responseID);
      renderMarkup(refs.modalContainer, modalMarkup);
      document.body.classList.toggle('body-owerly');
      if (getUser()) {
        document
          .querySelector('.js-add-btn-modal')
          .addEventListener('click', onAddModalBtnClick);
      } else {
        Notiflix.Notify.failure(
          'You have to log in to add staff to Favourites!'
        );
      }
      const ingrWrap = document.querySelector('.modal-coctail-components');
      const backdrop = document.querySelector('[data-modal]');
      backdrop.classList.remove('is-hidden-modal-coctails');

      const markupIngredientsList =
        await createMarkupCocktailForModalListIngredients(responseID);
      renderMarkup(ingrWrap, markupIngredientsList);
      ingrWrap.addEventListener('click', onIngredientClick);

      // document.addEventListener('keydown', onCloseEsc);
    } catch (error) {
      console.log(error.message);
    }
  }
}

function createMarkupCocktailForModalListIngredients(res) {
  const drink = res.data.drinks[0];

  const ingredients = [];

  for (let i = 1; i <= 15; i += 1) {
    let ingredient = drink['strIngredient' + i];
    if (!ingredient) break;
    ingredients.push(ingredient);
    // console.log(ingredients);
  }
  return ingredients
    .map(ingredient => {
      return /*html*/ `<li "${ingredient}" class="modal-coctail-component" data-modal-open>${ingredient}</li>`;
    })
    .join('');
}

//        -------------------Click on List of Ingredients in Modal #1-------------------
async function onIngredientClick(e) {
  try {
    const ingredient = e.target.textContent;
    // console.log(ingredient);
    const responseIngredient = await cocktailAPI.getCocktailByIngredient(
      ingredient
    );
    const ingredientsContainer = document.querySelector(
      '.inner-modal-container'
    );
    const markup = createIngredientsMarkup(responseIngredient);
    renderMarkup(ingredientsContainer, markup);
    if (getUser()) {
      document
        .querySelector('[data-inner-modal-button]')
        .addEventListener('click', onClickInnerModal);
    } else {
      Notiflix.Notify.failure('You have to log in to add staff to Favourites!');
    }

    const backdrop = document.querySelector('[data-inner-modal]');

    backdrop.classList.remove('is-hidden-inner-modal');
  } catch (error) {
    throw new Error(error.message);
  }
}

// export function onCloseEsc(e) {
//   console.dir(e);
//   if (e.code === 'Escape') {
//     document.body.classList.remove('modal-open');
//     backdrop.classList.add('is-hidden');
//     // modalIngr.classList.add('is-hidden');
//     cocktailModalMain.classList.remove('is-hidden');
//     document.removeEventListener('keydown', onCloseEsc);
//   }
// }

//                  -------------------Listeners-------------------
refs.cocktailsList.addEventListener('click', onOpenModalClick);
