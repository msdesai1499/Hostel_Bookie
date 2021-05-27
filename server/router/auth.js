const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
// const cors = require('cors');
const fs = require('file-system');
const path = require('path');
const cors = require('cors');
router.use(cors());
router.use(express.static('../uploads/'))
//router.use('../uploads', express.static('uploads'));
const hostel = require('../model/hostelSchema');


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
	res.send(`Hello World from router.js`);
});
// Using Promises
// router.post('/register',(req, res) => {

// 	const { name, email, phone, work, password, cpassword } = req.body;
// 	if (!name || !email || !phone || !work || !password || !cpassword) {
// 		return res.status(422).json({ error: "Please fill the fields properly" });
// 	}

// 	User.findOne({ email: email })
// 		.then((userExist) => {
// 			if (userExist) {
// 				return res.status(422).json({ error: "Email already exists" });
// 			}
// 			const user = new User({ name, email, phone, work, password, cpassword });
// 			user.save().then(() => {
// 				res.status(201).json({ message: "user registered successfully" });
// 			}).catch((err) => res.status(500).json({ error: "Registeration Failed" }));
// 		}).catch(err => { console.log(err); });
// });


router.post('/register', async (req, res) => {

	const { name, email, phone, work, password, cpassword } = req.body;
	if (!name || !email || !phone || !work || !password || !cpassword) {
		return res.status(422).json({ error: "Please fill the fields properly" });
	}

	try {
		const userExist = await User.findOne({ email: email })
		if (userExist) {
			return res.status(422).json({ error: "Email already exists" });
		} else if (password != cpassword) {
			return res.status(422).json({ error: "Password are not matching" });
		}
		else {
			const user = new User({ name, email, phone, work, password, cpassword });
			await user.save();
			res.status(201).json({ message: "user registered successfully" });


		}



	} catch (err) {
		console.log(err);
	}


});


//login route

router.post('/login', async (req, res) => {
	try {
		let token;
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ error: "Please fill the fields" });
		}

		const userLogin = await User.findOne({ email: email })

		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);

			token = await userLogin.generateAuthToken();
			console.log(token);

			res.cookie("jwtoken", token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true
			});
			if (!isMatch) {
				res.status(400).json({ error: "Invalid Credentials" });
			}
			else {

				res.json({ message: "User" });
			}

		}
		else {

			const hostelLogin = await hostel.findOne({ hostelEmail: email, hostelPassword: password })

			if (hostelLogin) {

				res.json({ message: "Hostel" });


			}
			else {
				res.status(400).json({ error: "Invalid Credentials" });
			}

		}


	} catch (err) {
		console.log(err);
	}
});


//Profile Page

router.get('/profile', authenticate, (req, res) => {
	res.send(req.rootUser);
});

//get user data for contact us and home page
router.get('/getdata', authenticate, (req, res) => {
	res.send(req.rootUser);
});

// contact us page
router.post('/contact', authenticate, async (req, res) => {
	try {
		const { name, email, phone, message } = req.body;

		if (!name || !email || !phone || !message) {
			console.log('Error in contact form fields');
			return res.json({ error: "Please fill the contact form" });

		}

		const userContact = await User.findOne({ _id: req.userID });
		if (userContact) {

			const userMessage = await userContact.addMessage(name, email, phone, message);
			await userContact.save();

			res.status(201).json({ message: "user Contact successfully" });
		}
	} catch (error) {
		console.log(error);
	}
});

//logout Page

router.get('/logout', authenticate, (req, res) => {
	console.log('Hello to logout page');
	res.clearCookie('jwtoken', { path: '/' });
	res.status(200).send('User Logout');
});




// Hostel Part

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		const { hostelName } = req.body;
		console.log("casjcjcdscbhdchsvddhvgdvcsg", req.body.hostelName);
		const dir = `./uploads/${hostelName}`;

		fs.exists(dir, exist => {
			if (!exist) {
				return fs.mkdir(dir, error => cb(error, dir))
			}
			return cb(null, dir);
		});
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '--' + file.originalname);
	},
});
const upload = multer({
	storage: fileStorageEngine
});


