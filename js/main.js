import "./counter.js";
import "./download.js";

document.querySelector("#app").innerHTML = `
  <div class="resume">
    <h1 contenteditable="true" class="editable" id="name">Ваше Имя</h1>
    <p contenteditable="true" class="editable" id="profession">Ваша Профессия</p>
    <section contenteditable="true" class="editable" id="about">
      <h2>Обо мне</h2>
      <p>Описание о себе...</p>
    </section>
    <section contenteditable="true" class="editable" id="experience">
      <h2>Опыт</h2>
      <p>Детали о вашем опыте...</p>
    </section>
    <section contenteditable="true" class="editable" id="education">
      <h2>Образование</h2>
      <p>Детали о вашем образовании...</p>
    </section>
    <button id="download-btn">Скачать в PDF</button>
  </div>
`;

document.getElementById("download-btn").addEventListener("click", () => {
  window.print();
});

document.addEventListener("DOMContentLoaded", () => {
  const editableElements = document.querySelectorAll(".editable");

  editableElements.forEach((element) => {
    const savedContent = localStorage.getItem(`content_${element.id}`);
    if (savedContent) {
      element.innerHTML = savedContent;
    }
  });

  editableElements.forEach((element) => {
    element.addEventListener("input", () => {
      localStorage.setItem(`content_${element.id}`, element.innerHTML);
    });
  });
});