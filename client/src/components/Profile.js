import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import mypic from '../images/Mandar.jpg';
import "../profile.css";
import { useHistory } from 'react-router-dom';

const Profile = () => {
	const history = useHistory();
	const [userData, setUserData] = useState({});
	const callProfilePage = async () => {
		try {
			const res = await fetch('/profile', {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				credentials: "include"
			});

			const data = await res.json();
			console.log(data);

			console.log('Hello');
			setUserData(data);
			console.log(userData.name);
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}


		} catch (err) {
			console.log(err);
			history.push('/login');
		}
	}
	useEffect(() => {
		callProfilePage();
	}, []);
	return (
		<>
			<div className="container emp-profile">
				<form method="GET">
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img src={mypic} alt="" />
								<div className="file btn btn-lg btn-primary">
									Change Photo
                                <input type="file" name="file" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
								<h5>{userData.name}</h5>
								<h6>
									{userData.work}
								</h6>
								<p className="proile-rating">RANKINGS : <span>8/10</span></p>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-work">
								<p>WORK LINK</p>
								<a href="">Website Link</a><br />
								<a href="">Bootsnipp Profile</a><br />
								<a href="">Bootply Profile</a>
								<p>SKILLS</p>
								<a href="">Web Designer</a><br />
								<a href="">Web Developer</a><br />
								<a href="">WordPress</a><br />
								<a href="">WooCommerce</a><br />
								<a href="">PHP, .Net</a><br />
							</div>
						</div>
						<div className="col-md-8 about-info">
							<div className="tab-content profile-tab" id="myTabContent">
								<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

									<div className="row">
										<div className="col-md-6">
											<label>Name</label>
										</div>
										<div className="col-md-6">
											<p>{userData.name}</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Email</label>
										</div>
										<div className="col-md-6">
											<p>{userData.email}</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Phone</label>
										</div>
										<div className="col-md-6">
											<p>{userData.phone}</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Profession</label>
										</div>
										<div className="col-md-6">
											<p>{userData.work}</p>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
									<div className="row">
										<div className="col-md-6">
											<label>Experience</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Hourly Rate</label>
										</div>
										<div className="col-md-6">
											<p>10$/hr</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Total Projects</label>
										</div>
										<div className="col-md-6">
											<p>230</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>English Level</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Availability</label>
										</div>
										<div className="col-md-6">
											<p>6 months</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<label>Your Bio</label><br />
											<p>Your detail description</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default Profile