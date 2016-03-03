

//  document.getElementByID()
//  document.getElementsByTagName()[]  --  access the Element stored in the array []
//  document.createElement()

//  Object(like a button).addEventListener("click", function);  --  supports multiple HANDLERS

//  Object.querySelector("input[type=checkbox]"); -- Returns first element that is descendant of element
//  Object.querySelector("button.edit");
//  Object.querySelector("button.delete");

//  Object.onclick
//  Object.onchange

//  Object.appendChild()
//  Object.removeChild();

//  Object.parentNode()

//  Object.type = "checkbox"
//  Object.innerText = "stuff"
//  Object.className = "stuff"

//  Object.classList.contains("editMode");
//  Object.classList.toggle("editMode");


var taskInput = document.getElementById("new-task");                        //id = "new-task"
var addButton = document.getElementsByTagName("button")[0];                 //<button> = first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");    //id = "incomplete-tasks"
var completedTasksHolder= document.getElementById("completed-tasks");       //id = "completed-tasks"

//Function:  CREATE New Task List Item  -- 'TODO' ITEM  --  FUNCTION

      var createNewTaskElement = function(taskString) {     // FUNCTION to CREATE 'TODO' item

      var listItem = document.createElement("li");          // CREATE: List Element
      var checkBox = document.createElement("input");       // CREATE:  Input Element --> Checkbox
      var label = document.createElement("label");          // CREATE:  Label -- Name of New Task
      var editInput = document.createElement("input");      // CREATE:  Input Element --> Text Input
      var editButton = document.createElement("button");    // CREATE:  Button  --> Edit
      var deleteButton = document.createElement("button");  // CREATE:  Button  --> Delete
  
    //MODIFY:  Each element needs modifying
  
      checkBox.type = "checkbox";               // Modifying INPUT to Checkbox TYPE
      editInput.type = "text";                  // Modifying INPUT to Text TYPE

      editButton.innerText = "Edit";            // Add Inner Text to editButton
      editButton.className = "edit";            // Add Class Name to editButton

      deleteButton.innerText = "Delete";        // Add Inner Text to deleteButton
      deleteButton.className = "delete";        // Add Class Name to deleteButton
  
      label.innerText = taskString;             // Add NAME of NEW TASK  --  ATTRIBUTE
  
    //APPENDING:  Each element needs appending

      listItem.appendChild(checkBox);           // APPEND Checkbox to listItem
      listItem.appendChild(label);              // APPEND Label to listItem
      listItem.appendChild(editInput);          // APPEND Text Input to listItem
      listItem.appendChild(editButton);         // APPEND Edit Button to listItem
      listItem.appendChild(deleteButton);       // APPEND Delete Button to listItem

    //RETURN:
      return listItem;
}

// Function:  ADD A NEW TASK -- Triggered when BUTTON PRESSED -- Event Handler ****************************

    var addTask = function() {
      console.log("Add task...  EVENT HANDLER");

      //Create a new list item with the text from #new-task:
      var listItem = createNewTaskElement(taskInput.value);

      //Append listItem to incompleteTasksHolder
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);

      taskInput.value = "";
    }

// Function:  EDIT AND EXISTING TASK -- Triggered when BUTTON PRESSED -- Event Handler ********************

    var editTask = function() {
      console.log("Edit task...  EVENT HANDLER");

      var listItem = this.parentNode;

      var editInput = listItem.querySelector("input[type=text");
      var label = listItem.querySelector("label");

      var containsClass = listItem.classList.contains("editMode");

      //if the class of the parent is .editMode
      if(containsClass) {
        //Switch from .editMode
        //label text become the input's value
        label.innerText = editInput.value;
      } else {
        //Switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
      }

      //Toggle .editMode on the list item -- .editmode TO .editMode
      listItem.classList.toggle("editMode");

    }

// Function:  DELETE AN EXISTING TASK -- Triggered when BUTTON PRESSED -- Event Handler *********************
    var deleteTask = function() {
      console.log("Delete task...  EVENT HANDLER");
      var listItem = this.parentNode;
      var ul = listItem.parentNode;

      //Remove the parent list item from the ul
      ul.removeChild(listItem);
    }

// Function:  MARK TASK AS COMPLETE -- Triggered when CHECKBOX CLICKED -- Event Handler *********************

var taskCompleted = function() {
      console.log("Task complete...  EVENT HANDLER");

      //Append the task list item to the #completed-tasks
      var listItem = this.parentNode;
      completedTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskIncomplete);
    }

// Function:  MARK TASK AS INCOMPLETE -- Triggered when CHECKBOX CLICKED -- Event Handler *********************

    var taskIncomplete = function() {
      console.log("Task incomplete...  EVENT HANDLER");

      //Append the task list item to the #incomplete-tasks
      var listItem = this.parentNode;
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    }


// Function:  TEST FUNCTION -- AJAX REQUEST
var ajaxRequest = function() {
  console.log("AJAX request  --  Add Button Clicked on...");
}

//  EVENT HANDLER -- EVENT LISTENER -- ATTACH TO BUTTON  **********************************
//Set the click handler to the addTask function
//Attaching Event Handler to addButton - 'click' + addTask Function

//  .addEventListener() Method supports multiple EVENT LISTENERS:
addButton.addEventListener("click", addTask);               // FUNCTION bound to Add Button
addButton.addEventListener("click", ajaxRequest);           // FUNCTION bound to Add Button



//  BIND TASK EVENTS

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");

    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //BIND:
    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}



//  cycle over incompleteTasksHolder ul list items
//  For each list item want to select its children and bind the editTask to edit button
//  Bind deleteTask to Delete Button
//  Bind taskCompleted to checkbox

for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//  cycle over completedTasksHolder ul list items
//  For each list item want to select its children and bind the editTask to edit button
//  Bind deleteTask to Delete Button
//  Bind taskCompleted to checkbox

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

































