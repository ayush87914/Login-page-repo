function login() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");
      if (username === "Admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
      } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
      }
    }