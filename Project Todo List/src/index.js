import "./style.css";

const inputDiv = document.getElementById("input-div");
const todoDiv = document.getElementById("todo-Div");

const todoArr = [];
let todoIndex = 0;

function openTodoInput() {
    inputDiv.innerHTML =    `<p>Add Todo</p>
                                <label for = "titleInp">Title:</label>
                                <input id = "titleInp"></input>

                                <label for = "descInp">Description:</label>
                                <input id = "descInp"></input>

                                <label for = "dateInp">Due Date:</label>
                                <input type = date id = "dateInp"></input>

                                <label for = "priorityInp">Priority</label>
                                <select name = "priorityInp" id = "priorityInp">
                                    <option>No Priority</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                                <button id = "addTodoBtn">Add Todo</button>`
};

class getValuesFromInput {
    constructor(title, description, date, priority, index){
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority
        this.index = index
    }
};

function addToArr(){
    const addTodoBtn = document.getElementById("addTodoBtn");

    addTodoBtn.addEventListener("click", () => {
        const todo = new getValuesFromInput(titleInp.value, descInp.value, dateInp.value, priorityInp.value, todoIndex++);
        todoArr.push(todo);
        console.log(todoArr);
    })
};

function addToDOM(){
    const addTodoBtn = document.getElementById("addTodoBtn");

    addTodoBtn.addEventListener("click", () => {
        todoDiv.innerHTML = "";
        todoArr.forEach(({title, description, date, priority, index}) => {
            todoDiv.innerHTML +=     `<div id = "${index}">
                                        <p>Title: ${title}</p>
                                        <p>Description: ${description}</p>
                                        <p>Due-Date: ${date}</p>
                                        <p>Priority: ${priority}</p>
                                        <button onclick = "deleteTask(this)">Delete Todo</button>
                                    </div>`
        });
        inputDiv.innerHTML = "";
    });
};

const deleteTask = (buttonEl) => {
    const dataArrIndex = todoArr.findIndex(
      (item) => item.index === buttonEl.parentElement.id
    );
  
    buttonEl.parentElement.remove();
    todoArr.splice(dataArrIndex, 1);
};



function addTodoToDOM(e) {
    e.preventDefault();
    
    openTodoInput();
    addToArr();
    addToDOM();
};

const todoBtn = document.getElementById("todoBtn");
todoBtn.addEventListener("click", addTodoToDOM);
