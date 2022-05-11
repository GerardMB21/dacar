const formAccount = document.getElementById('form-account')
const create = document.getElementById('create')
const delet = document.getElementById('delete')

let urlCamp = "../../DACARTELECOM-SISTEMA-DE-VENTAS/includes/API-camp/API-camp.php"
let urlTurn = "../../DACARTELECOM-SISTEMA-DE-VENTAS/includes/API-turn/API-turn.php"
let urlSup = "../../DACARTELECOM-SISTEMA-DE-VENTAS/includes/API-sup/API-sup.php"
let createSupervisor
let createAsesor
let deletSupervisor
let deletAsesor
let camp
let turn
let sup
let newSup
let campañas 
let turno
let supervisor 
let optionsCamp
let optionsTurn
let optionsSup

fetch(urlCamp)
.then(r=>r.json())
.then(r=>{

    campañas = r

})

fetch(urlTurn)
.then(r=>r.json())
.then(r=>{

    turno = r

})

fetch(urlSup)
.then(r=>r.json())
.then(r=>{

    supervisor = r

})





create.addEventListener("click",()=>{
    formAccount.innerHTML = `<div class="button-container">
            <div class="button">
                <div class="icon" id="create-supervisor"><ion-icon name="eye-outline"></ion-icon></div>
                <h2>Crear supervisor</h2>
            </div>
            <div class="button">
                <div class="icon" id="create-asesor"><ion-icon name="call-outline"></ion-icon></div>
                <h2>Crear asesor</h2>
            </div>
        </div>`

    createSupervisor = document.getElementById('create-supervisor')
    createAsesor = document.getElementById('create-asesor')  
    
    
    createSupervisor.addEventListener("click",()=>{

        for (let i = 0; i < campañas.items.length; i++) {
            optionsCamp += `<option value="${campañas.items[i].camp}">${campañas.items[i].camp}</option>`
        }

        for (let i = 0; i < turno.items.length; i++) {
            optionsTurn += `<option value="${turno.items[i].turno}">${turno.items[i].turno}</option>`
        }

        formAccount.innerHTML = `<div class="cards">
                <form method="POST" action="./includes/account/create-sup/create-supervisor.php">
                    <div>
                        <img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom">
                        <div>
                            <h2>Crear Supervisor</h2>
                            <p>Nombre de usuario: <br>
                            <input type="text" name="username"></p>
                            <p>Password: <br>
                            <input type="password" name="password"></p>
                            <p>Campaña</p>
                            <select name="camp" id="campaña">

                            </select>
                            <p>Turno</p>
                            <select name="turn" id="turno">
                                
                            </select>
                            <p class="center"><input type="submit" value="Crear"></p>
                        </div>
                    </div>
                </form>
            </div>`

            camp =document.getElementById('campaña')
            turn = document.getElementById('turno')

            camp.innerHTML = optionsCamp
            turn.innerHTML = optionsTurn
    })

    createAsesor.addEventListener("click",()=>{

        for (let i = 0; i < supervisor.items.length; i++) {
            optionsSup += `<option value="${supervisor.items[i].id_sup}">${supervisor.items[i].nom_sup}</option>`
        }

        formAccount.innerHTML = `<div class="cards">
                <form method="POST" action="./includes/account/create-asesor/create-asesor.php">
                    <div>
                        <img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom">
                        <div>
                            <h2>Crear Asesor</h2>
                            <p>Nombre de asesor: <br>
                            <input type="text" name="username"></p>
                            <p>Supervisor: <br>
                            <select name="sup" id="sup">
                                
                            </select></p>
                            <p class="center"><input type="submit" value="Crear"></p>
                        </div>
                    </div>
                </form>
            </div>`

            sup =document.getElementById('sup')

            sup.innerHTML = optionsSup
    })

})

delet.addEventListener("click",()=>{
    formAccount.innerHTML = `<div class="button-container">
            <div class="button">
                <div class="icon" id="delete-supervisor"><ion-icon name="eye-outline"></ion-icon></div>
                <h2>Eliminar supervisor</h2>
            </div>
            <div class="button">
                <div class="icon" id="delete-asesor"><ion-icon name="call-outline"></ion-icon></div>
                <h2>Eliminar asesor</h2>
            </div>
        </div>`
    
    deletSupervisor = document.getElementById('delete-supervisor')
    deletAsesor = document.getElementById('delete-asesor')

    deletSupervisor.addEventListener("click",()=>{

        for (let i = 0; i < supervisor.items.length; i++) {
            optionsSup += `<option value="${supervisor.items[i].id_sup}">${supervisor.items[i].nom_sup}</option>`
        }

        formAccount.innerHTML = `<div class="cards">
                <form method="POST" action="./includes/account/delete-sup/delete-sup.php">
                    <div>
                        <img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom">
                        <div>
                            <h2>Eliminar Supervisor</h2>
                            <p>Supervisor: <br>
                            <select name="sup" id="sup">
                                
                            </select></p>
                            <p>NUevo supervisor: <br>
                            <select name="new-sup" id="new-sup">
                                
                            </select></p>
                            <p class="center"><input type="submit" value="Eliminar"></p>
                        </div>
                    </div>
                </form>
            </div>`

            sup = document.getElementById('sup')
            newSup = document.getElementById('new-sup')

            sup.innerHTML = optionsSup
            newSup.innerHTML = optionsSup
    })

    deletAsesor.addEventListener("click",()=>{
        for (let i = 0; i < supervisor.items.length; i++) {
            optionsSup += `<option value="${supervisor.items[i].id_sup}">${supervisor.items[i].nom_sup}</option>`
        }

        formAccount.innerHTML = `<div class="cards">
                <form method="POST">
                    <div>
                        <img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom">
                        <div>
                            <h2>Eliminar Asesor</h2>
                            <p>Supervisor: <br>
                            <select name="sup" id="sup">
                                
                            </select></p>
                            <p class="center"><input type="submit" value="buscar asesores"></p>
                        </div>
                    </div>
                </form>
            </div>`

            sup = document.getElementById('sup')
            sup.innerHTML = optionsSup
    })
})