//Add Hostel 

router.post("/multiple", upload.array("hostelImage", 5), async (req, res, file) => {

	try {




		const { hostelName, hostelType, availableRoom, hostelRent } = req.body;

		const hostelData = await hostel.findOne({ hostelName: hostelName });
		if (hostelData) {
			const hostelImage = req.files.map(file => file.path);
			const hostel1 = await hostelData.addDetails(hostelType, availableRoom, hostelRent, hostelImage);
			await hostelData.save();
			res.status(201).json({ message: "User Details Added Successfully" });
		}

	} catch (error) {
		console.log(error);
	}





});



//Get Hostel Images


router.get("/thumbnail", (req, res, next) => {
	const hostelDetails = [];
	const hostelArray = [];
	hostel.find()
		.select("hostelName hostelImage")
		.exec()
		.then(docs => {
			const response = {
				hostels: docs.map(doc => {
					return {
						hostelName: doc.hostelName,
						hostelImages: doc.hostelImage[0],
						hostelArr: doc.hostelImage
					}
				})
			};

			res.status(200).json(response);

		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});


//Get all hostel data

router.get("/all/:hostelName", (req, res, next) => {
	const id = req.params.hostelName;
	hostel.find({ hostelName: id })
		.select("hostelName hostelImage hostelEmail hostelType availableRoom hostelRent")
		.exec()
		.then(docs => {
			const response = {

				hostels: docs.map(doc => {
					return {
						hostelName: doc.hostelName,
						hostelImage: doc.hostelImage,
						hostelEmail: doc.hostelEmail,
						hostelType: doc.hostelType,
						availableRoom: doc.availableRoom,
						hostelRent: doc.hostelRent,



					};
				})
			};

			res.status(200).json(response);

		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});


router.get("/all", (req, res, next) => {

	hostel.find()
		.select("hostelName hostelImage hostelEmail hostelType availableRoom hostelRent")
		.exec()
		.then(docs => {
			const response = {

				hostels: docs.map(doc => {
					return {
						hostelName: doc.hostelName,
						hostelImage: doc.hostelImage,
						hostelEmail: doc.hostelEmail,
						hostelType: doc.hostelType,
						availableRoom: doc.availableRoom,
						hostelRent: doc.hostelRent,



					};
				})
			};

			res.status(200).json(response);

		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});



//Add Hostel Owner
router.post('/addOwner', async (req, res) => {

	const { hostelName, hostelEmail, hostelPassword } = req.body;

	console.log(hostelName, hostelEmail, hostelPassword);


	try {
		const hosteluser = new hostel({ hostelName, hostelEmail, hostelPassword });
		await hosteluser.save();
		res.status(201).json({ message: "user registered successfully" });

	} catch (err) {
		console.log(err);
	}
});


//Delete Hostel 

router.get("/delete/:hostelName", (req, res, next) => {
	const id = req.params.hostelName;
	hostel
		.deleteOne({ hostelName: id })
		.exec()
		.then(doc => {
			console.log("From database", doc);

			res.status(200).json({

				status: {
					message: 'Hostel Deleted Successfully'
				}
			});

		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});


//Add user in hostel array and hostel in student

router.post('/modify', authenticate, async (req, res) => {
	try {
		const { hostelname, studentname, studentemail } = req.body;

		if (!hostelname || !studentname || !studentemail) {
			console.log('Error in contact form fields');
			return res.json({ error: "Please fill the contact form" });

		}

		const userContact = await User.findOne({ email: studentemail });
		const hostelData = await hostel.findOne({ hostelName: hostelname });
		if (userContact && hostelData) {

			const hostel2 = await hostelData.modifyDetails(studentname);
			const Users2 = await userContact.modifyhostelname(hostelname);
			await hostelData.save();
			await userContact.save();
			res.status(201).json({ message: "user Contact successfully" });
		}
		else {
			res.status(201).json({ message: "user Contact unsuccessfully" });
		}
	} catch (error) {
		console.log(error);
	}
});


module.exports = router;