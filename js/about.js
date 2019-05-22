TweenLite.defaultEase = Expo.easeOut;
const teamProfile = [
  {
    name: "Sorin Chis",
    role: "Team Lead",
    social: [
      { facebook: "sorin_chis" },
      { linkedin: "sorin_chis" },
      { twitter: "sorin_chis" },
      { github: "sorin_chis" },
    ],
    image: 'Sorin Chis.jpg'
  },
  {
    name: "Chase Garsee",
    role: "Backend Developer [Java]",
    social: [
      { facebook: "chasegarsee" },
      { linkedin: "chasegarsee" },
      { twitter: "chasegarsee" },
      { github: "chasegarsee" },
    ],
    image: 'Chase Garsee.png'
  },
  {
    name: "Anthony L. Johnson",
    role: "Fronted Developer [ReactJs]",
    social: [
      { facebook: "#" },
      { linkedin: "#" },
      { twitter: "#" },
      { github: "#" },
    ],
    image: 'Anthony L. Johnson.png'
  },
  {
    name: "Vladislav Mogilevskiy",
    role: "User Interface Developer [Javascript]",
    social: [
      { facebook: "#" },
      { linkedin: "#" },
      { twitter: "#" },
      { github: "#" },
    ],
    image: 'Vladislav Mogilevskiy.png'
  },
  {
    name: "Chinedu Orie",
    role: "User Interface Developer [Javascript]",
    social: [
      { facebook: "orie.chinedu" },
      { linkedin: "oriechinedu" },
      { twitter: "nedusoft" },
      { github: "oriechinedu" },
    ],
    image: 'Chinedu Orie.jpeg'
  }
]
class About {
  constructor(data) {
    this.data = data;
    this.aboutContent = document.querySelector('.about-content');
    this.constructProfile()
    this.animateDom();
  }

  animateDom = () => {
    const aboutContainer = document.querySelectorAll('.profile')
    aboutContainer.forEach((card) => {
      const content = card.querySelector('.card-content');
      const h3 = card.querySelector('h2');
      card.addEventListener('mouseenter', () => {

        TweenMax.fromTo(content, .2, { width: 0 }, { width: '100%', height: "100%", display: "flex" });
        TweenMax.fromTo(h3, .2, { x: -100 }, { x: 50, ease: Bounce.easeOut});
      })
      card.addEventListener('mouseleave', () => {
        TweenMax.fromTo(content, .2, { width: "100%"}, { width: '1px', display: "none" });
        TweenMax.fromTo(h3, .2, { x: 50}, { x: 0 });
      })
    })
  }

  constructProfile = () => {
    const profile = this.createElement('div', 'profile')
    const aboutCard = this.createElement('div', 'about-card')
    aboutCard.style.backgroundImage = `url('../assets/img/team-profile/${this.data.image}')`;
    const cardContent = this.createElement('div', 'card-content')
    const h3 = document.createElement('h2');
    h3.textContent = this.data.name;
    profile.appendChild(aboutCard);
    profile.appendChild(h3);
    cardContent.appendChild(this.constructParagraph());
    cardContent.appendChild(this.constructSocial())
    aboutCard.appendChild(cardContent);
    this.aboutContent.appendChild(profile)
  }
  constructParagraph = () => {
    const p = document.createElement('p')
    p.textContent = this.data.role;
    return p;
  }
  constructSocial = () => {
    const social = this.createElement('div', 'social');
    const ul = document.createElement('ul');
    this.generateSocialLinks(this.data.social).forEach(link => {
      ul.appendChild(link)
    })
    social.appendChild(ul);
    return social;
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
teamProfile.forEach((profile) => {
  new About(profile)
})
