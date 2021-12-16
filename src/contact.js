function loadContact() {
  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us';
  const div = document.createElement('div');
  div.classList.toggle('contactInfo');
  const p0 = document.createElement('p');
  p0.textContent = '(951) 272-5894';
  p0.id = 'phoneNum';
  const p = document.createElement('p');
  p.textContent = '2630 Tuscany St #103'
  const p2 = document.createElement('p');
  p2.textContent = 'Corona, CA 92881';
  content.appendChild(h1);
  content.appendChild(div);
  div.appendChild(p0);
  div.appendChild(p);
  div.appendChild(p2);
}

export default loadContact;