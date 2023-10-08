`use strict`;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//key board events are global events
//if we hit any key key down event is generated then javasctipt does in fact generate an object.That object contains all the information about the event itslef and we can then access the object in the event handler fn

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === `Escape`) console.log("Esc was pressed");
  if (!modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
