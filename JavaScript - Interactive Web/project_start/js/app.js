//Problem:  User interaction does not provide desired results
//Solution:  Add interactivity so the user can manage daily tasks


//  The DOM is an API that allows access to and modification of the current document.

//  3 Types of Actions we can do to the DOM:

//  1.  Manipulation - Manipulate elements
//  2.  Traversal - Selecting an element based on the relationship with another element
//  3.  Events - Listening to a specific event, like a mouse click or a key press, and
//      having something execute

//  4 P's of Problem Solving:
//  1.  Prepare   2.  Plan   3.  Perform   4.  Perfect our solution

//Planning:

//VARIABLES to hold ELEMENTS

//  document.getElementById()
//  document.getElementsByTagName()
//  document.createElement()

var taskInput = document.getElementById("new-task");  //New Task  -- TEXT INPUT ELEMENT
var addButton = document.getElementsByTagName("button")[0];  //ADD Button -- returns a collection of elements - include array index
var incompleteTaskHolder = document.getElementById("incomplete-tasks");   //UNORDERED LIST with id = incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks");    //COMPLETED TASKS LIST

//New Task List Item
var createNewTaskElement = function(taskString) {

    //Create List Item
    var listItem = document.createElement("li");            // .createElement  CREATE a List Item

    //input (checkbox)
    var checkBox = document.createElement("input");         //checkbox
    //label
    var label = document.createElement("label");            //label
    //input (text)
    var editInput = document.createElement("input");        //input  -- text
    //button for Edit
    var editButton = document.createElement("button");      //button
    //button for Delete
    var deleteButton = document.createElement("button")     //button

    //each of these elements will need to be modified

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Ass";           //  .innerText -- add text inside an element (in this case a button)
    editButton.className = "edit";

    deleteButton.innerText = "Barf";
    deleteButton.className = "delete";      //  .innerText -- add text inside an element (in this case a button)

    label.innerText = taskString;

    //each of these elements will need to be appended to listItem
    listItem.appendChild(checkBox);                         //appendChild to listItem
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);


return listItem;
}

//ADD a new Task  ********************                   EVENT OCCURS ON ELEMENT -- Press ADD button

var addTask = function () {                             //Compartmentalize code into functions

    console.log("XXX:  addTask function CALLED");
//When button is pressed want to create a Task
//Create a new list item with the text from #new-task:

    var listItem = createNewTaskElement(taskInput.value);            // .value -- value associated with taskInput var

//Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);                      //Append -- .appendChild
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";          // Clear text box with blank string:

}

//EDIT an existing Task *********************          EVENT OCCURS ON ELEMENT -- Press EDIT button
var editTask = function () {

    console.log("XXX:  EditTask function CALLED");

    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text");
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");    // .classList
                                                                    //  .contains

    //if the class of the parent is .editmode
    if(containsClass) {

        label.innerText = editInput.value;          // editInput -- change the 'value' string variable
        //Switch from .editMode
        //Label text become the input's value
    }else{

        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
    }

    //Toggle .editMode on the listItem
    listItem.classList.toggle("editMode");          // .toggle -- turn on and off the edit Mode by clicking "Edit"


}

//DELETE an existing Task  *********************         EVENT OCCURS ON ELEMENT -- Press DELETE button

var deleteTask = function () {

    console.log("XXX:  deleteTask function CALLED");
    //When Delete is pressed want:

    //Remove the parent list from the ul
    var listItem = this.parentNode;                  //.parentNode  --  get to parent of particular element
    var ul = listItem.parentNode;

    ul.removeChild(listItem);                        //.removeChild -- remove child (listItem) from parent element (ul)
                                                     //.removeChild Method
}

//MARK a Task as COMPLETE  *********************         EVENT OCCURS ON ELEMENT -- Change check element

var taskCompleted = function () {

    console.log("XXX:  taskCompleted function CALLED");

    //Append the list item to the #completed-tasks

//    element we are on is the check box.  It will have a parent node, because it is a node in the DOM
//    Parent node is the list item and we want to append the list item which is the parent of this checkbox
//    to the completed tasks folder, so we can put list item.

    var listItem = this.parentNode;                     //  .parentNode  --  get to parent of particular element
    completedTaskHolder.appendChild(listItem);          //  .appendChild  --  ADD a CHILD to parent element
                                                        //  completedTaskHolder (PARENT), listItem (CHILD)
                                                        //  both completedTaskHolder and listItem are document variables

    bindTaskEvents(listItem, taskIncomplete);

}

//MARK a Task as INCOMPLETE  *********************       EVENT OCCURS ON ELEMENT -- Change check element
var taskIncomplete = function () {

    console.log("XXX:  taskIncomplete function CALLED");

    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;                     //  .parentNode  --  get to parent of particular element
    incompleteTaskHolder.appendChild(listItem);         //  .appendChild  --  ADD a CHILD to parent element

    bindTaskEvents(listItem, taskCompleted);


}
//CODE WIRING HERE:   *********************

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {

    console.log("Bind relevant List Items collected with loop + Events/FUNCTIONS (click box or push button ... }");

    //Create variables for each element to bind:  Checkbox + Edit Button + Delete Button

    //  .querySelector:

    var checkBox = taskListItem.querySelector("input[type=checkbox]");  //Checkbox assigned to variable
    var editButton = taskListItem.querySelector("button.edit");         //edit button assigned to variable
    var deleteButton = taskListItem.querySelector("button.delete");     //delete button assigned to variable


    //for each list item (element of interest - above variable)  --  bind events to list item's children:

                    //  .onchange:
                    //  .onclick:

    //bind editTask FUNCTION to edit button:  when Edit button pushed - editTask function CALLED
    editButton.onclick = editTask;

    //bind deleteTask FUNCTION to delete button:  when Delete button pushed - deleteTask function CALLED
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler (taskCompleted or taskIncomplete FUNCTION) to the checkbox
    checkBox.onchange = checkBoxEventHandler; //when checkbox clicked taskCompleted of taskIncomplete function CALLED

}

var ajaxRequest = function () {
    console.log("XXX: AJAX Request -- TEST for .addEventListener")
}

//set the click handler to the addTask function
//EVENT HANDLER:  Click Handler             (.onclick)

//addButton.onclick = addTask;  //DO NOT use addTask() because it will call the function without clicking button

addButton.addEventListener("click", addTask);    // .addEventListener -- More powerful way to do the above line
addButton.addEventListener("click", ajaxRequest);  //Two event handlers/listeners can work together... when clicking


//LOOP through incompleteTaskHolder ul list items (CHILDREN):
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {

    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);  //PASS taskCompleted function
}

//for each list item
    //select it's children
    //bind events to list item's children (taskCompleted)

//LOOP through completeTaskHolder ul list items (CHILDREN)

for (var i = 0; i < completedTaskHolder.children.length; i++) {

    bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);  //PASS taskIncomplete function
}

