function loadContact() {
  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us';
  const p0 = document.createElement('p');
  p0.textContent = '(951) 272-5894';
  p0.id = 'phoneNum';
  const p = document.createElement('p');
  p.textContent = '2630 Tuscany St #103'
  const p2 = document.createElement('p');
  p2.textContent = 'Corona, CA 92881';
  content.appendChild(h1);
  content.appendChild(p0);
  content.appendChild(p);
  content.appendChild(p2);
}

export default loadContact;