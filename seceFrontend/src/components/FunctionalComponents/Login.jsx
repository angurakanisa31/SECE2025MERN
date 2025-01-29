import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault()
    props.onLogin();
    navigate("/Home");
  }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          Email : <input type="email" placeholder="Enter your email" />
          Password : <input type="password" placeholder="password" />
          <input type="submit" value="submit" />
        </form>
        Don't have account?<Link to="/" > Signup</Link>
    </div>
  )
}

export default Login