import React from "react";

function App() {
  return (
    <div className="App">
      <form>
        <div>
        <label for="username">Username</label>
        <input type="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
        
      </form>

    </div>
  );
}

export default App;
