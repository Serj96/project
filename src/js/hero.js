let arrayLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];
const ulRoster = document.querySelector('.hero__roster');
function markupList(arrayLetters) {
  const markup = arrayLetters
    .map(
      ([arrayLetters]) =>
        `<li class="hero__it"> <button class="hero__knob">${arrayLetters}</button></li>`
    )
    .join('');
  ulRoster.insertAdjacentHTML('afterbegin', markup.replaceAll(',', ''));
}

const ulList = document.querySelector('.hero__list');
function markupArr(arrayLetters) {
  const markup = arrayLetters
    .map(
      ([arrayLetters]) =>
        `<li class="hero__item"><button class="hero__button">${arrayLetters}</button></li>`
    )
    .join('');
  ulList.insertAdjacentHTML('afterbegin', markup.replaceAll(',', ''));
}

class Select {
  constructor(options) {
    this.element = ulList;
    this.options = options;
    this.content = document.querySelector('.hero__content');
    this.b = document.querySelector('.select__backdrop');
    this.render();
    this.occurrent();
  }
  render() {
    [arrayLetters] = this.options;
    markupArr(arrayLetters);
    markupList([...arrayLetters]);
  }

  occurrent() {
    this.clickMenu = this.clickMenu.bind(this);
    this.content.addEventListener('click', this.clickMenu);
  }
  clickMenu(e) {
    e.preventDefault();
    const { type } = e.target.dataset;
    if (type === 'input') {
      this.toggle();
    } else if (type === this.b) {
      this.close();
    } else {
      this.open();
    }
  }
  get isOpen() {
    this.element.classList.contains('open');
  }

  toggle() {
    !this.isOpen ? this.close() : this.open();
  }
  close() {
    this.element.classList.remove('open');
  }

  open() {
    this.element.classList.add('open');
  }
}

const select = new Select([(arrayLetters = 'A')]);
/*function sorryContent(str) {
  const markup = str.map(() => `<h2 class="sorry__title"></h2> <img src="../image/sorry.jpg" alt="not found cocktail"/>`).join('');
  ulList.insertAdjacentHTML('afterbegin', markup);
}
sorryContent(str)*/
