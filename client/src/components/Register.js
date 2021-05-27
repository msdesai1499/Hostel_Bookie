import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "../register.css";
import 'bootstrap/dist/css/bootstrap.css';
import validator from 'validator';



const Register = () => {
	const history = useHistory();
	const [user, setUser] = useState({
		name: "", email: "", phone: "", work: "", password: "", cpassword: ""
	});
	let name, value;
	const handleInputs = (e) => {

		// console.log(e);

		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
		console.log(name, value);
	}

	const PostData = async (e) => {
		e.preventDefault();
		let res, data;
		const { name, email, phone, work, password, cpassword } = user;
		if (!name || !validator.isEmail(email) || !phone || !work || !password || !cpassword) {
			console.log('Error in contact form fields');

			data = "";
		}
		else {



			res = await fetch("/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name, email, phone, work, password, cpassword
				})
			});
			data = await res.json();
		}


		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");
			console.log("Invalid Regsestration");
		}
		else {
			window.alert("Registration Successful");
			console.log("Registration Successful");

			history.push("/login");
		}
	}


	return (
		<>
			<div className="container register">
				<div className="row">
					<div className="col-md-3 register-left">
						<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
						<h3>Welcome</h3>
						<p>Hostel Bookie – For the scruffy & happy backpacker</p>
						<input type="submit" name="" value="Login" /><br />
					</div>
					<div className="col-md-9 register-right">
						<h3 className="register-heading">Apply as a Hostelite</h3>
						<form method="POST" className="register-form" className="register-form" >
							<div className="col-md-6">
								<div className="form-group">
									<input type="text" pattern="[a-Z]{4}"
										className="form-control" id="name" name="name"
										value={user.name}
										onChange={handleInputs}
										placeholder="Name *" required />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" id="password" name="password"
										value={user.password}
										onChange={handleInputs}
										placeholder="Password *" required />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" id="cpassword" name="cpassword"
										value={user.cpassword}
										onChange={handleInputs}
										placeholder="Confirm Password *" required />
								</div>
								<div className="form-group">
									<input type="text" pattern="[a-Z]{3}" className="form-control" id="work" name="work"
										value={user.work}
										onChange={handleInputs}
										placeholder="Work *"
										required
									/>
								</div>

							</div>
							<div className="col-md-6">
								<div className="form-group">
									<input type="email" className="form-control" id="email" name="email"
										value={user.email}
										pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
										onChange={handleInputs}
										placeholder="Your Email *" required />
								</div>
								<div className="form-group">
									<input type="text" minlength="10" maxlength="10" id="phone" name="phone"
										value={user.phone}
										onChange={handleInputs}
										className="form-control" placeholder="Your Phone *" required />
								</div>
								<div className="form-group">
									<select className="form-control">
										<option className="hidden" selected disabled>Please select your Room Type</option>
										<option>Hostel</option>
										<option>Flat</option>
										<option>Paying Guest</option>
									</select>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Enter Your Address" value="" required />
								</div>
								<input type="submit" name="signup" id="signup"
									onClick={PostData}
									className="btnRegister" value="Register" />
							</div>
						</form>
					</div>
				</div>
			</div>


		</>
	)
}

export default Register