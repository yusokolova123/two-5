const button = document.querySelector('.btn');
const par = document.querySelector('#show');

button.addEventListener('click', result);
function result(e) {
    console.log('btn was clicked');
    e.preventDefault();
    let points = 0;
    console.log(points);

    if(document.querySelector('#right1').checked) {
        points++;
    }
    if(document.querySelector('#right2').checked) {
        points++;
    }
    if(document.querySelector('#right3').checked) {
        points++;
    }
    if(document.querySelector('#right4').checked) {
        points++;
    }
    if(document.querySelector('#right5').checked) {
        points++;
    }
    par.textContent = 'Your points: ' + points;
}