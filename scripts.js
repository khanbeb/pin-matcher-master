//  Message Hiding Alert
    document.getElementById('pin-match').style.display = 'none';
    document.getElementById('pin-not-match').style.display = 'none';

// 4 Digit Rendom Pin Generating
document.getElementById('pin-btn').addEventListener('click', function() {
    var fourDigitPin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('auto-pin').value = fourDigitPin;
});


var inputNumberBox = document.getElementById('input-number');

function inputNumber(number){
    inputNumberBox.value += number;
}

// Clear Button
function clearBtn() {
    inputNumberBox.value = '';
}


// Back Button
function backBtn() {
    currentNumbers = inputNumberBox.value;
    inputNumberBox.value = currentNumbers.slice(0, -1);
}

// Pin Matching Function 
document.getElementById('submitBtn').addEventListener('click', function() {
    var generatedPin = document.getElementById('auto-pin').value;

    if (generatedPin == "") {
        inputNumberBox.value = '';
        return alert('Please Generate a Pin First.');
    }
    
    if (inputNumberBox.value.length != 4 ) {
        inputNumberBox.value = '';
        return alert('Pin must be 4 Digit');

    }

    if (generatedPin == inputNumberBox.value) {
        document.getElementById('pin-match').style.display = 'block';
        document.getElementById('pin-not-match').style.display = 'none';
    }

    if (generatedPin != inputNumberBox.value) {
        document.getElementById('pin-not-match').style.display = 'block';
        document.getElementById('pin-match').style.display = 'none';
        
        
        // Disableing Submit Button
        var chanceLeft = document.getElementById('chance-left').innerText;
        var chanceLeftNumber = parseInt(chanceLeft);
        
        var currentChance = chanceLeftNumber - 1;
        document.getElementById('chance-left').innerText = currentChance;
        if(currentChance == 0) {
            document.getElementById('submitBtn').disabled = 'true';
        }
    }
});