const toDoForm = document.querySelector("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  // toDoInput의 값은 새로운 변수에 복사하되, Enter를 누르면 input안의 텍스트가 사라지게 하기.
  const newToDo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
