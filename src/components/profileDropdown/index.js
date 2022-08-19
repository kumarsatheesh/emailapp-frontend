import "./style.css";
import React, { useState } from "react";

export default function App() {
  const [navopen, setNavopen] = useState(false);
  return (
    <div className="action">
      <div className="profile" onClick={() => setNavopen(!navopen)}>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </div>
      <div className={`menu ${navopen ? "active" : ""}`}>
        <ul>
          <li>
            <img src="./assets/icons/user.png" />
            <a href="#">My profile</a>
          </li>
          <li>
            <img src="./assets/icons/edit.png" />
            <a href="#">Edit profile</a>
          </li>
          <li>
            <img src="./assets/icons/envelope.png" />
            <a href="#">Inbox</a>
          </li>
          <li>
            <img src="./assets/icons/settings.png" />
            <a href="#">Setting</a>
          </li>
          <li>
            <img src="./assets/icons/question.png" />
            <a href="#">Help</a>
          </li>
          <li>
            <img src="./assets/icons/log-out.png" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
