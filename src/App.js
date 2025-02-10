import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f4f4f4", padding: "20px" }}>
      <div style={{ backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", borderRadius: "8px", padding: "20px", width: "100%", maxWidth: "600px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#333", marginBottom: "16px", textAlign: "center" }}>User List</h2>
        {users.length > 0 ? (
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            {users.map((user) => (
              <li key={user.id} style={{ padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f9f9f9", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", marginBottom: "8px" }}>
                <span style={{ color: "#333", fontWeight: "500" }}>{user.name}</span>
                <span style={{ color: "#666", fontSize: "14px" }}>{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center", color: "#666" }}>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;