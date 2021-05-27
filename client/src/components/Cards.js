import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Cards = () => {
	const [hostelData, setHostelData] = useState([]);
	const userImages = async () => {
		try {
			const res = await fetch('/thumbnail', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});

			const data = await res.json();
			setHostelData(data.hostels);
			// console.log(data.hostels[2].hostelImages);
			console.log(data.hostels[0].hostelArr.length);
			// console.log(data.hostels[2].hostelImages.substr(8,))
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}


		} catch (err) {
			console.log(err);

		}
	}
	useEffect(() => {
		userImages();
	}, []);






	const renderCard = (card, index) => {
		if (card.hostelArr.length == 0) {
			return (
				<>
				</>
			)
		}
		console.log(card);
		return (

			<Card style={{ width: "20rem", height: "25rem", margin: "4rem" }} key={index} className="box">
				<Card.Img variant="top" src="holder.js/100px180" src={card.hostelImages.substr(8,)} />
				<Card.Body>
					<Card.Title>{card.hostelName}</Card.Title>
					<Card.Text>{card.hostelImages.length}</Card.Text>

					<Link to={{ pathname: `/applicationform/${card.hostelName}` }} className="btn btn-primary"  >Apply </Link>
				</Card.Body>
			</Card >
		);
	};

	return <div className="grid" style={{
		display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px',
		alignItems: 'stretch'
	}}>
		{hostelData.map(renderCard)}
	</div>;
};



export default Cards;
