import React, { useEffect } from 'react'
import '../Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
function Services() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<body>
			<h1 data-aos="fade-up">WHAT WE DO ?</h1>
			<div className="container">
				<div className="row">
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="clock" size='4x' color="skyblue"></FontAwesomeIcon>
								</div>
								<h4>24/7</h4>
								<br></br>
								<p>Provides excellent service & support & willing to offer you quick and easy resolution at any time</p>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="calendar-check" size='4x' color="blue"></FontAwesomeIcon>
								</div>
								<h4>ROOM RESERVATION</h4>
								<br></br>
								<p>Efficiently handling your reservations from all your sources providing best service to users</p>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="edit" color="red" size='4x'></FontAwesomeIcon>
								</div>
								<h4>MANAGE BOOKING</h4>
								<br></br>
								<p>View your booking , confirm ,cancel as well as check vacancy of particular hostel room as per your choice</p>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="balance-scale" size='4x' color="grey" ></FontAwesomeIcon>
								</div>
								<h4>ANALYZE</h4>
								<br></br>
								<p>Know the rent of hostel rooms and compare them according to your comfort</p>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="fingerprint" size='4x' color="green"></FontAwesomeIcon>
								</div>
								<h4>SECURITY</h4>
								<br></br>

								<p>Your personal data is not exposed , As well as details of hostel are verified.</p>
								<br></br>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" className="col-md-4">
						<div className="main">
							<div className="service">
								<div className="icon">
									<FontAwesomeIcon icon="phone-alt" size='4x' color="purple"></FontAwesomeIcon>
								</div>
								<h4>COMMUNICATION</h4>
								<br></br>
								<p>Direct communication / Contact is available between user and hostel administration</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
		</body>
	);
}

export default Services;




