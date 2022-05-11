import { handleSubmit } from "./form.js";

export function initRender(){
  const rating = document.querySelector(".rating");

  handleSubmit()

  for (let i = 1; i <= 5; i++) {
    rating.innerHTML += `<div class="btn-light">
    <input type="radio" id="${i}" value="${i}" name="rate" />
    <label class="btn-light__label" for="${i}">${i}</label>
  </div>`;
  }
}

export function renderStep(value){
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const badge = step2.querySelector(".card-badge");

  badge.textContent = `You selected ${value} out of 5`
  step1.classList.add("hide")
  step2.classList.remove("hide")
  step2.classList.add("show")
}
