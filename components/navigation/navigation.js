TweenLite.defaultEase = Expo.easeOut;

const navData = [
  {name: 'Home', link: 'index.html'},
  {name: 'About', link: 'about.html'},
  {name: 'Login', link: 'https://inspiring-neumann-c64c83.netlify.com/'},
 
];

class NavItem{
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
    const activePath = location.pathname;
    navItems.forEach((item) => {
      if (activePath.includes(item.textContent.toLowerCase()) || ((activePath === '/' || activePath.includes('index')) && item.textContent == 'Home' ))  {
        this.deselect()
        item.classList.add('active');
      } 
    })
  }
  deselect = () => {
    const navItems = this.nav.querySelectorAll('.nav-items li');
    navItems.forEach(item => {
      item.classList.remove('active');
    })
  }
}

class NavComponent {
  constructor(navData, rootEl) {
    this.data = navData;
    this.rootEl = rootEl;
    this.navigation = document.createElement('header')
    this.navbar = document.createElement('nav');
    this.navItemsContainer = document.createElement('ul');
    this.constructNavBar()
  }
  constructNavBar = () => {
    this.navigation.classList.add('navigation')
    this.navigation.setAttribute('role', 'navigation')
    this.navbar.classList.add('navbar')
    this.navbar.appendChild(this.constructHeader())
    this.navbar.appendChild(this.createNavItems())
    this.navigation.appendChild(this.navbar);
    this.rootEl.prepend(this.navigation)
    new NavItem(this.navigation)
  }
  constructHeader = () => {
    const navHeader = this.createElementWithClass('div', 'nav-header');
    navHeader.appendChild(this.createLogo());
    navHeader.appendChild(this.createNavToggle())
    return navHeader;
    
  }
  createElementWithClass = (el, classNames) => {
    const element = document.createElement(el);
    if (Array.isArray(classNames)) {
      classNames.forEach(cl => {
        element.classList.add(cl);
      })
    }
    else {
      element.classList.add(classNames)
    }

    return element;
  }
  createElements = (elements) => {
    return elements.map(el => {
      return document.createElement(el)
    });
  }
  createLogo = () => {
    const logo = this.createElementWithClass('div', 'logo');
    const [h1, anchor] = this.createElements(['h1', 'a']);
    anchor.textContent = "Tieme Ndo";
    h1.appendChild(anchor);
    logo.appendChild(h1);
    return logo;
  }
  createNavToggle = () => {
    const navToggle = this.createElementWithClass('div', 'nav-toggle');
    [...new Array(3)].forEach(it => {
      navToggle.appendChild(this.createElementWithClass('div', 'bar'))
    })
    return navToggle;
  }
  createNavItems = () => {
   this.navItemsContainer.classList.add('nav-items');
    this.data.forEach(navLink=> {
     const [li, a] = this.createElements(['li', 'a'])
      a.textContent = navLink.name;
      a.href = navLink.link;
      li.appendChild(a);
      this.navItemsContainer.appendChild(li);
    }) 
    return this.navItemsContainer;
  }
}

const rootEl = document.querySelector('.container');
new NavComponent(navData, rootEl)
