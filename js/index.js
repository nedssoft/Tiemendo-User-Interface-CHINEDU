
class NavComponent {
  constructor(navData, rootEl) {
    this.data = navData;
    this.rootEl = rootEl;
    this.navigation = document.createElement('header')
    this.navbar = document.createElement('nav');
  }
  constructNavBar = () => {
    this.navigation.classList.add('navigation')
    this.navbar.classList.add('navbar')
    this.navigation.appendChild(this.navbar);
    this.rootEl.appendChild(this.navigation)
  }
  constructHeader = () => {
    const navHeader = this.createElementWithClass('div', 'nav-header');
    navHeader.appendChild(this.createLogo());
    
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
    logo = this.createElement('div', 'logo');
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
    const container = this.createElementWithClass('div', 'nav-items');
    this.data.forEach(navLink=> {
      [li, a] = this.createElements(['li', 'a'])
      a.textContent = navLink.name;
      a.href = navLink.link;
      li.appendChild(a);
      container.appendChild(li);
    }) 
    return container;
  }
}

class Services {
  constructor(domEl) {
    this.element = domEl;
    this.toggleParagraph()
    this.animateIcon()
  }
  toggleParagraph = () => {
    const services = this.element.querySelectorAll('.service');
    services.forEach(service => {
      const pa = service.querySelector('p');
      const btn = service.querySelector('.learn-more');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        pa.classList.toggle('show-all');
        this.toggleText(btn)
      })
    })
  }
  toggleText = (btn) => {
    if (btn.textContent === 'More...') {
      btn.textContent = 'Less...'
    } else {
      btn.textContent = 'More...'
    }
  }
  animateIcon = () => {
    const icons = this.element.querySelectorAll('.fas');
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        TweenLite.to(icon, 1, { rotation: -360});
      })
      icon.addEventListener('mouseleave', () => {
        TweenLite.to(icon, 1, { rotation: 360, duration: Infinity});
      })
    })
  }
}

const el = document.querySelector('.services-container');

new Services(el);