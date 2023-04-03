
const adding = document.querySelector('#add');
const decreasing = document.querySelector('#decrease');

let numtries = 0


adding.addEventListener('click', () => {
    numtries++;

    document.getElementById('Show').textContent = numtries;
})


decreasing.addEventListener('click', function (){
    numtries--;
    showLess(numtries)
})

 





function showLess(numtries) {
    let Results2 = numtries - 1;

    document.getElementById('Show').textContent = Results2
}

