document.querySelector('.check-button')
    .addEventListener('click', () => {
        smellChecker ()
    });

function smellChecker (){
    const smell = Math.random();
    let smellResult

    if (smell <= 1/4){
        smellResult = 'You damn fking smelly'
    } else if (1/4 < smell <= 2/4){
        smellResult = 'You are quite smelly'
    } else if (2/4 < smell <= 3/4){
        smellResult = 'You are ok smelling'
    } else if (3/4 < smell <= 1){
        smellResult = 'You smell good!'
    }

    let smellResultHTML = `
    ${smellResult}
    <div>
    <button onclick="smellChecker()">Check Again?!</button>
    </div>  
`
    document.querySelector('.smell-result')
        .innerHTML = smellResultHTML;
};


