const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const parentDiv = document.getElementById("parent");
const input = document.getElementById("input");
const select = document.getElementById("select");
const headingText = document.getElementById("headingText");

select.addEventListener("change", () => {
  if (select.value === "stack") {
    headingText.innerHTML = "Stack";
  } else if (select.value === "queue") {
    headingText.innerHTML = "Queue";
  } else {
    headingText.innerHTML = "";
  }
});

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a value");
  } else {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = input.value;
    newDiv.classList.add("innerDiv");
    if (select.value === "stack") {
      parentDiv.appendChild(newDiv);
    } else if (select.value === "queue") {
      parentDiv.insertBefore(newDiv, parentDiv.firstChild);
    } else {
      alert("Please select an option");
    }
    input.value = "";
  }
});

removeBtn.addEventListener("click", () => {
  if (select.value === "queue") {
    parentDiv.removeChild(parentDiv.firstElementChild);
  } else if (select.value === "stack") {
    parentDiv.removeChild(parentDiv.lastElementChild);
  } else {
    alert("Please select an option");
  }
});
