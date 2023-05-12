//default value
document.querySelector(".result").setAttribute("align", "center");
document.getElementById("select-en").classList.add("selected-lang");
document.getElementById("select-ar").classList.remove("selected-lang");
targetLang = "en";

// input and button
const inputText = document.getElementById("input-text");
const translateBtn = document.getElementById("translate-btn");

// dic
const arabic_to_english = {
  مرحبا: "hello",
  "كيف حالك؟": "how are you?",
  شكرا: "thank you",
};

const english_to_arabic = {
  hello: "مرحبا",
  "how are you?": "كيف حالك؟",
  "thank you": "شكرا",
};

function translate_arabic_to_english(text) {
  return arabic_to_english[text] || "Translation not found";
}

function translate_english_to_arabic(text) {
  return english_to_arabic[text] || "Translation not found";
}

translateBtn.addEventListener("click", (_) => {
  const text = inputText.value;

  let translatedText;
  if (targetLang === "en") {
    translatedText = translate_arabic_to_english(text);
  } else if (targetLang === "ar") {
    translatedText = translate_english_to_arabic(text);
  }

  // display the translated text
  document.getElementById("result").innerHTML = translatedText;
});

// convert between english & arabic
const arabicLink = document.getElementById("arabic-link");
arabicLink.addEventListener("click", switchToArabic);
function switchToArabic() {
  // Change text content
  arabicLink.textContent = "العربية";
  document.querySelector(".english a").textContent = "الإنجليزية";
  document.querySelector(".get-input .from .any-lang").textContent =
    "من أي لغة";
  document.querySelector(".get-input .to .word").textContent = "إلى";
  document.querySelector(".get-input .to .english").textContent = "الانجليزية";
  document.querySelector(".get-input .to .arabic").textContent = "العربيه";
  document.querySelector("h1").textContent = "احصل على ترجمة سريعة ومجانية";
  document.getElementById("translate-btn").value = "ترجم";

  // Change text direction
  document.querySelector("html").setAttribute("dir", "rtl");
  document.querySelector("body").setAttribute("dir", "rtl");
  document.querySelector(".container").setAttribute("dir", "rtl");
  document.querySelector(".get-input .from").setAttribute("dir", "rtl");
  document.querySelector(".get-input .to").setAttribute("dir", "rtl");
  document.querySelector("#input-text").setAttribute("dir", "rtl");

  // update target lang
  document.getElementById("select-ar").classList.add("selected-lang");
  document.getElementById("select-en").classList.remove("selected-lang");
  targetLang = "ar";
}

switch_lang = document.getElementById("select-en");
switch_lang2 = document.getElementById("select-ar");

switch_lang.addEventListener("click", switchTargetLangToEn);
switch_lang2.addEventListener("click", switchTargetLangToAr);

function switchTargetLangToEn() {
  document.getElementById("select-en").classList.add("selected-lang");
  document.getElementById("select-ar").classList.remove("selected-lang");
  targetLang = "en";
}

function switchTargetLangToAr() {
  document.getElementById("select-ar").classList.add("selected-lang");
  document.getElementById("select-en").classList.remove("selected-lang");
  targetLang = "ar";
}
