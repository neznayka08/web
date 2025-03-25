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

function downloadResumeAsPDF() {
  const element = document.querySelector('.resume-container');
  const opt = {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
}

let counter = 0;
const downloadCountElement = document.querySelector('#download-count');

document.querySelector('#download-btn').addEventListener('click', (event) => {
  counter += 1;
  downloadCountElement.innerHTML = `Кнопка нажата ${counter} раз`;
  downloadResumeAsPDF();
  createRipple(event);
});

function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement("span");

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}