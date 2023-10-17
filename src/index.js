const moreText = document.querySelector('.more-text');
const buttonText = document.querySelector('#show-more');
const moreText2 = document.querySelector('.more-text2');
const buttonText2 = document.querySelector('#show-more2');
const moreText3 = document.querySelector('.more-text3');
const buttonText3 = document.querySelector('#show-more3');

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
