var inputField = document.getElementById('todo-input-field');
var todoList = document.getElementById('todo-list');




function handleTODOCreation(msg) {
    var inputField = document.getElementById('todo-input-field');
    // TASKs:
    // 1.) Add card to the todo list on screen
    var toDoListContainer = document.getElementById('todo-list');
    var mainCard = document.createElement('div');
    mainCard.className = 'todo-item';
    mainCard.id = Math.floor(Math.random() * 100000);

    var messageContainer = document.createElement('div');
    messageContainer.className = 'horizontal-align todo-message-container';

    var message = document.createElement('h3');
    message.innerText = msg;
    message.className = 'todo-message'
    messageContainer.appendChild(message);

    var buttonWrapper = document.createElement('div');
    
    var editIcon = document.createElement('i');
    editIcon.className = 'far fa-edit';    
    buttonWrapper.appendChild(editIcon);
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    buttonWrapper.appendChild(deleteIcon);
    messageContainer.appendChild(buttonWrapper);

    mainCard.appendChild(messageContainer);
    toDoListContainer.appendChild(mainCard);
    // 2.) On successful addition empty the input box      
        inputField.value = "";
    // 3.) On delete click remove the TODO item
        deleteIcon.onclick = function() {
        var removeCard = document.getElementById(mainCard.id);
        removeCard.remove();
        }
}

inputField.onkeyup = function(e) {   
   var inputTextValue = inputField.value;
    if(e.key === 'Enter') {
        handleTODOCreation(inputTextValue);
    }
}
var btnAddTODO = document.getElementById('btn-add-todo');
btnAddTODO.onclick = function(e) {
    var inputTextValue = inputField.value;
    handleTODOCreation(inputTextValue);
}