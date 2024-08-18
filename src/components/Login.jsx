import { useState } from "react";
import { UserSignIn } from "../Api";
import { useDispatch } from "react-redux";
import { openSwaphub } from "../Redux/reducers/swaphub";
import { loginSuccess } from "../Redux/reducers/userreducer";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const UserDetails = async () => {
    if (validateform()) {
      console.log("entered");
      await UserSignIn({ email: email, password: password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          dispatch(
            openSwaphub({
              message: "Login successful",
              severity: "success",
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("please fill all fields ");
    }
    console.log("closed");
  };

  function validateform() {
    if (!email || !password) return false;
    else {
      console.log("correct");
      return true;
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-form">
          <form className="loginform">
            <div className="form-group">
              <label htmlFor="useremail" name="usermail">
                UserEmail:
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                required
                autoComplete="current-password"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" name="password">
                Passsword:
              </label>
              <input
                type="password"
                value={password}
                placeholder="Enter password"
                required
                autoComplete="current-password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button onClick={UserDetails}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
