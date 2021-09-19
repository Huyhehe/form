var arr = new Array();

function popUpOff() {
  document.getElementById("alert").style.display = "none";
  document.getElementById("form-holder").style.filter = "";
}
function popUpOn() {
  document.getElementById("alert").style.display = "block";
  document.getElementById("form-holder").style.filter = "blur(5px)";
}

function addName() {
  var nameSheet = document.getElementById("nameList");
  var p = document.createElement("pre");
  p.setAttribute("class", "info-box");
  var userName = document.getElementById("name").value;
  var userAge = document.getElementById("age").value;
  var check = 0;

  for (var i = 0; i < arr.length; i++) {
    if (userName.localeCompare(arr[i].Name) == 0) {
      check++;
      break;
    }
  }
  if (check == 0) {
    var user = {
      Name: userName,
      Age: userAge,
    };
    arr.push(user);
    var data = user.Name + "               " + user.Age + "<br>";
    p.innerHTML = data;
    nameSheet.appendChild(p);
  } else {
    popUpOn();
  }
  console.log(check);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
