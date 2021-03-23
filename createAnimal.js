//var fs = require('fs');
//
var animalsList = [];



function addAnimalToSystem(pMicrochip, pSpecies, pSex, pSizes, pPotentDangerous, pNeighborhood) {
    var newAnimal = {
        microchip: pMicrochip,
        species: pSpecies,
        sex: pSex,
        size: pSizes,
        potentDangerous: pPotentDangerous,
        neighborhood: pNeighborhood,
        updateList:[]
    };
console.log(newAnimal);
    animalsList.push(newAnimal);


 //   const json_animals = JSON.stringify(animalsList)
//fs.writeFileSync('prueba1.json', json_animals, 'utf-8');

}

function getAnimal() {
    return animalsList
}

function findAnimal(pMicrochip) {
    for (var i = 0; i < animalsList.length; i++) {
        if (animalsList[i].microchip == pMicrochip) {
            animalObject = animalsList[i]
        }
    }
    return animalObject;
}
function addUpdateAnimal(pAnimalObj, pUpdateRace, pUpdateOwner, pUpdateAdress, pUpdatePicture) {
    var newUpdateAnimal = {
        race: pUpdateRace,
        owner: pUpdateOwner,
        adress: pUpdateAdress,
        picture: pUpdatePicture
    }
    pAnimalObj.updateList.push(newUpdateAnimal);
}