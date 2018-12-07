function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    window.location.href="event.html";
}

function confirmSubmit(){
  var fullname = document.getElementById("firstname");
  alert("Thanks " + firstname.value + " for joining ISUD XII World Congress!");
}