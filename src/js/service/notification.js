import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

export function onError() {
  return Notiflix.Notify.failure('Oops... something went wrong!');
}

export const noLogin = () => {
  return Notiflix.Notify.info('You have to logIn');
};

export const succesNotice = total => {
  return Notiflix.Notify.info(`Hooray! We found ${total} coctails.`);
};
