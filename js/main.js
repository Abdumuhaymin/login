document.querySelector("#text").addEventListener("focusout", myText);
document.querySelector("#password").addEventListener("focusout", myPass);
document.querySelector("#btn").addEventListener("click", function () {
  myText();
  myPass();
});
let name = document.querySelector("#text");
let password = document.querySelector("#password");
let item = document.querySelectorAll(".item");
let btn = document.querySelector("#btn");
function myText() {
  let message, text;
  let errElement = document.getElementById("text");
  message = document.getElementById("err");
  text = document.getElementById("text").value;

  try {
    if (text == "") {
      errElement.classList.add("err");
      throw "bo'sh";
    }
    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";
    }
  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
}
function myPass() {
  let message, pass;
  let errElement = document.getElementById("password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err2");
      throw "bo'sh";
    }
    if (pass.length > 0) {
      errElement.classList.remove("err2");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Qiymat " + e;
  }
}
let arr = [];
let form = document.querySelector(".login");
let list = document.querySelector(".list");
const render = () => {
  list.innerHTML = arr
    .map(
      (item) =>
        `
  <div>
    <p>Username:${item.username}</p>
    <button onclick="deleteItem(${item.id})">DELETE</button>
    <button onclick="editItem(${item.id})">EDIT</button>
  </div>
  `
    )
    .join("");
};
// let button = document.querySelector(".click");
// button.addEventListener("click", () => {});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push({ id: Date.now(), username: name.value });
  name.value = "";
  password.value = "";
  render();
});
const deleteItem = (id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr.splice(i, 1);
    }
    render();
  }
};
const editItem = (id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr[i].username = prompt("yangi nom kiriting");
    }
    render();
  }
};
// console.log(arr);
