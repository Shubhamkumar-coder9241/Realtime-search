let addBtn = document.querySelector("#addBtn");
let form = document.querySelector("#formWrap");
let cancel = document.querySelector("#cancelBtn");
let submit = document.querySelector("#saveBtn");

let fName = document.querySelector("#fName");
let fTown = document.querySelector("#fTown");
let fBookings = document.querySelector("#fBookings");
let fPhoto = document.querySelector("#fPhoto");
let formColors = document.querySelector("#formColors");
let formDots = document.querySelectorAll(".form-dot");


const nameInput = document.createElement("input");
nameInput.id = "fName";
nameInput.placeholder = "e.g. Fatima Uma";
nameInput.required = true;

const townInput = document.createElement("input");
townInput.id = "fTown";
townInput.placeholder = "e.g. Singapore";
townInput.required = true;

const bookingInput = document.createElement("input");
bookingInput.id = "fBookings";
bookingInput.placeholder = "e.g. 3 times";
bookingInput.required = true;

const photoInput = document.createElement("input");
photoInput.id = "fPhoto";
photoInput.placeholder = "https://...";
photoInput.required = true;

formWrap.append(
    nameInput,
    townInput,
    bookingInput,
    photoInput)

document.querySelector("#cardStack").appendChild(formWrap);
addBtn.addEventListener("click", function() {
    form.style.display = "initial"
    document.querySelector("#scene").style.display = "none"
});





cancel.addEventListener("click", function() {
    form.style.display = "none"
    document.querySelector("#scene").style.display = "flex"
});



submit.addEventListener("click", function(evt) {
    evt.preventDefault();






});