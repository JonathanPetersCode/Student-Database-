var message = " "; 
var student;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}


for (var i = 0; i < students.length; i += 1){
  student = students[i];
  message += "<h2>Student: " + student.name + "</h2>";
  message += "<h2>Track: " + student.track + "</h2>";
  message += "<h2>Achievements: " + student.achievements + "</h2>";
  message += "<h2>Points: " + student.points + "</h2>";
}

print(message);
