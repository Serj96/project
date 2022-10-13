import { refs } from './hero-refs';

const {
  buttonLogin,
  selectMenuRef,
  selectBtnRef,
  optionsRef,
  heroSelectTextRef,
} = refs;
// console.log(optionsRef);

optionsRef.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOption = option.querySelector('.hero__option-text').innerText;
    heroSelectTextRef.innerText = selectedOption;
    //   console.log(selectedOption);

    selectMenuRef.classList.remove('active');
  });
});

selectBtnRef.addEventListener('click', toToggleSelector);
// window.addEventListener('click', event => {
//   if (event.target !== selectBtnRef) {
//     selectMenuRef.classList.toggle('active');
//   }

// });

// selectBtnRef.addEventListener('click', event => {
//   //   selectMenuRef.classList.toggle('active');

//   if (event.target !== selectBtnRef) {
//     selectMenuRef.classList.toggle('active');
//   }
// });

function toToggleSelector(event) {
  console.dir(event);
  //   if (window) {
  //     return selectMenuRef.classList.toggle('active');
  //   }
  selectMenuRef.classList.toggle('active');
}
