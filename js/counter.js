export function setupDownloadCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    document.querySelector('#download-count').innerHTML = `Кнопка нажата ${counter} раз`;
  };

  element.addEventListener('click', (event) => {
    setCounter(counter + 1);
    createRipple(event);
  });

  setCounter(0);
}

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