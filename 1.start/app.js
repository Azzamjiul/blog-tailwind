const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

const useTheme = localStorage.getItem('theme');
const systemTheme  = window.matchMedia('(prefers-color-scheme: dark)').matches;

const iconToggle = () => {
  sunIcon.classList.toggle('display-none');
  moonIcon.classList.toggle('display-none');
}

const themeCheck = () => {
  if(useTheme === 'dark' || (!useTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('display-none');
    return;
  }
  sunIcon.classList.add('display-none');
}

const themeSwith = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }

  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
}

sunIcon.addEventListener('click', () => {
  themeSwith();
});

moonIcon.addEventListener('click', () => {
  themeSwith();
});

themeCheck();