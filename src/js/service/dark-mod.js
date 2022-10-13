let changeThemeButtons = document.querySelectorAll('.js-dark-mod');

changeThemeButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });
});

function applyTheme(themeName) {
  document.querySelector('body').setAttribute('class', `${themeName}`);
  localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');
function setActiveTheme(param) {
  changeThemeButtons.forEach(button => {
    button.checked = param;
  });
}
if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
  setActiveTheme(false);
} else if (activeTheme === 'dark') {
  applyTheme('dark');
  setActiveTheme(true);
}
