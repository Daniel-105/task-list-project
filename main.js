window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    // Prevents the page to load on submit
    e.preventDefault();

    // if the input field is empty alert the user to input a value and stop everything
    if (!input.value) {
      alert("Please fill out a task!");
      return;
    }

    //creating a input element and attaching the value from input and adding the class "text"
    const inputField = document.createElement("input");
    inputField.value = input.value;
    inputField.type = "text";
    inputField.classList.add("text");

    // set the read-only attribute to the imput field
    inputField.setAttribute("readonly", "readonly");

    //creating the div.content and appending inputField
    const contentDiv = document.createElement("div");
    contentDiv.appendChild(inputField);
    contentDiv.classList.add("content");

    //creating the div.task and appending the contentDiv
    const taskDiv = document.createElement("div");
    taskDiv.appendChild(contentDiv);
    taskDiv.classList.add("task");

    //creating the edit button, setting the text and the class
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit");

    //creating the delete button, setting the text and the class
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");

    //create the div.actions and appending it to the taskDiv
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("actions");
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(deleteButton);
    taskDiv.appendChild(actionButtons);

    //apending the taskDiv to the div#tasks
    list_el.appendChild(taskDiv);

    input.value = "";

    // setting eventListener to the edit button
    editButton.addEventListener("click", () => {
      // if the innerText is Edit allow the user to change it and change the text of the button to "Save"
      // and if it don't set everything back
      if (editButton.innerText.toLowerCase() == "edit") {
        inputField.removeAttribute("readonly", "readonly");
        inputField.focus();
        editButton.innerText = "Save";
      } else {
        inputField.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
      }
    });

    // setting eventListener to the delete button
    //When  the user clicks the button, it will remove that field
    deleteButton.addEventListener("click", () => {
      list_el.removeChild(taskDiv);
    });
  });
});
