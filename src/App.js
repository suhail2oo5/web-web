import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="login-box">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>
              Username: "admin" <br />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password: "1234" <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <header className="home-header">
            <h1>Welcome to LIBRARY MANAGEMENT SYSTEM</h1>
          </header>

          <nav className="home-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </nav>

          <div className="home-container">
            <h2>Hello!</h2>
            <p>YOU CAN LOG OUT</p>
          </div>

          <footer className="home-footer">
            &copy; 2025 My Website. All rights reserved.
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
