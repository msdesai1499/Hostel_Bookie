import React from 'react'
import '../OurTeam.css';
import mandar from '../images/Mandar.jpg'
import ashish from '../images/ashish.JPEG'
import yogesh from '../images/yogesh.jpg'
import aditi from '../images/aditi.jpeg'

const About = () => {
	return (
		<div className="ourteam" style={{ marginTop: "3%" }}>
			<section id="trainers" className="trainers">
				<div className="container" data-aos="fade-up">

					<div className="row" data-aos="zoom-in" data-aos-delay="100">
						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<img src={mandar} className="img-fluid" alt="" />
								<div className="member-content">
									<h4>Mandar Desai</h4>
									<span>BackEnd</span>
									<p>
										Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                        		</p>
									<div className="social">
										<a href=""><i className="icofont-twitter"></i></a>
										<a href=""><i className="icofont-facebook"></i></a>
										<a href=""><i className="icofont-instagram"></i></a>
										<a href=""><i className="icofont-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<img src={yogesh} className="img-fluid" alt="" />
								<div className="member-content">
									<h4>Yogesh Gaikwad</h4>
									<span>BackEnd</span>
									<p>
										Leadership skill,Cloud computing,
										Web Development.Real time problem skill, exploring opportunities,easily adopt new technology and willing to work with fresh idea.
                    </p>
									<div className="social">
										<a href=""><i className="icofont-twitter"></i></a>
										<a href=""><i className="icofont-facebook"></i></a>
										<a href=""><i className="icofont-instagram"></i></a>
										<a href=""><i className="icofont-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>


						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<img src={ashish} className="img-fluid" alt="" />
								<div className="member-content">
									<h4>Ashish Nagpure</h4>
									<span>FrontEnd</span>
									<p>
										Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                    </p>
									<div className="social">
										<a href=""><i className="icofont-twitter"></i></a>
										<a href=""><i className="icofont-facebook"></i></a>
										<a href=""><i className="icofont-instagram"></i></a>
										<a href=""><i className="icofont-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member">
								<img src={aditi} className="img-fluid" alt="" />
								<div className="member-content">
									<h4>Aditi Vasaikar</h4>
									<span>Content and Documentation</span>
									<p>
										Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                    </p>
									<div className="social">
										<a href=""><i className="icofont-twitter"></i></a>
										<a href=""><i className="icofont-facebook"></i></a>
										<a href=""><i className="icofont-instagram"></i></a>
										<a href=""><i className="icofont-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>
		</div>
	)
}

export default About