const index_user_login = document.querySelector("#index_user_login");
const login_user_plus = document.querySelector("#login_user_plus");
const plus_user_login = document.querySelector("#plus_user_login");

const user_check = document.querySelector("#user_check");
const user_plus = document.querySelector("#user_plus");

const login_id = document.querySelector("#login_id");
const login_pwd = document.querySelector("#login_pwd");

const plus_id = document.querySelector("#plus_id");
const plus_pwd = document.querySelector("#plus_pwd");
const plus_repwd = document.querySelector("#plus_repwd");
const plus_nick = document.querySelector("#plus_nick");

const index = document.querySelector("#index");
const login = document.querySelector("#login");
const plus = document.querySelector('#plus');

const login_box = document.querySelector('#login_box');
const plus_box = document.querySelector('#plus_box');

index_user_login.onclick = () => {
    login.style.display = "block";
    index.style.display = "none";
    plus.style.display = "none";
}

login_user_plus.onclick = () => {
    plus.style.display = "block";
    login.style.display = "none";
    index.style.display = "none";
}

plus_user_login.onclick = () => {
    login.style.display = "block";
    plus.style.display = "none";
    index.style.display = "none";
}

user_check.onclick = () => {
    if (login_id.value.length == 0) {
        alert('아이디를 입력해 주세요');
        login_id.focus();
    } else if (login_pwd.value.length == 0) {
        alert('비밀번호를 입력해 주세요');
        login_pwd.focus();
    } else {
        login_box.submit();
    }

}

user_plus.onclick = () => {
    if (plus_id.value.length == 0) {
        alert('아이디를 입력해 주세요');
        plus_id.focus();
    } else if (plus_pwd.value.length == 0) {
        alert('비밀번호를 입력해 주세요');
        plus_pwd.focus();
    } else if (plus_repwd.value.length == 0) {
        alert('비밀번호확인을 입력해 주세요');
        plus_repwd.focus();
    } else if (plus_nick.value.length == 0){
        alert('별명를 입력해 주세요');
        plus_nick.focus();
    } else if (plus_pwd.value != plus_repwd.value) {
        alert('비밀번호가 일치하지 않습니다')
        plus_repwd.focus();
    } else {
        plus_box.submit();
    }

}