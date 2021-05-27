
const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
	hostelName: {
		type: String,
		required: true
	},
	hostelEmail: {
		type: String,
		required: true
	},
	hostelPassword: {
		type: String,
		required: true
	},
	hostelType: {
		type: String,
		required: false
	},
	availableRoom: {
		type: String,
		required: false
	},
	hostelRent: {
		type: String,
		required: false
	},
	hostelImage: {
		type: Array,
		required: false
	},
	hostelStudents: {
		type: Array,
		required: false
	}
});



// stored the message 

hostelSchema.methods.addDetails = async function (hostelType, availableRoom, hostelRent, hostelImage) {
	try {
		this.hostelType = hostelType;
		this.availableRoom = availableRoom;
		this.hostelRent = hostelRent;
		this.hostelImage = hostelImage;
		await this.save();
		return this.messages;
	} catch (error) {
		console.log(error);
	}
}

hostelSchema.methods.modifyDetails = async function (studentname) {
	try {
		this.hostelStudents.push(studentname);
		await this.save();
		return this.messages;
	} catch (error) {
		console.log(error);
	}
}

const hostel = mongoose.model('Hostel', hostelSchema);

module.exports = hostel;
