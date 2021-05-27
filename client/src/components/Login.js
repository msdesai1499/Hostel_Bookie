import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';


const Login = () => {

	const { state, dispatch } = useContext(UserContext);


	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loginUser = async (e) => {
		e.preventDefault();
		// console.log(email, password);
		if (email === "hostel" && password === "hostel") {
			dispatch({ type: "HOSTEL", payload: true })
			window.alert("Hostel Login Successfull");
			history.push("/");

		}
		else if (email === "admin" && password === "admin") {
			dispatch({ type: "ADMIN", payload: true })
			window.alert("Admin Login Successfull");
			history.push("/");

		}

		const res = await fetch('/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email, password
			})
		});

		const data = await res.json();

		let msg = data.message;
		console.log("Hello", data.message);

		if (res.status === 400 || !data) {
			if (email != "hostel" && email != "admin") {
				window.alert("Invalid Credentials");
			}

		}
		else {

			if (data.message == "User") {
				dispatch({ type: "USER", payload: true })
				window.alert("Login Successfull");
				history.push("/");
			}
			else if (data.message == "Hostel") {
				dispatch({ type: "HOSTEL", payload: true })
				window.alert("Hostel Login Successfull");
				history.push("/");
			}

		}
	}
	return (
		<>
			<div className="container-fluid" id="loginid">
				<div className="row no-gutter">
					<div classNameName="col-md-6 d-none d-md-flex bg-image"></div>


					<div classNameName="col-md-6 bg-light">
						<div classNameName="login d-flex align-items-center py-5">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 col-xl-7 mx-auto">
										<h3 className="display-4">Login</h3>
										<p className="mb-4" style={{ color: "white" }}>Hostel Bookie – For the scruffy & happy backpacker.</p>
										<form method="POST">
											<div className="form-group mb-3">
												<input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill 
												border-0 shadow-sm px-4"
													value={email}
													onChange={(e) => setEmail(e.target.value)} />
											</div>
											<div className="form-group mb-3">
												<input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
													value={password}
													onChange={(e) => setPassword(e.target.value)} />
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input id="customCheck1" type="checkbox" checked className="custom-control-input" />
												<label for="customCheck1" className="custom-control-label">Remember password</label>
											</div>
											<div className="form-group mb-3">
												<input type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Sign in"
													onClick={loginUser} />
											</div>


										</form>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default Login