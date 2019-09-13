const tds = document.querySelectorAll('td')
const win = document.querySelector('#result')
const rematch = document.querySelector('#rematch')
rematch.addEventListener('click', reset)

let arr = []
let arrr = []
let arrrr = []
let timeIsClicked = 0
let gameover = false
for (let i = 0; i < tds.length; i++) {

    if (!gameover) tds[i].addEventListener('click', playersTurn)

    function playersTurn () {
        if (tds[i].textContent === '' && !gameover) {
            timeIsClicked++
            if (timeIsClicked > 1) {
                tds[i].style.color = 'grey'
                tds[i].textContent = 'O'
                timeIsClicked = 0
            } else {
                tds[i].style.color = 'red'
                tds[i].textContent = 'X'
            }
        }
        win.textContent = 'Playing...'

        if (tds[0].textContent !== '' && tds[4].textContent !== '' && tds[8].textContent !== '')
            if (tds[0].textContent === tds[4].textContent && tds[4].textContent === tds[8].textContent) {
                gameover = true
                tds[0].classList.add('win')
                tds[4].classList.add('win')
                tds[8].classList.add('win')
                if (tds[0].textContent === 'X') {
                    win.textContent = 'X WINS'
                } else {
                    win.textContent = 'O WINS'
                }
            }

        if (tds[2].textContent !== '' && tds[4].textContent !== '' && tds[6].textContent !== '')
            if (tds[2].textContent === tds[4].textContent && tds[4].textContent === tds[6].textContent) {
                gameover = true
                tds[2].classList.add('win')
                tds[4].classList.add('win')
                tds[6].classList.add('win')
                if (tds[2].textContent === 'X') {
                    win.textContent = 'X WINS'
                } else {
                    win.textContent = 'O WINS'
                }
            }

        for (let j = 0; j < 3; j++) {

            let tr = document.getElementsByTagName('tr')[j].children

            if (Array.from(tr).every(sameContentX)) {
                document.getElementsByTagName('tr')[j].classList.add("win")
                gameover = true
                win.textContent = 'X WINS'
            } else if (Array.from(tr).every(sameContentO)) {
                document.getElementsByTagName('tr')[j].classList.add("win")
                gameover = true
                win.textContent = 'O WINS'
            }

            let td1 = document.getElementsByTagName('tr')[j].getElementsByTagName('td')[0]

            arr.push(td1)
            let arr1 = arr.slice(Math.max(arr.length - 3, 1))
            if (arr1.length === 3)
                if (arr1.every(sameContentX)) {
                    td1.classList.add("win")
                    gameover = true
                    win.textContent = 'X WINS'
                } else if (arr1.every(sameContentO)) {
                    td1.classList.add("win")
                    gameover = true
                    win.textContent = 'O WINS'
                }

            let td2 = document.getElementsByTagName('tr')[j].getElementsByTagName('td')[1]

            arrr.push(td2)
            let arr2 = arrr.slice(Math.max(arrr.length - 3, 1))
            if (arr2.length === 3)
                if (arr2.every(sameContentX)) {
                    td2.classList.add("win")
                    gameover = true
                    win.textContent = 'X WINS'
                } else if (arr2.every(sameContentO)) {
                    td2.classList.add("win")
                    gameover = true
                    win.textContent = 'O WINS'
                }

            let td3 = document.getElementsByTagName('tr')[j].getElementsByTagName('td')[2]

            arrrr.push(td3)
            let arr3 = arrrr.slice(Math.max(arrrr.length - 3, 1))
            if (arr3.length === 3)
                if (arr3.every(sameContentX)) {
                    td3.classList.add("win")
                    gameover = true
                    win.textContent = 'X WINS'
                }
                else if (arr3.every(sameContentO)) {
                    td3.classList.add("win")
                    gameover = true
                    win.textContent = 'O WINS'
                }
        }
    }
}

function reset () {
    Array.from(tds).forEach((e) => {
        e.removeAttribute("class")
        e.innerText = ''
    })
    document.querySelectorAll('tr').forEach(e => e.removeAttribute("class"))
    win.textContent = 'Lets play'
    gameover = false
}

function sameContentX (x) {
    return x.textContent === 'X'
}

function sameContentO (o) {
    return o.textContent === 'O'
}
 

