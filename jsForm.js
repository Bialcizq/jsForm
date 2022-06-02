const entryData = ['firstName','lastName','phoneNumber','country','adress','dateOfBirth','email'];

// const dataMap = new Map();
const camelToString = [];

entryData.forEach(element => camelToString.push(element))

for (let i = 0; i < entryData.length; i++) {
    camelToString.push(entryData[i]);
    // console.log(camelToString[i]);
    // console.log(camelToString[i].length)
    for (let j = 0; j < camelToString[i].length; j++) {
        if (camelToString[i].charCodeAt(j) >= 65 && camelToString[i].charCodeAt(j) <= 90) {
            // console.log('tu trzeba spację');
            // console.log(camelToString[i][j]);
            console.log(camelToString[i].substring(0, j));
            console.log(camelToString[i][0]);
        }
    }
}

function changeToString(element) {
    
}

for (let i = 0; i < entryData.length; i++) {
    const formCell = document.createElement('div');
    const inputContainer = document.createElement('input');
    const inputTitle = document.createElement('p');
    formCell.className = entryData[i] + 'Cell';
    inputContainer.className = entryData[i] + 'Input';
    inputTitle.textContent = camelToString[i];
    document.querySelector('.headWrapper').appendChild(formCell);
    document.querySelector('.' + entryData[i] + 'Cell').appendChild(inputTitle);
    document.querySelector('.' + entryData[i] + 'Cell').appendChild(inputContainer);
}