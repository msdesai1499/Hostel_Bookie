import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../navbar.css";
import { UserContext } from '../App';

function NavBar() {


	let { state, dispatch } = useContext(UserContext);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const RenderMenu = () => {

		try {
			console.log("cjsjcjsjj", state[1]);
			if ((state[0] == true) && (state[1] == "USER")) {
				return (
					<>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<NavLink
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Home
              </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/Services"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}>
									Services
              				</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/contact"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Contact Us
              </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/about"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Our Team
                            </NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									exact
									to="/profile"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Profile
                            </NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									exact
									to="/logout"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}>
									Logout
                            </NavLink>
							</li>
						</ul>

					</>
				)
			}
			else if ((state[0] == true) && (state[1] == "HOSTEL")) {
				return (
					<>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<NavLink
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Home
              </NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									exact
									to="/about"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Our Team
                            </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/addhostel"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Add Hostel details
                            </NavLink>
							</li>


							<li className="nav-item">
								<NavLink
									exact
									to="/logout"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}>
									Logout
                            </NavLink>
							</li>
						</ul>

					</>
				)
			}
			else if ((state[0] == true) && (state[1] == "ADMIN")) {
				return (
					<>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<NavLink
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Home
              </NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									exact
									to="/addowner"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Add Hostel Owner
                            </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/displayhostels"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									DisplayHostels
                            </NavLink>
							</li>


							<li className="nav-item">
								<NavLink
									exact
									to="/logout"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}>
									Logout
                            </NavLink>
							</li>
						</ul>

					</>
				)
			}
			else {
				return (
					<>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<NavLink
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Home
              </NavLink>
							</li>

							<li className="nav-item">
								<NavLink
									exact
									to="/Services"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Services
              </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/contact"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Contact Us
              </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/about"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Our Team
                            </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/login"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Login
                            </NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/register"
									activeClassName="active"
									className="nav-links"
									onClick={handleClick}
								>
									Register
                            </NavLink>
							</li>
						</ul>

					</>
				)
			}
		}
		catch (err) {
			return (
				<>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
		  </NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								exact
								to="/Services"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Services
		  </NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/contact"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Contact Us
		  </NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Our Team
						</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/login"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Login
						</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/register"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Register
						</NavLink>
						</li>
					</ul>

				</>
			)
		}
	}

	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						HostelBookie
					<i className="fas fa-code"></i>
					</NavLink>

					<RenderMenu />
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar