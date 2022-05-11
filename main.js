const rating = document.querySelector(".rating");
const form = document.getElementById("form")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const value = form.elements['rate'].value
    submitted(value)
})

function submitted(value) {
    console.log('here', value)
}

for (let i = 1; i <= 5; i++) {
  rating.innerHTML += `<div class="rate-button">
  <input type="radio" id="${i}" value="${i}" name="rate" />
  <label class="rate-button__label" for="${i}">${i}</label>
</div>`;
}
