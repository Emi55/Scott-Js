// initialise and declare variables

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

// Loop 5 times to create image
for(var i =1; i < 6; i++) {
    var newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic' + i + '.jpg');
thumbBar.appendChild(newImage);
}

// // Build an event handler for each image
// newImage.onclick = function(event){
//     var imgSrc = event.target.getAttribute('src');
//     displayImage(imgSrc);
// }

// Function to change the source of the image
function displayImage(value){
 displayImage.setAttribute('src', value);


// Event Delegation
thumbBar.onclick = function(event){
    if(event.tartget.nodeName === 'IMG'){
        var imgSrc = event.tartget.getAttribute('src');
        displayImage(imgSrc);
    }
}