// fetch('./employees.json')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         // const tableBody = document.querySelector('#employeeTable tbody');

//         // data.forEach(employee => {
//         //     const row = document.createElement('tr');

//         //     row.innerHTML = `
//         // <td>${employee.id}</td>
//         // <td>${employee.name}</td>
//         // <td>${employee.department}</td>
//         // <td>${employee.age}</td>
//         // <td>${employee.isActive ? 'Yes' : 'No'}</td>
//         // <td>${employee.skills}</td>
//         // <td>${employee.address.city},${employee.address.country} </td>

//         // `;

//         //     tableBody.appendChild(row);

//         // });
//     })
//     .catch(error => console.error('Erreur lors du chargement des donnees', error));








// document.getElementById('searchButton').addEventListener('click',rechercheTable)
//     function rechercheTable (){
//         const filtre = document.getElementById('searchInput').value.toLowerCase();
//         const rangées = document.querySelectorAll('#employeeTable tbody tr');

   
//     if (filtre === "") {
//         // Si la barre de recherche est vide, réafficher toutes les lignes
//         rangées.forEach(range => {
//             range.style.display = "";
//         });
//     } else {
//         // Sinon, filtrer selon le texte recherché
//         rangées.forEach(range => {
//             const cellules = range.querySelectorAll('td');
//             const correspondre = Array.from(cellules).some(cellule => cellule.textContent.toLowerCase().includes(filtre));

//             range.style.display = correspondre ? '' : 'none';
//         });
//     }
// }


    // rangées.forEach(range => {
    //         const cellules = range.querySelectorAll('td');
    //         const correspondre = Array.from(cellules).some(cellule => cellule.textContent.toLocaleLowerCase().includes(filtre));
            
    //         range.style.display = correspondre ? '' : 'none' ;

    //     });
    // }



fetch("./employees.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("ma5damx :)");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data)
        const tableBody = document.querySelector('#employeeTable tbody');

        data.forEach(employee => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.age}</td>
                <td>${employee.isActive ? 'Yes' : 'No'}</td>
                <td>${employee.skills}</td>
                <td>${employee.address.city},${employee.address.country} </td>
        
                `;

            tableBody.appendChild(row);

        });
    })
    .catch((error) => {
        console.error(error);
    });



    document.getElementById('searchInput').addEventListener('input', rechercheTable);

function rechercheTable() {
    const filtre = document.getElementById('searchInput').value.toLowerCase();
    const rangées = document.querySelectorAll('#employeeTable tbody tr');
    let found = false; // Variable pour vérifier s'il y a une correspondance

    if (filtre === "") {//ida kanet 3ana recherche 5awya raytafficha data kamel li f tablaeu
        rangées.forEach(range => {
            range.style.display = "";
        });
    } else {
        
        rangées.forEach(range => { // hnaya rannta9iw 3la hsab chay 3ana mdakhal f input
            const cellules = range.querySelectorAll('td');
            const correspondre = Array.from(cellules).some(cellule => cellule.textContent.toLowerCase().includes(filtre));

            if (correspondre) {
                range.style.display = "";
                found = true; //rankouno jbarna 3la la9al wahed match 
            } else {
                range.style.display = "none";
            }
        });

        
        if (!found) {
            alert("Aucun élément ne correspond à votre recherche.");
        }
        //ida chay dakhalna f recheche makayenchi fe tableau ranaffichiw alert 
    }
}