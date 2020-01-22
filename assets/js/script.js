var capital = $('#capitalPlayer').html();
var betPlayer = $('#betPlayer').val();
var slotArray = ['0', 'X', 'O', '7'];
// O = x1 ; X = x10 ; 7 = x100
var randomNumber = Math.floor((Math.random() * 3) + 1); //Choisis un nombre entre 1 et 4
var win = false;
var enoughCapital = false;

function setUp() {
    capital = 1000;
    $('#capitalPlayer').html(capital);
    $('#slot1').html('');
    $('#slot2').html('');
    $('#slot3').html('');
    $('#betPlayer').val('1');
    betPlayer = $('#betPlayer').val();
}

function randomizeSlot() {
    $('#slot1').html(slotArray[randomNumber]);
    randomNumber = Math.floor((Math.random() * 3) + 1);
    $('#slot2').html(slotArray[randomNumber]);
    randomNumber = Math.floor((Math.random() * 3) + 1);
    $('#slot3').html(slotArray[randomNumber]);
}

function checkIfWin() {
    var slot1 = $('#slot1').html();
    var slot2 = $('#slot2').html();
    var slot3 = $('#slot3').html();
    if (slot1 == slot2 && slot2 == slot3) {
        win = true;
    } else {
        win = false;
    }
    console.log('win', win);
    return win;
}

// function checkIfLose() {
//     if (capital == 0) {
//         alert("GAME OVER ! LOSER !")
//         setUp();
//     }
// }

function changerMise() {
    betPlayer = prompt('Combien voulez-vous miser ?');
    $('#betPlayer').val(betPlayer);
}


function checkIfEnoughCapital() {
    if (betPlayer != "" && betPlayer != 0) {
        if (capital >= betPlayer) {
            enoughCapital = true;
        } else {
            enoughCapital = false;
        }
    }
    console.log('enoughCapital', enoughCapital);
    return enoughCapital;
}

function whatDidIWin() {
    console.log('whatDidIWin')
    var slot1 = $('#slot1').html();
    var slot2 = $('#slot2').html();
    var slot3 = $('#slot3').html();

    if (slot1 == 'X' && slot2 == 'X' && slot3 == 'X') {
        capital = capital + betPlayer * 10;
        $('#capitalPlayer').html(capital);
        setTimeout(function () {
            alert("Félicitations, vous gagnez 10 fois votre mise !");
        }, 100);
    } else if (slot1 == 'O' && slot2 == 'O' && slot3 == 'O') {
        capital = capital + betPlayer * 1;
        $('#capitalPlayer').html(capital);
        setTimeout(function () {
            alert("Bien joué, tu gagnes 1 fois ta mise.")
        }, 100);
    } else if (slot1 == '7' && slot2 == '7' && slot3 == '7') {
        capital = capital + betPlayer * 100;
        $('#capitalPlayer').html(capital);
        setTimeout(function () {
            alert("JACKPOT, toi gagner 100 fois la mise... Play again !");
        }, 100);
    } else {
        console.log('erreur dans la fonction')
    }
}

function play() {
    checkIfEnoughCapital();
    if (enoughCapital) {
        randomizeSlot();
        checkIfWin();
        if (win) {
            whatDidIWin();
        } else {
            capital = capital - betPlayer;
            $('#capitalPlayer').html(capital);
            if (capital == 0) {
                setTimeout(function () {
                    alert("Game Over. Revenez demain :)")
                }, 100);
            }
        }
    } else {
        alert("Erreur mise || Pas assez de capital")
    }
}

//Fait en sorte que les slots restent des ronds
setInterval(function () {
    var slot = $('.slot')
    var slotWidth = $('.slot').outerWidth()

    $('.slot').css("height", slotWidth)

}, 500);


setUp();