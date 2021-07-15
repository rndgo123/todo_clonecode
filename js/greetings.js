const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    // 1.submit 하는 브라우저의 기본 기능을 멈춘다.
    // 2. loginForm.classList에 HIDDEN_CLASSNAME를 추가한다.
    // 3. localStorage에 USERNAME_KEY를 추가한다.
    // 4. paintGreetings 함수를 불러와  innerText로 h1을 추가, HIDDEN_CLASSNAME을 제거한다.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}
  