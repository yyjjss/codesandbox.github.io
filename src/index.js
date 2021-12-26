const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const nowClock = document.querySelector("div#clock");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  setInterval(nowDate, 1000);
}

function paintGreetings(username) {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function nowDate() {
  const date = new Date();
  nowClock.innerText = `${String(date.getHours()).padStart(2, "0")} : ${String(
    date.getMinutes()
  ).padStart(2, "0")} : ${date.getSeconds()}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  setInterval(nowDate, 1000);
}
