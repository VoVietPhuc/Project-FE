import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Sử dụng state để kiểm tra chế độ đăng ký

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Xử lý đăng nhập ở đây
      console.log("Đăng nhập với email:", email, "và password:", password);
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Xử lý đăng ký ở đây
      console.log("Đăng ký với email:", email, "và password:", password);
    }
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering); // Chuyển đổi giữa chế độ đăng nhập và đăng ký
    setEmail(""); // Xóa dữ liệu email và password khi chuyển chế độ
    setPassword("");
    setemailError("");
    setpasswordError("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form
              id={isRegistering ? "registerform" : "loginform"}
              onSubmit={isRegistering ? registerSubmit : loginSubmit}
            >
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                {isRegistering ? "Đăng ký" : "Đăng nhập"}
              </button>
              <p className="mt-3 text-center">
                {isRegistering ? (
                  <span>
                    Đã có tài khoản?{" "}
                    <span className="switch-link" onClick={toggleRegisterMode}>
                      Đăng nhập lại
                    </span>
                  </span>
                )     :     (
                  <span>
                    Chưa có tài khoản?{" "}
                    <span className="switch-link" onClick={toggleRegisterMode}>
                      Đăng ký ngay!
                    </span>
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
