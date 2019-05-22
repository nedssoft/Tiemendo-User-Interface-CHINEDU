class Carousel {
  constructor(carouselElement) {
      this.carousel = carouselElement;
      this.carouselItems = this.carousel.querySelectorAll('.carousel-item');
      this.ItemCount = this.carouselItems.length;
      this.currentItem = 0;
      this.initCarousel()
      this.autoShowCarousel()
  }
  initCarousel = () => {
      this.setItem(this.currentItem)
      const rightBtn = this.carousel.querySelector('.right-button')
      const leftBtn = this.carousel.querySelector('.left-button')
      rightBtn.addEventListener('click', this.nextItem)
      leftBtn.addEventListener('click', this.prevItem)
  }
  nextItem = () => {
      if (this.currentItem === this.ItemCount -1) {
          this.currentItem = 0;
      } else {
          ++this.currentItem;
      }
      this.setItem(this.currentItem)
  }
  prevItem = () => {
      if (this.currentItem > 0) {
          --this.currentItem
      } else {
          this.currentItem = this.ItemCount -1;
      }
      this.setItem(this.currentItem)
  }

  setItem = (index) => {
      Array.from(this.carouselItems).forEach(img => {
          img.style.display = 'none';
      });
      const currentItem = Array.from(this.carouselItems)[index];
      TweenMax.fromTo(currentItem, 1, {opacity: 0.3}, {opacity: 1, display: "flex"});
  }
  autoShowCarousel = () => {
      setInterval( () => {
          if (this.currentItem === this.ItemCount - 1) {
              this.currentItem = 0;
          } else {
              ++this.currentItem
          }
          this.setItem(this.currentItem)
      }, 5000) 
  }
}
let carousel = document.querySelector('.carousel');
const carouselObj = new Carousel(carousel)