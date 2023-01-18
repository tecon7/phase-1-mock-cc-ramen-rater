// write your code here
let firstRamen

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenMenu => ramenMenu.forEach(ramens => {
    if(firstRamen === undefined) {
        firstRamen = ramens
        renderRamen(firstRamen)
    }
    const ramenPicture = document.createElement("img")
    ramenPicture.src = ramens.image
    ramenPicture.addEventListener('click', (event) => {
        renderRamen(ramens)
    })
    document.getElementById('ramen-menu').append(ramenPicture)

}))

function renderRamen(ramen) {
   const ramenImage = document.querySelector('.detail-image')
   ramenImage.src = ramen.image
   
   const ramenName = document.querySelector('.name')
   ramenName.textContent = ramen.name
   
   const ramenRestaurant = document.querySelector('.restaurant')
   ramenRestaurant.textContent = ramen.restaurant

   const ramenRating = document.querySelector('#rating-display')
   ramenRating.textContent = ramen.rating

   const ramenComment = document.querySelector('#comment-display')
   ramenComment.textContent = ramen.comment
}

const ramenForm = document.querySelector('#new-ramen')

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newName = document.querySelector('#new-name')
    const newRestaurant = document.querySelector('#new-restaurant')
    const newImage = document.querySelector('#new-image')
    const newRating = document.querySelector('#new-rating')
    const newComment = document.querySelector('#new-comment')

const newRamen = {
    name: newName.value,
    restaurant: newRestaurant.value,
    image: newImage.value,
    rating: newRating.value,
    comment: newComment.value
}

renderRamen(newRamen)
let ramenPic = document.createElement('img')
ramenPic.src = newRamen.image

ramenPic.addEventListener('click', (event) => {
    renderRamen(newRamen)
})
document.getElementById('ramen-menu').append(ramenPic)
ramenForm.reset()
})