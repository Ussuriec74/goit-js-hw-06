const galleryListRef = document.querySelector('.gallery');
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images
  .map((image) => `<li class = "gallery__item"><img class = "gallery__img" src = ${image.url} alt = ${image.alt} width = "100% / 3 - 80px"></li>`)
  .join('');

galleryListRef.insertAdjacentHTML('afterbegin', markup);

const galleryItemRef = document.querySelectorAll(".gallery__item");
galleryListRef.style.display = "flex";
galleryListRef.style.marginTop = "100px";
galleryListRef.style.marginRight = "-40px";
galleryItemRef.forEach(item => {
  item.style.marginRight = "40px";
})