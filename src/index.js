import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';
import loadNav from './loadNav';

loadNav();
loadHome();
addElisteners();

function addElisteners() {
  const homeTab = document.querySelector('#homeTab');
  const menuTab = document.querySelector('#menuTab');
  const contactTab = document.querySelector('#contactTab');
  homeTab.addEventListener('click', changeTabs);
  menuTab.addEventListener('click', changeTabs);
  contactTab.addEventListener('click', changeTabs);
}

function changeTabs() {
  clearDom();
  loadNav();
  addElisteners();
  switch(this.id) {
    case 'homeTab':
      loadHome();
      break;
    case 'menuTab':
      loadMenu();
      break;
    case 'contactTab':
      loadContact();
      break;
    default:
      loadHome();
  }
}

function clearDom() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}