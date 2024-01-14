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
  list.innerHTML = "";
  for (let i of arr) {
    let p = document.createElement("p");
    p.textContent =
      "username: " + i.username + "; " + "password: " + i.password + ";";
    p.id = i.id;
    list.append(p);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push({ id: Date.now(), username: name.value, password: password.value });
  name.value = "";
  password.value = "";
  render();
});
console.log(arr);
