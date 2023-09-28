import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:5000/user/${username}`)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            setErrorMessage("Vui Lòng Nhập Tên Người Dùng Hợp Lệ");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              navigate("/admin");
            } else {
              setErrorMessage(
                "Mật Khẩu Không Đúng. Vui Lòng Nhập Mật Khẩu Chính Xác."
              );
            }
          }
        })
        .catch((err) => {
          setErrorMessage("Đăng Nhập Không Thành Công Do: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      setErrorMessage("Vui Lòng Nhập Tên Người Dùng.");
    }
    if (password === "" || password === null) {
      result = false;
      setErrorMessage("Vui Lòng Nhập Mật Khẩu.");
    }
    return result;
  };

  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      <div className="justify-content-center align-content-center">
        {/* <form onSubmit={proceedLogin}> */}
        <div className="container-xxl col-6 mt-5">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  <p className="text-center w-100" style={{ fontSize: "30px" }}>
                    {" "}
                    Login
                  </p>
                  <p className="text-center w-100">
                    Please sign-in to your account and start the adventure
                  </p>
                  {errorMessage && (
                    <div className="alert alert-danger mt-2" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <form onSubmit={proceedLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email or username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <a href="auth-forgot-password-basic.html">
                          <small>Forgot Password?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          // type={showPassword ? "text" : "password"}
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          aria-describedby="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          // onClick={handleTogglePassword}
                        >
                          {/* {showPassword ? (
                            <i className="bi bi-eye"></i>
                          ) : (
                            <i className="bi bi-eye-slash"></i>
                          )} */}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-me"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-me"
                        >
                          {" "}
                          Remember Me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary d-grid w-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="text-center">
                    <Link
                      className="btn btn-success d-flex justify-content-center align-items-center"
                      to={"/register"}
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}

export default Login;
