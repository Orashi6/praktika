const body = document.querySelector('body')
const matn = document.querySelector('h1')
body.appendChild(matn)

let savol1 = prompt('BackgroundColor qanday rang')
let savol2 = prompt('TextColor qanday rang')

body.style.backgroundColor = `${savol1}`
matn.style.color = `${savol2}`
console.log(savol1,savol2);
