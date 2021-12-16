function loadMenu() {
  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  const p = document.createElement('p');
  p.id = 'menuLine';
  p.textContent = '__________________________';
  const ul = document.createElement('ul');
  const i1 = document.createElement('li');
  const i2 = document.createElement('li');
  const i3 = document.createElement('li');
  i1.textContent = 'Carpaccio';
  i2.textContent =  'Bolognese';
  i3.textContent = 'Carbonara';
  ul.appendChild(i1);
  ul.appendChild(i2);
  ul.appendChild(i3);
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(ul);
}

export default loadMenu;