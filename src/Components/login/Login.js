import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import  authentication  from "../../Services/Auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function Login(event) {
    event.preventDefault();
    fetch("http://localhost:3001/auth/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          authentication.Login();
          history.push("/");
        }
      });
  }

  return (
    <div className="container mt-5" data-testid="conId">
      <div className="row">
        <div col-md-4 offset-md-4>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <button
              type="submit" data-testid="logId"
              onClick={Login}
              class="btn btn-lg btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}