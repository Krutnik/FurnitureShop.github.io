let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');

let sofaOne = document.querySelector('.sofa-1');
let sofaTwo = document.querySelector('.sofa-2');
let sofaThree = document.querySelector('.sofa-3');

btnLeft.onclick = function() {
    if (sofaOne.classList.contains('sofa-1') && sofaTwo.classList.contains('sofa-2') && sofaThree.classList.contains('sofa-3')) {
        sofaOne.classList.remove('sofa-1');
        sofaOne.classList.add('sofa-2');
        sofaTwo.classList.remove('sofa-2');
        sofaTwo.classList.add('sofa-3');
        sofaThree.classList.remove('sofa-3');
        sofaThree.classList.add('sofa-1');
    }
    else if (sofaOne.classList.contains('sofa-2') && sofaTwo.classList.contains('sofa-3') && sofaThree.classList.contains('sofa-1')) {
        sofaOne.classList.remove('sofa-2');
        sofaOne.classList.add('sofa-3');
        sofaTwo.classList.remove('sofa-3');
        sofaTwo.classList.add('sofa-1');
        sofaThree.classList.remove('sofa-1');
        sofaThree.classList.add('sofa-2');
    }
    else if (sofaOne.classList.contains('sofa-3') && sofaTwo.classList.contains('sofa-1') && sofaThree.classList.contains('sofa-2')) {
        sofaOne.classList.remove('sofa-3');
        sofaOne.classList.add('sofa-1');
        sofaTwo.classList.remove('sofa-1');
        sofaTwo.classList.add('sofa-2');
        sofaThree.classList.remove('sofa-2');
        sofaThree.classList.add('sofa-3');
    }
}

btnRight.onclick = function () {
    if (sofaOne.classList.contains('sofa-1') && sofaTwo.classList.contains('sofa-2') && sofaThree.classList.contains('sofa-3')) {
        sofaOne.classList.remove('sofa-1');
        sofaOne.classList.add('sofa-3');
        sofaTwo.classList.remove('sofa-2');
        sofaTwo.classList.add('sofa-1');
        sofaThree.classList.remove('sofa-3');
        sofaThree.classList.add('sofa-2');
    }
    else if (sofaOne.classList.contains('sofa-2') && sofaTwo.classList.contains('sofa-3') && sofaThree.classList.contains('sofa-1')) {
        sofaOne.classList.remove('sofa-2');
        sofaOne.classList.add('sofa-1');
        sofaTwo.classList.remove('sofa-3');
        sofaTwo.classList.add('sofa-2');
        sofaThree.classList.remove('sofa-1');
        sofaThree.classList.add('sofa-3');
    }
    else if (sofaOne.classList.contains('sofa-3') && sofaTwo.classList.contains('sofa-1') && sofaThree.classList.contains('sofa-2')) {
        sofaOne.classList.remove('sofa-3');
        sofaOne.classList.add('sofa-2');
        sofaTwo.classList.remove('sofa-1');
        sofaTwo.classList.add('sofa-3');
        sofaThree.classList.remove('sofa-2');
        sofaThree.classList.add('sofa-1');
    }
}

let btnInsp = document.getElementById('inspirations-btn');

let imageOne = document.querySelector('.image-one');
let imageTwo = document.querySelector('.image-two');
let imageThree = document.querySelector('.image-three');

btnInsp.onclick = function () {
    if (imageOne.classList.contains('image-one') && imageTwo.classList.contains('image-two') && imageThree.classList.contains('image-three')) {
        imageOne.classList.remove('image-one');
        imageOne.classList.add('image-three');
        imageTwo.classList.remove('image-two');
        imageTwo.classList.add('image-one');
        imageThree.classList.remove('image-three');
        imageThree.classList.add('image-two');
    }
    else if (imageOne.classList.contains('image-three') && imageTwo.classList.contains('image-one') && imageThree.classList.contains('image-two')) {
        imageOne.classList.remove('image-three');
        imageOne.classList.add('image-two');
        imageTwo.classList.remove('image-one');
        imageTwo.classList.add('image-three');
        imageThree.classList.remove('image-two');
        imageThree.classList.add('image-one');
    }
    else if (imageOne.classList.contains('image-two') && imageTwo.classList.contains('image-three') && imageThree.classList.contains('image-one')) {
        imageOne.classList.remove('image-two');
        imageOne.classList.add('image-one');
        imageTwo.classList.remove('image-three');
        imageTwo.classList.add('image-two');
        imageThree.classList.remove('image-one');
        imageThree.classList.add('image-three');
    }
}