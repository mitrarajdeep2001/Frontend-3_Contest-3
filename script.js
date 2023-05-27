// function for signup
(function () {
    document.getElementById("signup-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
        localStorage.setItem("email", email);
        localStorage.setItem("fullname", fullName);
        localStorage.setItem("password", confirmPassword);
        document.querySelector(".signed-in-sub-container").innerHTML = `<div>
           <span>Full Name: ${localStorage.getItem("fullname")}</span>
       </div>
       <div>
           <span>Email: ${localStorage.getItem("email")}</span>
       </div>
       <div>
           <span>Password: ${localStorage.getItem("password")}</span>
       </div>`;
        document.querySelector("form").style.display = "none";
        document.querySelector(".signed-in-container").style.display = "block";
        localStorage.setItem("appState", "signin");
  });
})();

// Function for logout
(function () {
  document.getElementById("logout-btn").addEventListener("click", function () {
    document.querySelector("form").style.display = "block";
    document.querySelector(".signed-in-container").style.display = "none";
    localStorage.setItem("appState", "signout");
  });
})();

// Function for storing the data
(function () {
  if (localStorage.getItem("appState") === "signin") {
    document.querySelector(".signed-in-sub-container").innerHTML = `<div>
            <span>Full Name: ${localStorage.getItem("fullname")}</span>
        </div>
        <div>
            <span>Email: ${localStorage.getItem("email")}</span>
        </div>
        <div>
            <span>Password: ${localStorage.getItem("password")}</span>
        </div>`;
    document.querySelector("form").style.display = "none";
    document.querySelector(".signed-in-container").style.display = "block";
  } else {
    document.querySelector("form").style.display = "block";
    document.querySelector(".signed-in-container").style.display = "none";
  }
})();
