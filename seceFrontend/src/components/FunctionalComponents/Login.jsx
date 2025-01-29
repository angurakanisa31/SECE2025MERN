import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Event Triggered");
    try {
      const req = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });
      //console.log(req)
      alert(req.data.response);

      // Navigate only if login is successful
      if (response.data.isLoggedIn) {
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Signup</h1>
      <form className="container" method="POST" onSubmit={handleLogin}>
        <div>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button className="button" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
