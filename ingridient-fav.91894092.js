!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequirededf;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequirededf=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"haGuf":"ingridient-fav.91894092.js","ezHLX":"empty-heart.2d48ba79.png","1vr8H":"full-heart.cce94d73.png","eEwPo":"notice.d0fe06ce.png","4mEM4":"notice@2x.cc48e1f3.png","5UbS1":"coctail-fav.fb5fa3e0.css","3h8sG":"coctail-fav.a872c1e1.js","hKhij":"index.b6fb36fe.js"}')),i("jzYhw"),i("5TNNb"),i("kaXg8"),i("eY4ce"),i("eXJzG"),i("hPRuz"),i("puS1k");var o={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function c(e){e.preventDefault(),document.body.classList.toggle("modal-open"),o.modal.classList.toggle("is-hidden")}o.footerOpenBtn.addEventListener("click",c),o.footerCloseBtn.addEventListener("click",c),document.addEventListener("keydown",(function(e){"Escape"===e.key&&o.modal.classList.add("is-hidden")})),window.addEventListener("click",(function(e){e.target===o.modal&&(o.modal.classList.toggle("is-hidden"),window.removeEventListener())})),i("i8Q71"),i("f7BAh"),i("6TfQP"),i("c7MW5"),i("lJqT5"),i("4Nugj"),i("1aryJ"),i("4i2Nx");var d,s=i("bpxeT"),l=i("2TvXO"),u=i("1aryJ"),f=i("lJqT5");d=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("ezHLX");var g;g=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("1vr8H");var m;m=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("eEwPo");var v;v=i("aNJCr").getBundleURL("haGuf")+i("iE7OH").resolve("4mEM4");var p=i("iU1Pc"),h=new(0,f.default),b=document.querySelector(".favorite__list-card");function y(e){var n,r=(n=e,n.map((function(e){return n=e.data.ingredients[0],r=n.strIngredient,a=n.strType,i=n.idIngredient,'\n      <li class="favorite__list-item cocktails__item card-set-item">\n      <p class="favorite__list-name dark--title">'.concat(r,'</p>\n      <p class="favorite__list-type dark--text">').concat(null===a?r:a,'</p>\n      <div class="favorite__btn-wrap">\n        <button\n              type="button"\n              class="js-ingr cocktails__btn cocktails__button-text"\n              data-modal-ingredient-open\n               data-id=').concat(i,'\n            >Learn more\n            </button>\n            <button type="button" class="cocktails__button-text cocktails__btn dark--btn-back js-remove-btn transparent ').concat(w(i,"ingredients"),'" data-id="').concat(i,'">Remove\n              <img class="empty-heart" data-toggle="hidden-hearFt" src="').concat(t(d),'" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="').concat(t(g),'" alt="" width="18" height="18"/> \n            </button>\n      </div>\n    </li>');var n,r,a,i}))).join("");E(b,r)}function _(){return(_=t(s)(t(l).mark((function e(n){var r;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n.forEach((function(e){var t=h.getIngredientById(e);r.push(t)})),Promise.all(r).then(y);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return null===e.strType?e.strIngredient:e.strType}function w(e,t){return(0,u.getCocktailStorageData)(t)?localStorage.getItem(t).includes(e)?"activated":"":void 0}function E(e,t){e.innerHTML=t}function S(e){var n,r=e.target.closest(".js-remove-btn"),a=(0,u.getCocktailStorageData)(h.INGREDIENTS),i=null===(n=e.target)||void 0===n?void 0:n.dataset.id;r&&a.includes(i)&&(t(p).Notify.failure("Ingredient was removed from Your favourites!"),(0,u.removeFromLocalStorage)(i,"ingredients"),r.classList.remove("activated"))}function L(e){var n,r=e.target.closest(".js-remove-modal-btn"),a=null===(n=e.target)||void 0===n?void 0:n.dataset.id,i=(0,u.getCocktailStorageData)(h.INGREDIENTS);r&&i.includes(a)&&(t(p).Notify.failure("Ingredient was removed from Your favourites!"),(0,u.removeFromLocalStorage)(a,"ingredients"),r.classList.remove("activated"))}function H(e){return x.apply(this,arguments)}function x(){return(x=t(s)(t(l).mark((function e(n){var r,a,i,o,c,d;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.target.closest(".js-ingr"),a=null==r?void 0:r.dataset.id,e.next=4,h.getIngredientById(a);case 4:i=e.sent,o=document.querySelector(".inner-modal-container"),c=R(i),d=document.querySelector("[data-inner-modal]"),E(o,c),document.querySelector(".js-remove-modal-btn").addEventListener("click",L),d.classList.remove("is-hidden-inner-modal");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return e.data.ingredients.map((function(e){return'<div class="ingredient-modal-wrap">\n  <img class="ingredient-modal-pic" src=\'https://www.thecocktaildb.com/images/ingredients/'.concat(e.strIngredient,"-Small.png'\n  alt=").concat(e.strIngredient,'></div>\n      <div inner-modal-container dark--modal-back"><div class="ingr-modal-title-wrapper">\n  <h3 class="inner-modal-name dark--title">').concat(k(e),'</h3>\n  <h4 class="inner-modal-passage dark--text">\n    ').concat(e.strIngredient,'\n\n  </h4>\n  <div class="border"></div>\n</div>\n<div class="modal-ingredients-desc">\n\n<p class="inner-modal-text dark--text">\n  ').concat(function(e){return null===e.strDescription?"Sorry, guys we do not have any info about that":e.strDescription}(e),'\n</p>\n<ul class="ingredients-modal-list">\n\n  <li class="inner-modal-ingredients dark--text"">\n    ✶ <b>Type</b>: ').concat(k(e),'\n  </li>\n  <li class="inner-modal-ingredients dark--text">\n    ✶ <b>Country of origin</b>: Sorry, not specified\n  </li>\n  <li class="inner-modal-ingredients dark--text">✶ <b>Alcohol</b> : ').concat(e.strAlcohol,"</li>\n\n</ul>\n</div>\n<button data-id=").concat(e.idIngredient,' type="button" data-inner-modal-button class="cocktails__button-text ingredients-modal-btn cocktails__btn dark--btn-back js-remove-modal-btn transparent ').concat(w(e.idIngredient,"ingredients"),'">Remove  \n              <img class="empty-heart" data-toggle="hidden-hearFt" src="').concat(t(d),'" alt="" width="18" height="18"/>\n              <img class="full-heart" data-toggle="empty-heart" src="').concat(t(g),'" alt="" width="18" height="18"/> \n            </button>')})).join("")}window.addEventListener("load",(function(){var e=(0,u.getCocktailStorageData)(h.INGREDIENTS);if(e.length){!function(e){_.apply(this,arguments)}(e);var t=document.querySelector(".favorite__list-card");t.addEventListener("click",S),t.addEventListener("click",H)}else b.innerHTML='<li class="garcon"> Sorry, we did not find any ingredient for you<img class="no-result" srcset = "'.concat(m,'", srcset =  "').concat(v,'" src="').concat(v,'" alt="No Results"></img></li>')}))}();
//# sourceMappingURL=ingridient-fav.91894092.js.map