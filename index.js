/** This is a comment.

    Here's where you can write Javascript code to run in your website.

    Below we have an example of a simple function that changes the background color of the page
*/

function changeBackgroundColor() {
  const newBackgroundColor = window.prompt(
    "What color would you like the background to be? (e.g. red, blue, green, #ff0000, etc.)"
  );
  document.body.style.backgroundColor = newBackgroundColor;
}

/**
 * This is a simple function that changes the color of all text elements on the page
 */
function changeTextColor() {
  const newTextColor = window.prompt(
    "What color would you like the text to be? (e.g. red, blue, green, #ff0000, etc.)"
  );

  const pElements = document.getElementsByTagName("p");
  const h1Elements = document.getElementsByTagName("h1");
  const liElements = document.getElementsByTagName("li");

  console.log("P elements", pElements);

  for (element of pElements) {
    element.style.color = newTextColor;
  }

  for (element of h1Elements) {
    element.style.color = newTextColor;
  }

  for (element of liElements) {
    element.style.color = newTextColor;
  }
}

/**
 * This is a simple function that adds a new list item to the page
 */
function addTask() {
  const newItem = window.prompt("What would you like to add to the list?");
  const taskList = document.getElementById("tasks");
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(newItem));
  taskList.appendChild(listItem);
}
