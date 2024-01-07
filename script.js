const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.querySelector('#result');


function checkTextInput(textVal) {
    if (!textVal){
        alert('Please input a value');
    } else {
        const textValReplace = textVal.replace(/[^a-zA-Z0-9]/ig, "").toUpperCase();
        console.log(textValReplace);
        const textValReplaceReverse = textValReplace.split("").reverse().join("").toUpperCase();
        console.log(textValReplaceReverse);  
        if (textValReplace === textValReplaceReverse) {
            result.style.display = "block";
            result.innerText = `${textVal} is a palindrome`;
        } else {
            result.style.display = "block";
            result.innerText = `${textVal} is not a palindrome`;
        }      
    }
}

checkBtn.addEventListener('click', () => {
    checkTextInput(textInput.value);
});

