var pass = prompt("Enter the Password:", "");
if (pass == null) window.location = "https://www.gonibablo.ml/dolg";
else if (pass.toLowerCase() == "1985")
  window.location = "./dolg/index.html";
else window.location = "index.html";