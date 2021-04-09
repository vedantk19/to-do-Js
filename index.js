var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.querySelector("li");

function firstHelp() {
  var helpText = document.getElementsByClassName("helpText");
  var first = document.createElement("p");
  first.setAttribute("id", "first");
  first.appendChild(
    document.createTextNode(
      "Enter text into the input field to add items to your list."
    )
  );
  helpText[0].appendChild(first);
  first.classList.add("w3-container w3-center w3-animate-opacity");
}

function secondHelp() {
  var helpText = document.getElementsByClassName("helpText");
  var second = document.createElement("p");
  second.setAttribute("id", "second");
  second.appendChild(
    document.createTextNode("Click the item to mark it as complete.")
  );
  helpText[0].appendChild(second);
  second.classList.add("w3-container w3-center w3-animate-opacity");
}

function thirdHelp() {
  var helpText = document.getElementsByClassName("helpText");
  var third = document.createElement("p");
  third.setAttribute("id", "third");
  third.appendChild(
    document.createTextNode("Click the 'X' to remove the item from your list.")
  );
  helpText[0].appendChild(third);
  third.classList.add("w3-container w3-center w3-animate-opacity");
}

setTimeout(firstHelp, 150);
setTimeout(secondHelp, 250);
setTimeout(thirdHelp, 350);

var second = document.getElementById("second");
var third = document.getElementById("third");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function theList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  //add the delete feature
  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("X"));
  li.appendChild(delBtn);
  delBtn.addEventListener("click", deletelistItem);

  function deletelistItem() {
    li.classList.add("delete");
  }

  function doneItem() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", doneItem);
}

function listMain() {
  if (inputLength() > 0) {
    theList();
  }
}

enterButton.addEventListener("click", listMain);
