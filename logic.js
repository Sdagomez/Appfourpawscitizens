document.querySelector('#boton2').addEventListener('click', saveAnimal);

//document.querySelector('#boton3.botons').addEventListener('click', saveAnimal)
document.querySelector('#boton3').addEventListener('click', addUpdateAnimal);
drawAnimalTable();


function saveAnimal() {

    var sMicrochip = document.querySelector('#Microchip').value,
     species = document.querySelector('#Species').value,
     sSex = document.querySelector('#Sex').value,
     sSize = document.querySelector('#Size').value,
     sPotentDangerous = document.querySelector('#PotentDangerous').value,
     sNeighborhood = document.querySelector('#Neighborhood').value;

    addAnimalToSystem(sMicrochip, species, sSex, sSize, sPotentDangerous, sNeighborhood);
    drawAnimalTable();
}

function drawAnimalTable() {
    var list = getAnimalList(),
        tbody = document.querySelect('$ejemplo tbody');
    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = list[i].microchip;





        tbody.appendChild(row);

    }

}

function addUpdateAnimal() {
    var sRace = document.querySelector('#species').value,
        sOwner = document.querySelector('#owner').value,
        sAdress = document.querySelector('#adres').value,
        sPicture = document.querySelector('#picture').value,
        sOwnerMicrochip = document.querySelector('#micro').value;
    
    var animalObj = findAnimal(sOwnerMicrochip);

    addUpdateAnimal(animalObj, sRace, sOwner, sAdress, sPicture);
 }

 