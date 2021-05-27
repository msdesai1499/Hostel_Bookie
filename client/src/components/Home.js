import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';


const Home = () => {
	const [userName, setUserName] = useState('');


	const userHomepage = async () => {
		try {
			const res = await fetch('/getdata', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();
			setUserName(data.name);
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
	


		} catch (err) {
			console.log(err);

		}
	}
	useEffect(() => {
		userHomepage();
	}, []);

	return (
		<>
			<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
						aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={bg1} style={{ height: 450 }} className="d-block w-100" alt="..."></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>Welcome to Hostel Bookie</h5>
							<p>Hostel,Rooms,Flats,PG</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={bg2} style={{ height: 450 }} class="d-block w-100" alt="..."></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>Welcome to Hostel Bookie</h5>
							<p>Hostel,Rooms,Flats,PG</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={bg3} style={{ height: 450 }} className="d-block w-100" alt="..."></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>Welcome to Hostel Bookie</h5>
							<p>Hostel,Rooms,Flats,PG</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="alert alert-success alert-dismissible fade show" role="alert">
				<strong>Hello Welcome!</strong> Nice to see you {userName}.
  				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		</>
	)
}

export default Home