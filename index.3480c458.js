var moreText=document.querySelector(".more-text"),buttonText=document.querySelector("#show-more"),moreText2=document.querySelector(".more-text2"),buttonText2=document.querySelector("#show-more2"),moreText3=document.querySelector(".more-text3"),buttonText3=document.querySelector("#show-more3"),body=document.body,hero=document.querySelector(".main__container"),portfolioList=document.querySelector(".portfolio__list"),anchor=document.querySelector(".anchor"),footer=document.querySelector(".footer_container"),themeToggle=document.querySelector("#themeToggle"),savedTheme=localStorage.getItem("theme");function getTheme(){savedTheme&&(document.body.classList.add(savedTheme),hero.classList.add(savedTheme),portfolioList.classList.add(savedTheme),anchor.classList.add(savedTheme),footer.classList.add(savedTheme)),body.classList.contains("dark-mode")?themeToggle.textContent="Bright mode":themeToggle.textContent="Dark mode"}function toggleText(){"none"===moreText.style.display||""===moreText.style.display?(moreText.style.display="block",buttonText.innerText="Read less"):(moreText.style.display="none",buttonText.innerText="Read more")}function toggleText2(){"none"===moreText2.style.display||""===moreText2.style.display?(moreText2.style.display="block",buttonText2.innerText="Read less"):(moreText2.style.display="none",buttonText2.innerText="Read more")}function toggleText3(){"none"===moreText3.style.display||""===moreText3.style.display?(moreText3.style.display="block",buttonText3.innerText="Read less"):(moreText3.style.display="none",buttonText3.innerText="Read more")}function toggleTheme(){var e=body.classList.contains("dark-mode")?"":"dark-mode";localStorage.setItem("theme",e),body.classList.toggle("dark-mode"),hero.classList.toggle("dark-mode"),portfolioList.classList.toggle("dark-mode"),anchor.classList.toggle("dark-mode"),footer.classList.toggle("dark-mode"),body.classList.contains("dark-mode")?themeToggle.textContent="Light mode":themeToggle.textContent="Dark mode"}getTheme();
//# sourceMappingURL=index.3480c458.js.map
