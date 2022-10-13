import templateFunction from '../tmp/team-template.hbs';

const refs = {
  teamContainer: document.querySelector('.team__container'),
};

const teamData = [
  {
    photo: 'https://s.mind.ua/img/forall/a/202366/69.jpg?1645864271',
    name: 'Мітя Купріянов',
    role: 'TeamLead',
    git: 'https://github.com/Mitya-Kupriianov/',
  },

  {
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSqj9NrmYAUIk0cMgthY2ejkpIylGeArxng&usqp=CAU',
    name: 'Вовк Андрій',
    role: 'Developer',
    git: 'https://github.com/WoLfEER',
  },

  {
    photo: 'https://www.volynnews.com/files/news/2022/02-27/332734/45.jpg',
    name: 'Шилов Вадим',
    role: 'Developer',
    git: 'https://github.com/VadymShylov',
  },

  {
    photo:
      'https://cybersecuritynews.es/wp-content/uploads/2022/02/Anonymous-TikTok-1280x720-1.jpg',
    name: 'Максим Крижановський',
    role: 'Developer',
    git: 'https://github.com/KryzhMax',
  },

  {
    photo: 'https://gagadget.com/media/post_big/AnonymousUkraine.jpeg',
    name: 'Григорій Шмойлов',
    git: 'https://github.com/Gregory0401',
    role: 'Developer',
  },
  {
    photo:
      'https://png.pngitem.com/pimgs/s/536-5361674_portable-network-graphics-clip-art-x-mark-video.pnghttps://png.pngitem.com/pimgs/s/536-5361674_portable-network-graphics-clip-art-x-mark-video.png',
    name: 'Дмитро Демко',
    role: '?',
  },

  {
    photo:
      'https://p6.focus.de/img/digital/internet/id_61139726/anonymous-nimmt-russische-staatsmedien-ins-visier.jpg?im=Crop%3D%280%2C113%2C1360%2C680%29%3BResize%3D%281200%2C627%29&hash=d61907b05f6a789eded9a8b566e300c233dd1c9cf7ab241a995e51cc68854498',
    name: 'Юрій Ніконенко',
    role: 'CODE GOD',
    git: 'https://github.com/nikonenkoincodeit',
  },
  {
    photo:
      'https://www.pngitem.com/pimgs/m/661-6613497_marie-cat-png-good-evening-images-cartoon-transparent.png',
    name: 'Вікторія Шинкар',
    role: 'Developer',
    git: 'https://goit.ua/marathon/',
  },
];

function createMarkup(teamData) {
  const markup = templateFunction(teamData);

  return (refs.teamContainer.innerHTML = markup);
}

createMarkup(teamData);
