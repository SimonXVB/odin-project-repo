/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUEwQztBQUNwRSxtREFBbUQsTUFBTTtBQUN6RCxvREFBb0QsTUFBTTtBQUMxRCwwREFBMEQsWUFBWTtBQUN0RSx1REFBdUQsS0FBSztBQUM1RCx1REFBdUQsU0FBUztBQUNoRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kaXZcIik7XHJcbmNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tRGl2XCIpO1xyXG5cclxuY29uc3QgdG9kb0FyciA9IFtdO1xyXG5sZXQgdG9kb0luZGV4ID0gMDtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Ub2RvSW5wdXQoKSB7XHJcbiAgICBpbnB1dERpdi5pbm5lckhUTUwgPSAgICBgPHA+QWRkIFRvZG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwidGl0bGVJbnBcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZCA9IFwidGl0bGVJbnBcIj48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yID0gXCJkZXNjSW5wXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQgPSBcImRlc2NJbnBcIj48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yID0gXCJkYXRlSW5wXCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IGRhdGUgaWQgPSBcImRhdGVJbnBcIj48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yID0gXCJwcmlvcml0eUlucFwiPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWUgPSBcInByaW9yaXR5SW5wXCIgaWQgPSBcInByaW9yaXR5SW5wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Tm8gUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkVG9kb0J0blwiPkFkZCBUb2RvPC9idXR0b24+YFxyXG59O1xyXG5cclxuY2xhc3MgZ2V0VmFsdWVzRnJvbUlucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGluZGV4KXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRUb0Fycigpe1xyXG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb0J0blwiKTtcclxuXHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBnZXRWYWx1ZXNGcm9tSW5wdXQodGl0bGVJbnAudmFsdWUsIGRlc2NJbnAudmFsdWUsIGRhdGVJbnAudmFsdWUsIHByaW9yaXR5SW5wLnZhbHVlLCB0b2RvSW5kZXgrKyk7XHJcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRvZG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnIpO1xyXG4gICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvRE9NKCl7XHJcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvQnRuXCIpO1xyXG5cclxuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0b2RvRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdG9kb0Fyci5mb3JFYWNoKCh7dGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9EaXYuaW5uZXJIVE1MICs9ICAgICBgPGRpdiBpZCA9IFwiJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRpdGxlOiAke3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1ZS1EYXRlOiAke2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrID0gXCJkZWxldGVUYXNrKHRoaXMpXCI+RGVsZXRlIFRvZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlucHV0RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoYnV0dG9uRWwpID0+IHtcclxuICAgIGNvbnN0IGRhdGFBcnJJbmRleCA9IHRvZG9BcnIuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pbmRleCA9PT0gYnV0dG9uRWwucGFyZW50RWxlbWVudC5pZFxyXG4gICAgKTtcclxuICBcclxuICAgIGJ1dHRvbkVsLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0b2RvQXJyLnNwbGljZShkYXRhQXJySW5kZXgsIDEpO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvVG9ET00oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBvcGVuVG9kb0lucHV0KCk7XHJcbiAgICBhZGRUb0FycigpO1xyXG4gICAgYWRkVG9ET00oKTtcclxufTtcclxuXHJcbmNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9CdG5cIik7XHJcbnRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG9Ub0RPTSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==