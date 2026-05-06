const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("message");

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("login-message");

const profile_user = document.getElementById("username");
const profile_email = document.getElementById("email");
const profile_role = document.getElementById("role");
const logoutBtn = document.getElementById("logout");

if (profile_user && profile_email && profile_role) {
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/current-user",
        {
          method: "GET",
          credentials: "include",
        },
      );

      const data = await response.json();

      if (!data.success) {
        // redirect to login page
        window.location.href = "index.html";
      } else {
        const profilData = data.data;

        profile_user.innerText = "Username: " + profilData.username;
        profile_email.innerText = "email: " + profilData.email;
        profile_role.innerText = "Role: " + profilData.role;
      }
    } catch (error) {
      console.log(error);
      window.location.href = "index.html";
    }
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);

    const inputData = {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    console.log(inputData);

    const response = await fetch(
      "https://api.freeapi.app/api/v1/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      },
    );

    const data = await response.json();
    console.log(data);

    if (!data.success) {
      registerMessage.innerText = "User already exist";
    } else {
      registerMessage.innerText = "User registration successfull ";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);

    const loginData = {
      password: formData.get("password"),
      username: formData.get("username"),
    };

    console.log(loginData);

    const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),  
      credentials: "include",
     
    });

    const data = await response.json();
    console.log(data);

    if (!data.success) {
      loginMessage.innerText = data.message;
    } else {
      loginMessage.innerText = data.message;

      setTimeout(() => {
        window.location.href = "profile.html";
      }, 2000);
    }
  });
}
