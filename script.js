  function openForm() {
      document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
      document.getElementById("myForm").style.display = "none";
  }


  function f1() {
      var obj = document.getElementById("t1")
      var str = "WELCOME: " + obj.value;
      var obj2 = document.getElementById("p1");
      obj2.innerHTML = str;
  }