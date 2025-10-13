const images = document.querySelectorAll('.hover-swap');

images.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover');
  
  img.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });
  
  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});


const button = document.getElementById('logo');
const body = document.body;
const logo = document.getElementById('logo');
const heroImg = document.getElementById('hero-img');
const github = document.getElementById('github');
const fb = document.getElementById('fb');
const insta = document.getElementById('insta');
const x = document.getElementById('x');


button.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Change image source
    if (body.classList.contains('dark-mode')) {
        logo.src = './assets/photos/darker-archive-logo.jpg';
        heroImg.src = './assets/photos/dark-hero2-v2.jpg';
        github.src = './assets/photos/social icons/white-github-icon.png'
        fb.src = './assets/photos/social icons/white-fb-icon.png'
        insta.src = './assets/photos/social icons/white-insta-icon.png'
        x.src = './assets/photos/social icons/white-x-icon.png'

      } else {
        logo.src = './assets/photos/eli&sevs-archive-logo1.png';
        heroImg.src = './assets/photos/hero-img1-v1.jpg';
        github.src = './assets/photos/social icons/github-icon.svg'
        fb.src = './assets/photos/social icons/facebook-2-icon.svg'
        insta.src = './assets/photos/social icons/instagram-icon.svg'
        x.src = './assets/photos/social icons/x-icon.svg'
    }
});