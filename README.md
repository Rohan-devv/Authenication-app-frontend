# Authentication App Frontend

A clean, responsive authentication-based frontend built with **HTML**, **CSS**, and **vanilla JavaScript**. This project uses the **FreeAPI Authentication Module** to implement a real API-driven auth flow, including user registration, login, current-user profile fetching, session handling through cookies, success/error feedback, and protected profile access behavior.

## Live Project

- Live URL: Add your hosted link here
- GitHub Repository: Add your public repository link here

## Project Overview

The goal of this project is to understand how frontend authentication works when connected to a real backend API. Instead of storing fake user data locally, this app communicates with FreeAPI endpoints using `fetch`, sends JSON request bodies, reads API responses, and uses browser-managed cookies for authenticated sessions.

The application currently includes:

- Register screen for creating a new account
- Login screen for authenticating an existing user
- Profile screen for displaying the currently logged-in user
- Logout button in the profile UI
- API-based success and error messages
- Responsive modern UI using custom CSS
- Basic request handling with redirects after successful auth actions
- Session-aware current-user request using `credentials: "include"`

## Tech Stack

- **HTML5** for page structure
- **CSS3** for responsive UI and visual styling
- **Vanilla JavaScript** for DOM handling and API requests
- **FreeAPI** for authentication endpoints
- **Fetch API** for HTTP communication

## API Endpoints Used

| Feature | Method | Endpoint |
| --- | --- | --- |
| Register User | `POST` | `https://api.freeapi.app/api/v1/users/register` |
| Login User | `POST` | `https://api.freeapi.app/api/v1/users/login` |
| Logout User | `POST` | `https://api.freeapi.app/api/v1/users/logout` |
| Current User | `GET` | `https://api.freeapi.app/api/v1/users/current-user` |

## Features

### User Registration

New users can create an account by submitting:

```json
{
  "email": "user.email@domain.com",
  "password": "test@123",
  "role": "ADMIN",
  "username": "doejohn"
}
```

The frontend collects form data, converts it into a JSON payload, sends it to the register endpoint, and displays a success or error message based on the API response.

### User Login

Registered users can log in with:

```json
{
  "password": "test@123",
  "username": "doejohn"
}
```

After a successful login, the API creates an authenticated session. The browser stores the session cookie, and the user is redirected to the profile page.

### Current User Profile

The profile page sends a `GET` request to the current-user endpoint with:

```js
credentials: "include"
```

This allows the browser to include the session cookie with the request. If the session is valid, the app displays the logged-in user's username, email, and role.

### Logout

The profile page includes a logout action for ending the active session through the FreeAPI logout endpoint. After logout, the authenticated session should be cleared and the user should be redirected back to the login screen.

## What I Learned

This project helped me understand frontend authentication beyond just form design. I learned how a frontend app communicates with a backend authentication system and how logged-in state is maintained through API requests and cookies.

Key concepts practiced in this project:

- Building authentication forms using vanilla JavaScript
- Reading form input using `FormData`
- Sending `POST` requests with JSON bodies
- Handling API success and failure responses
- Using `credentials: "include"` for cookie-based auth
- Fetching the currently authenticated user
- Redirecting users after login and registration
- Separating auth screens into focused HTML pages
- Updating the UI based on real API responses
- Understanding how sessions and cookies support login state

## Project Structure

```text
.
|-- app.js
|-- index.html
|-- register.html
|-- profile.html
`-- README.md
```

### File Responsibilities

| File | Purpose |
| --- | --- |
| `index.html` | Login page UI |
| `register.html` | Registration page UI |
| `profile.html` | Current user profile page |
| `app.js` | Handles register, login, current-user API calls, DOM updates, and redirects |
| `README.md` | Project documentation |

## How Authentication Works In This App

1. The user registers with email, username, password, and role.
2. The user logs in with username and password.
3. The backend validates the credentials and creates a session.
4. The browser stores the session cookie provided by the API.
5. The profile page requests the current user with `credentials: "include"`.
6. The backend checks the session cookie and returns the logged-in user data.
7. The frontend renders the user's profile details.
8. The user can log out to end the session.

## How To Run Locally

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project folder:

```bash
cd Authenication-app-frontend
```

3. Open `index.html` in your browser.

You can also use a local development server such as the VS Code Live Server extension.

## Important Notes

- This project uses real FreeAPI endpoints, so an internet connection is required.
- The app depends on the API response format returned by FreeAPI.
- Cookie-based authentication requires the browser to allow cookies for the API session.
- For authenticated requests, `credentials: "include"` is important so the browser sends the session cookie with the request.

## Future Improvements

- Add stronger loading button states for all requests
- Add client-side form validation messages
- Improve protected route handling for unauthenticated profile visits
- Show richer profile details if the API provides more user fields
- Add a dedicated logout success/error message
- Refactor repeated API request logic into helper functions

## Author

Built by **Rohan** as part of a frontend authentication project using the FreeAPI Authentication Module.
