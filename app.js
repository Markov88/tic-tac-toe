const tds = document.querySelectorAll('td')
let timeIsClicked = 0
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', playersTurn)

    function playersTurn () {
        if (tds[i].textContent === '') {
            timeIsClicked++

            if (timeIsClicked > 1) {

                tds[i].textContent = 'O'
                timeIsClicked = 0

            } else {
                tds[i].textContent = 'X'
            }


        }
    }
}
