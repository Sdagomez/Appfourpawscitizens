document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    console.log('hola estoy adentro')
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'pets.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           // console.log(this.responseText);
            let data = JSON.parse(this.responseText);
           //console.log(data);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            
            for (let item of data) {
                res.innerHTML += `
                <td> ${item.microchip}</td>
                <td> ${item.species}</td>
                <td> ${item.sex}</td>
                <td> ${item.size}</td>
                <td> ${item.potentDangerous}</td>
                <td> ${item.neighborhood}</td>
               
                `
                
    
        //  console.log(item.sex);
        }
        }
    //    $(document).ready(function () {
  //          console.log('hola capo')
   // $('#example').DataTable();
//} );

    }
}