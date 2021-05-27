import React, { Component, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../ApplicationForm.css';
import image1 from '../images/bg1.jpg';
import image2 from '../images/bg2.jpg';
import image3 from '../images/bg3.jpg';
import { Link, useLocation, useHistory } from "react-router-dom";

import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
Modal.setAppElement('#root');

const ApplicationForm = () => {
	const history = useHistory();
	const [hostelData, setHostelData] = useState([]);
	let location = useLocation();
	console.log(location.pathname);
	let hostelname = location.pathname.substr(17,)
	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const hosteldata = async () => {

		try {
			let lnk = '/all/' + hostelname;
			const res = await fetch(lnk, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();
			setHostelData(data.hostels[0]);


			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}


		} catch (err) {
			console.log(err);

		}
	}

	const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
	const userDataConfirm = async () => {
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
		hosteldata();
		userDataConfirm();
	}, []);


	let studentname = userData.name;
	let studentemail = userData.email;
	const ApplyHostel = async (e) => {

		const res = await fetch("/modify", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				hostelname, studentname, studentemail
			})
		});

		const data = await res.json();
		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");

		}
		else {
			window.alert("Applied Successfully");


			history.push("/");
		}
	}


	return (
		<div className="carousel">
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={image1}
						style={{ height: 300 }}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						style={{ height: 300 }}
						src={image2}
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second Slide</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={image3}
						style={{ height: 300 }}
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="center">
				<h1>Hostel Name : {hostelData.hostelName}</h1>
				<h1>Hostel Email : {hostelData.hostelEmail}</h1>
				<h1>Hostel Type : {hostelData.hostelType}</h1>
				<h1>Available Rooms : {hostelData.availableRoom}</h1>
				<h1>Hostel Rent : {hostelData.hostelRent}</h1>

				<center><button onClick={() => setmodalIsOpen(true)}>Click Here to Apply</button></center>
				<Modal isOpen={modalIsOpen}
					onRequestClose={() => setmodalIsOpen(false)}
					style={
						{
							overlay: {
								backgroundColor: 'grey'
							},
							content: {
								color: 'orange'
							}
						}
					}
				>
					<h2>
						Confirm Your Details Once
					</h2>
					<p>
						<h2>Name :{userData.name}</h2>
						<h2>Email :{userData.email}</h2>
						<h2>Contact :{userData.phone}</h2>
						<h2>Hostel Applied :{hostelData.hostelName}</h2>
						<h2>Hostel Type : {hostelData.hostelType}</h2>
						<h2>Hostel Rent : {hostelData.hostelRent}</h2>


					</p>
					<div>
						<button onClick={ApplyHostel}>Apply</button>
						<button onClick={() => setmodalIsOpen(false)}>Close</button>
					</div>
				</Modal>

			</div>
		</div>

	)
}

export default ApplicationForm;