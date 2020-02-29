const image1 = document.querySelector('#one')
const image2 = document.querySelector('#two')
const image3 = document.querySelector('#three')
const image4 = document.querySelector('#four')
const image5 = document.querySelector('#five')

const bigPic = document.querySelector('figure img')


function change(){
    bigPic.src = pic.src
   
}

image1.addEventListener('click',change)
image2.addEventListener('click',change)
image3.addEventListener('click',change)
image4.addEventListener('click',change)
image5.addEventListener('click',change)
