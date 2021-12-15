function loadNav() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeTab = document.createElement('li');
  homeTab.id = 'homeTab';
  homeTab.textContent = 'Home';
  const menuTab = document.createElement('li');
  menuTab.id = 'menuTab';
  menuTab.textContent = 'Menu';
  const contactTab = document.createElement('li');
  contactTab.id = 'contactTab';
  contactTab.textContent = 'Contact';
  const content = document.querySelector('#content');
  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  nav.appendChild(ul);
  header.appendChild(nav);
  content.appendChild(header);
}

export default loadNav;