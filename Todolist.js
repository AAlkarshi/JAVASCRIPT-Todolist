// Selections des éléments
const addBtn = document.querySelector('#btnAddTask');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");
const delBtn = document.querySelector(".delBtn");
const btnAddTask = document.querySelector('#btnAddTask');
const CarteCompteur = document.querySelector('#CompteurCard');


// Ajout écouteur d'évènement sur le BTN pour appeler une fonction ajout 
addBtn.addEventListener(`click` , addTask);

//FONCTION AJOUT
function addTask(){
	//Clone la card crée en HTML
	const newTask = taskCard.cloneNode(true)
	const newDelBtn = newTask.querySelector('.delBtn')
	const newTextArea = newTask.querySelector('.task')
	
	//Ajout du texte dans Clone
	newTextArea.value = "New Task"

	//EVENEMENT CLICK SUPPRIMER CLONE
	newDelBtn.addEventListener('click',function(){
		deleteTask(newTask);
		deincrementCompteur();
	});

	//Ajout de la carte dans le DOM
	tasksContainer.appendChild(newTask)
}


//FONCTION SUPPRESSION
function deleteTask(task){
	task.remove();
}



let Compteur = 1;

function incrementCompteur() {
	const btnAddTask = document.querySelector('#btnAddTask')
    Compteur++; 
    CarteCompteur.textContent = Compteur; 
}

function deincrementCompteur() {
	const delBtn = document.querySelector('.delBtn')
    Compteur--; 
    CarteCompteur.textContent = Compteur; 
}

btnAddTask.addEventListener('click', incrementCompteur);




