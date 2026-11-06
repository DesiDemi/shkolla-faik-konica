const languageButton = document.querySelector(".language-switch");
const translatableElements = document.querySelectorAll("[data-en][data-sq]");

languageButton.addEventListener("click", () => {
  const isEnglish = document.documentElement.lang === "en";
  const language = isEnglish ? "sq" : "en";

  translatableElements.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.documentElement.lang = language;
  languageButton.firstChild.textContent = isEnglish ? "EN " : "SQ ";
  languageButton.setAttribute(
    "aria-label",
    isEnglish ? "Switch to English" : "Switch to Albanian",
  );
});
