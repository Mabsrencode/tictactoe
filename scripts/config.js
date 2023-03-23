function openPlayerConfig(event){
    editedPlayer =+ event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlay.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backDropElement.style.display = 'none';
    warningInputElement.style.display = 'none';
    formELement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formELement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    if(!enteredPlayerName){
        errorsOutputElement.textContent = 'Please enter a valid player name!';
        event.target.firstElementChild.classList.add('error');
        return;
    }
    // else if(enteredPlayerName){
    //     errorsOutputElement.style.display = 'none';
    //     event.target.firstElementChild.classList.remove('error');
    // }
    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
function closeErrorInputElement(){
    warningInputElement.style.display = 'none';
    backDropElement.style.display = 'none';
}