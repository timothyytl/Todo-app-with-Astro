const form = document.querySelector('#todo-form')
const list = document.querySelector('#list')
const input = document.querySelector('#todo-input')

form.addEventListener('submit', e => {
    e.preventDefault()

    const item = document.createElement('div')
    item.innerText = input.value;
    item.classList.add('list-item')

    list.appendChild(item)

    input.value = ""

    item.addEventListener("click", () => {
        item.remove()
    })
})