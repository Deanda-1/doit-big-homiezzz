// const loginFormHandler = async (event) => {
//   event.preventDefault();

// //   // Collect values from the login form
// //   const email = document.querySelector('#email-login').value.trim();
// //   const password = document.querySelector('#password-login').value.trim();

// //   if (email && password) {
// //     // Send a POST request to the API endpoint
// //     const response = await fetch('/api/users/login', {
// //       method: 'POST',
// //       body: JSON.stringify({ email, password }),
// //       headers: { 'Content-Type': 'application/json' },
// //     });

// //     if (response.ok) {
// //       // If successful, redirect the browser to the profile page
// //       document.location.replace('/profile');
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  alert("Fired Handler!!!");
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  console.log(name ,email,password);

  if (name && email && password) {
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


// document.querySelector('.login-form');
// document.addEventListener('submit', loginFormHandler);


document.querySelector('#signup-form');
document.addEventListener('#signupBtn', signupFormHandler);

