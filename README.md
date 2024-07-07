 **Authentication**.


<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ebank-output-v2.gif" alt="ebank-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

- User credentials

  ```text
   User ID: 142420
   PIN: 231225

  ```


- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an unauthenticated user tries to access the Home Route, then the page should be navigated to Login Route
  - When an authenticated user tries to access the Home Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- **Not Found Route**
  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route




