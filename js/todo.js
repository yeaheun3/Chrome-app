const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  /* 어떤 것이 클릭되었는지 알아보기 -> 어떤 것을 삭제하고 싶은지 정하기 위해
  console.dir(event.target.parentElement.innerText); */
  const li = event.target.parentElement;
  li.remove();
  f;
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;

  const button = document.createElement("button");
  button.innerText = "ⅹ";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // toDoInput의 값은 새로운 변수에 복사하되, Enter를 누르면 input안의 텍스트가 사라지게 하기.
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
