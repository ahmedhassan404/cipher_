function isStringEmpty(str) {
    return str.trim() === '';
}

function cipher_encrpto(s, k) {
    let cipher_text = '';
    if (isStringEmpty(s)) {
        return 'Error... string is empty';
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i].match(/[A-Z]/)) {
                let cipher_shift = String.fromCharCode((s.charCodeAt(i) - 'A'.charCodeAt(0) + k) % 26 + 'A'.charCodeAt(0));
                cipher_text += cipher_shift;
            } else if (s[i].match(/[a-z]/)) {
                let cipher_shift = String.fromCharCode((s.charCodeAt(i) - 'a'.charCodeAt(0) + k) % 26 + 'a'.charCodeAt(0));
                cipher_text += cipher_shift;
            } else {
                cipher_text += s[i];
            }
        }
        return cipher_text;
    }
}

function cipher_decrypt(s, k) {
    let cipher_text = '';
    if (isStringEmpty(s)) {
        return 'Error... string is empty';
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i].match(/[A-Z]/)) {
                let cipher_shift = String.fromCharCode((s.charCodeAt(i) - 'A'.charCodeAt(0) - k + 26) % 26 + 'A'.charCodeAt(0));
                cipher_text += cipher_shift;
            } else if (s[i].match(/[a-z]/)) {
                let cipher_shift = String.fromCharCode((s.charCodeAt(i) - 'a'.charCodeAt(0) - k + 26) % 26 + 'a'.charCodeAt(0));
                cipher_text += cipher_shift;
            } else {
                cipher_text += s[i];
            }
        }
        return cipher_text;
    }
}


function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var shift = parseInt(document.getElementById("shift").value);

    // Your Caesar cipher logic here
    var encryptedText = cipher_encrpto(inputText, shift);

    document.getElementById("result").innerText = "Encrypted text: " + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var shift = parseInt(document.getElementById("shift").value);

    // Your Caesar cipher logic here
    var decryptedText = cipher_decrypt(inputText, shift);

    document.getElementById("result").innerText = "decrypted text: " + decryptedText;

}