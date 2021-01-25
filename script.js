
//selectors
let addButton=document.getElementById('addButton');
let toDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('text');
//event listeners 
addButton.addEventListener('click',addTodo);
toDoContainer.addEventListener('click',deleteCheck);


//functions 
function addTodo(event,title){
    event.preventDefault();
    //create the to do 
    let toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    const newToDo =document.createElement('p');
    newToDo.innerHTML=inputField.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    toDoContainer.appendChild(toDoDiv);
    //check mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML="success";
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    //check delete button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML="delete";
    trashButton.classList.add("delete-btn");
    toDoDiv.appendChild(trashButton);
    //append todo 
    toDoContainer.appendChild(toDoDiv);
    inputField.value= "";
    
}
function deleteCheck(e){
    const item = e.target;
    // delete todo 
    if(item.classList[0]==='delete-btn'){
        const todo =item.parentElement;
        todo.remove();
    }
    // check mark 
    if(item.classList[0]==='complete-btn'){
        const todo =item.parentElement;
        todo.classList.toggle("completed");
    }
}







