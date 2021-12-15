function loadMenu() {
  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  content.appendChild(h1);
}

export default loadMenu;