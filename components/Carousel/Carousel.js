class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = this.element.querySelector('.left-button');
    this.rightBtn = this.element.querySelector('.right-button');
    this.images = element.querySelectorAll('img');
    console.log(this.images);

    this.leftBtn.addEventListener('click', () => this.imageLeft());

    this.rightBtn.addEventListener('click', () => this.imgageRight());

    this.firstImage = this.images[0];
    this.firstImage.style.display = 'block';
  }

  imageLeft() {
    Array.from(this.images).forEach((image, index) => {
      image.style.display = 'none';
      [index].style.display = 'block';
    });
  }

  imgageRight() {
    Array.from(this.images).forEach((image, index) => {
      image.style.display = 'none';
      image[index + 1].style.display = 'block';
    });
  }
}

let carousel = document.querySelector('.carousel');

const newCarousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
