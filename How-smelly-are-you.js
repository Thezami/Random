checkButton ()

function smellChecker (){
    const smell = Math.random();
    let smellResult

    if (smell <= 1/4){
        smellResult = 'You damn fking smelly'
    } else if (smell > 1 / 4 && smell <= 2 / 4){
        smellResult = 'You are quite smelly'
    } else if (smell > 2 / 4 && smell <= 3 / 4){
        smellResult = 'You are ok smelling'
    } else {
        smellResult = 'You smell good!'
    }

    let smellResultHTML = `
    ${smellResult}
    <div>
    <button onclick="
    checkButton();
    loadResultCounter = 0
    loadResult();
    document.querySelector('.smell-result')
        .innerHTML = '';
    ">Check Again?!</button>
    </div>  
`
    document.querySelector('.smell-result')
        .innerHTML = smellResultHTML;
};

function checkButton (){
     document.querySelector('.check-button-div')
        .innerHTML = '<button class="check-button">Check!</button>';
    document.querySelector('.check-button').addEventListener('click',() => {loadResult()})
};


let loadResultCounter = 0

function loadResult(){
    let checkButtonHTML = 'loading';
    document.querySelector('.check-button')
    .innerHTML = checkButtonHTML;
    let i = 0

    loadingInterval = setInterval(() => {
        checkButtonHTML +='.'
        i++
        console.log(checkButtonHTML);
        console.log(i);
        document.querySelector('.check-button')
            .innerHTML = checkButtonHTML;

        if (i === 3){
            clearInterval(loadingInterval);
            loadResult();
            loadResultCounter ++;
            console.log(loadResultCounter);
        };

        if (loadResultCounter === 3){
            clearInterval(loadingInterval);
            smellChecker();

            document.querySelector('.check-button-div')
                .innerHTML = '';            
        }
        }, 50);
        
};
