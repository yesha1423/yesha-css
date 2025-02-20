document.addEventListener("DOMContentLoaded", function () {
    const authButton = document.getElementById("authButton");
  
    function checkAuthStatus() {
      const isAuthenticated = localStorage.getItem("authenticated");
      if (isAuthenticated) {
        authButton.textContent = "Sign out";
        authButton.style.backgroundColor = "#555"; 
      } else {
        authButton.textContent = "Sign in";
        authButton.style.backgroundColor = "#dc030f"; 
      }
    }
  
    authButton.addEventListener("click", function () {
      const isAuthenticated = localStorage.getItem("authenticated");
  
      if (isAuthenticated) {

        localStorage.removeItem("authenticated");
        alert("You have been signed out.");
      } else {
        const username = prompt("Enter username:");
        const password = prompt("Enter password:");
  
        if (username === "admin" && password === "password123") {
          localStorage.setItem("authenticated", "true");
          alert("Sign-in successful!");
        } else {
          alert("Invalid credentials! Try again.");
        }
      }
  
      checkAuthStatus();
    });
  
    checkAuthStatus(); 
  });
  