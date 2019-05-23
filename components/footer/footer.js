footerData = {
  social: [
    { facebook: '#' },
    { linkedin: '#' },
    { twitter: '' }
  ],
  footerText: '\u00A9 Copyright Tieme Ndo. All Rights Reserved',
}
class Footer {
  constructor(data, parent, children = null) {
    this.data = data;
    this.children = children;
    this.parent = parent;
    this.createFooterContent()
  }
  createFooterContent = () => {
    this.parent.appendChild(this.constructSocial())
    if (this.children) {
      this.parent.appendChild(this.children);
    }
    this.parent.appendChild(this.constructFooterText())
  }
  constructSocial = () => {
    const ul = document.createElement('ul');
    ul.classList.add('social');
    this.generateSocialLinks(this.data.social).forEach(link => {
      ul.appendChild(link)
    })
    return ul;
  }
  constructFooterText = () => {
    const p = document.createElement('p')
    p.textContent = this.data.footerText;
    return p;
  }
  createElement = (el, classNames) => {
    const element = document.createElement(el);
    if (Array.isArray(classNames)) {
      classNames.forEach(className => {
        element.classList.add(className)
      })
    } else {
      element.classList.add(classNames)
    }
    return element;
  }
  generateSocialLinks = (handles) => {
    return handles.map((handle) => {
      return this.createSocialLink(handle)
    })
  }
  createSocialLink = (handle) => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    const platform = Object.keys(handle)[0]
    anchor.href = `https://${platform}.com/${handle[platform]}`;
    const icon = this.createElement('i', ['fab', `fa-${platform}`, platform]);
    anchor.appendChild(icon);
    li.appendChild(anchor);
    return li;
  }
}

const footer = document.querySelector('footer');
new Footer(footerData, footer)