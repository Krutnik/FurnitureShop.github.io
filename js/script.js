let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

let sofaOne = document.querySelector(".sofa-1");
let sofaTwo = document.querySelector(".sofa-2");
let sofaThree = document.querySelector(".sofa-3");

btnLeft.onclick = function() {
    if (sofaOne.classList.contains('sofa-1') && sofaTwo.classList.contains('sofa-2') && sofaThree.classList.contains('sofa-3')) {
        sofaOne.classList.remove("sofa-1");
        sofaOne.classList.add("sofa-2");
        sofaTwo.classList.remove("sofa-2");
        sofaTwo.classList.add("sofa-3");
        sofaThree.classList.remove("sofa-3");
        sofaThree.classList.add("sofa-1");
    }
    else if (sofaOne.classList.contains('sofa-2') && sofaTwo.classList.contains('sofa-3') && sofaThree.classList.contains('sofa-1')) {
        sofaOne.classList.remove("sofa-2");
        sofaOne.classList.add("sofa-3");
        sofaTwo.classList.remove("sofa-3");
        sofaTwo.classList.add("sofa-1");
        sofaThree.classList.remove("sofa-1");
        sofaThree.classList.add("sofa-2");
    }
    else if (sofaOne.classList.contains('sofa-3') && sofaTwo.classList.contains('sofa-1') && sofaThree.classList.contains('sofa-2')) {
        sofaOne.classList.remove("sofa-3");
        sofaOne.classList.add("sofa-1");
        sofaTwo.classList.remove("sofa-1");
        sofaTwo.classList.add("sofa-2");
        sofaThree.classList.remove("sofa-2");
        sofaThree.classList.add("sofa-3");
    }
}

btnRight.onclick = function () {
    if (sofaOne.classList.contains('sofa-1') && sofaTwo.classList.contains('sofa-2') && sofaThree.classList.contains('sofa-3')) {
        sofaOne.classList.remove("sofa-1");
        sofaOne.classList.add("sofa-3");
        sofaTwo.classList.remove("sofa-2");
        sofaTwo.classList.add("sofa-1");
        sofaThree.classList.remove("sofa-3");
        sofaThree.classList.add("sofa-2");
    }
    else if (sofaOne.classList.contains('sofa-2') && sofaTwo.classList.contains('sofa-3') && sofaThree.classList.contains('sofa-1')) {
        sofaOne.classList.remove("sofa-2");
        sofaOne.classList.add("sofa-1");
        sofaTwo.classList.remove("sofa-3");
        sofaTwo.classList.add("sofa-2");
        sofaThree.classList.remove("sofa-1");
        sofaThree.classList.add("sofa-3");
    }
    else if (sofaOne.classList.contains('sofa-3') && sofaTwo.classList.contains('sofa-1') && sofaThree.classList.contains('sofa-2')) {
        sofaOne.classList.remove("sofa-3");
        sofaOne.classList.add("sofa-2");
        sofaTwo.classList.remove("sofa-1");
        sofaTwo.classList.add("sofa-3");
        sofaThree.classList.remove("sofa-2");
        sofaThree.classList.add("sofa-1");
    }
}