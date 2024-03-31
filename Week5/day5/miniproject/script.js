function createColors(){
    const colorsDiv = document.querySelector('.colors')
    let colorsNames = ['pink', 'red', 'yellow']
    for(let i = 0; i<22; i++){
    let colorDivs = document.createElement('div')
    colorDivs.style.backgroundColor = `${colorsNames[i]}`
    colorsDiv.appendChild(colorsDivs)
    }
    createColors()
}
function randomColors(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


