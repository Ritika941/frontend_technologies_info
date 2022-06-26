function myFunction() {
    let msg = prompt("Please enter a message", "");
    if (msg != null) {
        //alert(msg);
      document.getElementById("demo").innerHTML =msg;
    }
  }