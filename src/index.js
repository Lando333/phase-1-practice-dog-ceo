console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => { 
    fetchDogImgs()
    fetchBreedList()
})

function fetchDogImgs() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(dogImgData => renderDogs(dogImgData.message))
}
function fetchBreedList() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breedData => renderBreedList(breedData.message))
}

function renderDogs(dogImgs) {
    const dogImageContainer = document.getElementById('dog-image-container')
    dogImgs.forEach(dogUrl => {
        const dogImg = document.createElement('img')
        dogImg.src = dogUrl
        dogImageContainer.appendChild(dogImg)
    });
}

function renderBreedList(list) {
    const breedUl = document.getElementById('dog-breeds')
    
    Object.entries(list).forEach(entry => {
        const breedLi = document.createElement('li')
        breedLi.innerText = entry
        breedUl.appendChild(breedLi)

        breedLi.addEventListener('click', (e) => {
            e.target.style.color = 'blue'
        })
    })
}