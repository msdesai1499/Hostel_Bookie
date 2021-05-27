import React from 'react'
import { NavLink } from 'react-router-dom';
import "../errorpage.css";

const Errorpage = () => {
	return (
		<>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>
							404
						</h1>
					</div>
					<h2>We are sorry, Page not found!</h2>
					<p className="mb-5">
						The Page you are looking for might have been removed had its name changed or is temporary unavailable
					</p>
					<NavLink to="/">Back to Homepage</NavLink>
				</div>
			</div>
		</>
	)
}

export default Errorpage