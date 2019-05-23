
TweenLite.defaultEase = Expo.easeOut;

class Services {
  constructor(domEl) {
    this.element = domEl;
    this.toggleParagraph()
    this.animateIcon()
    this.animateBtn()
  }
  toggleParagraph = () => {
    const services = this.element.querySelectorAll('.service');
    services.forEach(service => {
      const pa = service.querySelector('p');
      const btn = service.querySelector('.learn-more');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const height = getComputedStyle(pa).getPropertyValue('max-height');
        if (height == '100px') {
          TweenMax.fromTo(pa, 0.2, { maxHeight: "100px", opacity: 0.5, y: 100}, { maxHeight: "100%", opacity: 1, y: 0, yoyo: true});
        } 
        if (height == '100%') {
          TweenMax.fromTo(pa, 0.1, { maxHeight: "100%", opacity: 0.5, y: -100}, { maxHeight: "100px", opacity: 1, y:0, yoyo: true});
        }
        this.toggleText(btn)
    
        if(btn.getAttribute('aria-expanded') === "true") {
          btn.setAttribute('aria-expanded', false);
        } else {
          btn.setAttribute('aria-expanded', true)
        }
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

  animateBtn = () => {
    const buttons = this.element.querySelectorAll('.learn-more');
    buttons.forEach(btn => {
      btn.addEventListener('mouseover', () => {
        TweenLite.fromTo(btn, 0.5, {x: -10}, { x: 0, yoyo: true});
      })
    })
  }
}

const el = document.querySelector('.services-container');
new Services(el);

