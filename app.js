var arr = [];

function checkValid(userName, userAge) {
  userName = String(userName);
  if (userName.length == 0) {
    return false;
  }
  if (userAge.length == 0) {
    return false;
  }
  return true;
}
function checkExist(userName, userAge) {
  for (let i = 0; i < arr.length; i++) {
    if (userName == arr[i].name && userAge == arr[i].age) {
      return false;
    }
  }
  return true;
}

function add(e) {
  e.preventDefault();
  userName = document.getElementById("name").value;
  userAge = document.getElementById("age").value;

  if (checkValid(userName, userAge) && checkExist(userName, userAge)) {
    document.getElementById(
      "user-list"
    ).innerHTML += `<li><pre>${userName}         ${userAge}</pre></li>`;
    document.getElementById("del-btn").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    var user = {
      name: userName,
      age: userAge,
    };
    arr.push(user);
  } else {
    document.getElementById("popUp").style.display = "block";
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

document.getElementById("popUp").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("popUp").style.display = "none";
};
