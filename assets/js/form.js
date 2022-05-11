import { renderStep } from "./render.js";

export function handleSubmit(){
  const form = document.getElementById("form")

  form.addEventListener('submit', (event) => {
      event.preventDefault()
      const { value } = form.elements['rate']
      renderStep(value)
  })
}
