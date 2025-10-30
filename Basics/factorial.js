function calculateFactorial() {
  var n = document.getElementById("num").value;
  var fact = 1;

  if (n < 0) {
    document.getElementById("result").innerHTML =
      "Factorial not defined for negative numbers";
    return;
  }

  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }

  document.getElementById("result").innerHTML =
    "Factorial of " + n + " is " + fact;
}
