import {useNavigate, Link} from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();

  const handleSignup = () =>{
    e.preventDefault();
    props.onLogin();
    navigate("/home");
  }

  return (
    <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          Email : <input type="email" placeholder="Enter your email" />
          Password : <input type="password" placeholder="password" />
          Confirm Password : <input type="password" placeholder="password" />
          <input type="submit" value="submit" />
        </form>
        Already have an account?<Link to="/Login" > Login</Link>
    </div>
  )
}

export default Signup