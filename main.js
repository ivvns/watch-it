import '@fortawesome/fontawesome-free/js/all';
import './style.css'

const search = document.querySelector('.search')
const submitBtn = document.querySelector('.submit-btn')
const searchInput = document.querySelector('.search-input')

submitBtn.addEventListener('click', () => {
    search.classList.toggle('active')
    searchInput.focus()
})
