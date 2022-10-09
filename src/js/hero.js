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
const renderList = document.querySelector('.list_lit');
function markupList(arrayLetters) {
  const markup = arrayLetters
    .map(([arrayLetters]) => `<li class="hero__items">${arrayLetters}</li>`)
    .join('');
  renderList.insertAdjacentHTML('afterbegin', markup.replaceAll(',', ''));
}


const list = document.querySelector('.hero__list');
function markupArr(arrayLetters) {
  const markup = arrayLetters
    .map(([arrayLetters]) => `<li class="hero__items">${arrayLetters}</li>`)
    .join('');
  list.insertAdjacentHTML('afterbegin', markup.replaceAll(',', ''));
}

class Select {
  constructor(options) {
    this.element = list;
    this.options = options;
    this.el = document.querySelector('.div__input');
    this.back = document.querySelector('.backdrop');
    console.log(this.el);

    this.render();
    this.step();
  }
  render() {
    [arrayLetters] = this.options;
    markupArr(arrayLetters);
  markupList([...arrayLetters]);
  }

  step() {
    this.clickMenu = this.clickMenu.bind(this);
    this.el.addEventListener('click', this.clickMenu);
  
  }
  clickMenu(e) {
    e.preventDefault();

    const { type } = e.target.dataset;

    if (type === 'input') {
      this.toggle();
  
    }
  }
  isOpen() {
    this.element.classList.add('open');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  close() {
    this.element.classList.remove('open');
  }
  open() {
    this.element.classList.add('open');
  }
}

const select = new Select([arrayLetters]);