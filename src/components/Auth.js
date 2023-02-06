import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/reducers/authReducer";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const login = () => {
    dispatch(authActions.loggedIn());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Logged In");
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" onClick={login}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
