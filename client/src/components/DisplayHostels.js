import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'

const DisplayHostels = () => {
	const history = useHistory();
	const [hostelData, setHostelData] = useState([]);
	const HostelNames = async () => {
		try {
			const res = await fetch('/all', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();
			setHostelData(data.hostels);
			console.log(data.hostels[0].hostelName);

			if (!res.status === 200) {
				const error = new Error(res.error);
				console.log(error);
				throw error;
			}




		} catch (err) {
			console.log(err);

		}
	}
	useEffect(() => {
		HostelNames();
	}, []);

	const deleterecord = async (hname) => {
		try {
			const res = await fetch('/delete/' + hname, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();

			if (!res.status === 200) {
				const error = new Error(res.error);
				console.log(error);
				alert("Record Not Deleted Successfully");
				throw error;
			}
			else {
				alert("Record Deleted Successfully");

				history.push("/addowner");
			}




		} catch (err) {
			console.log(err);

		}

	}





	const renderCard = (hostels, index) => {

		return (

			<tr>
				<td>{index + 1}</td>
				<td>{hostels.hostelName}</td>
				<td>{hostels.hostelEmail}</td>
				<td><button className="btn btn-primary" onClick={() => deleterecord(hostels.hostelName)}>Delete</button></td>


			</tr>


		);
	};

	return <div>
		<div style={{ textAlign: "center", margin: "20px", fontFamily: "cursive", color: "red" }}><h2>Hostel Details</h2></div>
		<div className="grid"><Table striped bordered hover>
			<thead>
				<tr>
					<th>Sr No</th>
					<th>Hostel Name</th>
					<th>Hostel Email</th>
					<th>Delete Records</th>
				</tr>
			</thead>
			<tbody>{hostelData.map(renderCard)}</tbody>
		</Table></div>
	</div>;
};
export default DisplayHostels





