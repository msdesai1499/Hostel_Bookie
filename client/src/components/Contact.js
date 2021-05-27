import React, { useEffect, useState } from 'react';


const Contact = () => {


	const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
	const userContact = async () => {
		try {
			const res = await fetch('/getdata', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();
			setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}


		} catch (err) {
			console.log(err);

		}
	}
	useEffect(() => {
		userContact();
	}, []);

	//We are storing data in states

	const handleInputs = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserData({ ...userData, [name]: value });
	}

	//Send data to the backend
	const contactForm = async (e) => {
		e.preventDefault();
		const { name, email, phone, message } = userData;
		const res = await fetch('/contact', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name, email, phone, message
			})
		});

		const data = await res.json();

		if (!data) {
			console.log("Message not send");
		}
		else {
			alert("Message Sent Successfully");
			setUserData({ ...userData, message: "" });
		}
	}


	return (
		<div className="contact3 py-5">
			<div className="row no-gutters">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="card-shadow">
								<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-box ml-3">
								<h1 className="font-weight-light mt-2">Quick Contact</h1>
								<form method="POST" className="mt-4" >
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<input className="form-control" type="text"
													name="name"
													value={userData.name}
													onChange={handleInputs}
													placeholder="name" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<input className="form-control" type="email"
													name="email"
													value={userData.email}
													onChange={handleInputs}
													placeholder="email address" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<input className="form-control" type="text"
													name="phone"
													value={userData.phone}
													onChange={handleInputs}
													placeholder="phone" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group mt-2">
												<textarea className="form-control" rows="3"
													name="message"
													value={userData.message}
													onChange={handleInputs}
													placeholder="message" required></textarea>
											</div>
										</div>
										<div className="col-lg-12">
											<button type="button" class="btn 
											btn-primary"
												onClick={contactForm}
											>Send message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="card mt-4 border-0 mb-4">
								<div className="row">
									<div className="col-lg-4 col-md-4">
										<div className="card-body d-flex align-items-center c-detail pl-0">
											<div className="mr-3 align-self-center">
												<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
											</div>
											<div className="">
												<h6 className="font-weight-medium">Address</h6>
												<p className="">601 Sherwood Ave.
                             San Bernandino</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="card-body d-flex align-items-center c-detail">
											<div className="mr-3 align-self-center">
												<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
											</div>
											<div className="">
												<h6 className="font-weight-medium">Phone</h6>
												<p className="">251 546 9442
                             630 446 8851</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4">
										<div className="card-body d-flex align-items-center c-detail">
											<div className="mr-3 align-self-center">
												<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
											</div>
											<div className="em">
												<h6 className="font-weight-medium">Email</h6>
												<p className="t">
													info@wrappixel.com
													123@wrappixel.com
                          </p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}

export default Contact