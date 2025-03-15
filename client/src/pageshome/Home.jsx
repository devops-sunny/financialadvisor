/* eslint-disable */
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/dashboard">Go to Dashboard</Link> | <Link to="/login">Login</Link>
  </div>
);

export default Home;
