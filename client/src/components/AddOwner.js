import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "../register.css";
import 'bootstrap/dist/css/bootstrap.css';




const AddOwner = () => {

	const history = useHistory();
	const [user, setUser] = useState({
		hostelName: "", hostelEmail: "", hostelPassword: ""
	});
	let name, value;
	const handleInputs = (e) => {
		// console.log(e);
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
		console.log(name, value);
	}

	const PostHostelData = async (e) => {
		e.preventDefault();
		const { hostelName, hostelEmail, hostelPassword } = user;
		const res = await fetch("/addOwner", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				hostelName, hostelEmail, hostelPassword
			})
		});

		const data = await res.json();
		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");
			console.log("Invalid Regsestration");
		}
		else {
			window.alert("Hostel Added Successful");
			console.log("Registration Successful");

			history.push("/displayhostels");
		}
	}



	return (
		<>
			<div className="container register">
				<div className="row">

					<div className="col-md-9 register-right">
						<h3 className="register-heading">Apply as a Hostelite</h3>
						<form method="POST" className="register-form" className="register-form" >
							<div className="form-group">
								<input type="text" className="form-control" id="hostelName" name="hostelName"
									value={user.hostelName}
									onChange={handleInputs}
									placeholder="Name *" />
							</div>

							<div className="form-group">
								<input type="email" className="form-control" id="hostelEmail" name="hostelEmail"
									value={user.hostelEmail}
									onChange={handleInputs}
									placeholder="Your Email *" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" id="hostelPassword" name="hostelPassword"
									value={user.hostelPassword}
									onChange={handleInputs}
									placeholder="Password *" />
							</div>


							<input type="submit" name="signup" id="signup"
								onClick={PostHostelData}
								className="btnRegister" value="Register" />

						</form>
					</div>
				</div>
			</div>


		</>
	)
}

export default AddOwner





