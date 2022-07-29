import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGalleryCardMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", cardsMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join("");
}

console.log(galleryItems);
