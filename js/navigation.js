TweenLite.defaultEase = Expo.easeOut;
class Nav {
  constructor(el) {
    this.nav = el;
    this.openNavbar();
    this.checkActiveItem();
  }
  openNavbar = () => {
    const navToggle = this.nav.querySelector('.nav-toggle');
    const navItemContainer = this.nav.querySelector('.nav-items');
    navToggle.addEventListener('click', () => {
      navItemContainer.classList.toggle('open')
    })
  }
  checkActiveItem = () => {
    const navItems = this.nav.querySelectorAll('.nav-items li');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.deselect();
       item.classList.add('active');
      })
    })
  }
  deselect = () => {
    const navItems = this.nav.querySelectorAll('.nav-items li');
    navItems.forEach(item => {
      item.classList.remove('active');
    })
  }
}

const nav = document.querySelector('.navigation');
new Nav(nav)