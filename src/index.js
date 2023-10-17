const moreText = document.querySelector('.more-text');
const buttonText = document.querySelector('#show-more');
const moreText2 = document.querySelector('.more-text2');
const buttonText2 = document.querySelector('#show-more2');
const moreText3 = document.querySelector('.more-text3');
const buttonText3 = document.querySelector('#show-more3');
const body = document.body;
const hero = document.querySelector('.main__container');
const portfolioList = document.querySelector('.portfolio__list');
const anchor = document.querySelector('.anchor');
const footer = document.querySelector('.footer_container');
const themeToggle = document.querySelector('#themeToggle');

const savedTheme = localStorage.getItem('theme');

getTheme();

function getTheme() {
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    hero.classList.add(savedTheme);
    portfolioList.classList.add(savedTheme);
    anchor.classList.add(savedTheme);
    footer.classList.add(savedTheme);
  }
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Bright mode';
  } else {
    themeToggle.textContent = 'Dark mode';
  }
}

function toggleText() {
  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'block';
    buttonText.innerText = 'Read less';
  } else {
    moreText.style.display = 'none';
    buttonText.innerText = 'Read more';
  }
}

function toggleText2() {
  if (moreText2.style.display === 'none' || moreText2.style.display === '') {
    moreText2.style.display = 'block';
    buttonText2.innerText = 'Read less';
  } else {
    moreText2.style.display = 'none';
    buttonText2.innerText = 'Read more';
  }
}

function toggleText3() {
  if (moreText3.style.display === 'none' || moreText3.style.display === '') {
    moreText3.style.display = 'block';
    buttonText3.innerText = 'Read less';
  } else {
    moreText3.style.display = 'none';
    buttonText3.innerText = 'Read more';
  }
}

function toggleTheme() {
  const theme = body.classList.contains('dark-mode') ? '' : 'dark-mode';
  localStorage.setItem('theme', theme);

  body.classList.toggle('dark-mode');
  hero.classList.toggle('dark-mode');
  portfolioList.classList.toggle('dark-mode');
  anchor.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light mode';
  } else {
    themeToggle.textContent = 'Dark mode';
  }
}
