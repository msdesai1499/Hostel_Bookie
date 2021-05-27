import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import '../AddHostel.css';

const useStyles = makeStyles((theme) => ({
	paper: {
	  marginTop: theme.spacing(3),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(3),
	  marginBottom: theme.spacing(4),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	  
	},
	icon:
	{
	  marginLeft: theme.spacing(3),
	},
   
	
  }));
  


function AddHostel() {

	const [fileData, setFileData] = useState();
	const [hostelName, setHostelname] = useState();
	const [hostelType, setHosteltype] = useState();
	const [availableRoom, setHostelroom] = useState();
	const [hostelRent, setHostelrent] = useState();
	const fileChangeHandler = (e) => {
		setFileData(e.target.files[0]);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append('hostelName', hostelName);
		data.append('hostelType', hostelType);
		data.append('availableRoom', availableRoom);
		data.append('hostelRent', hostelRent);
		data.append('hostelImage', fileData);


		fetch("http://localhost:5000/multiple", {
			method: "POST",
			body: data,
		})
			.then((result) => {
				console.log("File sent successfully")
				alert('File sent successfully');
			})
			.catch((err) => {
				console.log(err.message);
				alert(err.message);
			});
	}
	const classes = useStyles();
	return (
		<div className="uploadform" style={{color: 'aliceblue' , marginTop:'-70px'}}>
		<Container component="main" maxWidth="xs" >
		<CssBaseline />
		<div className={classes.paper}>
		  <Typography  component="h1" variant="h5" style={{marginBottom:'16px'}}>
		  
			   FILE UPLOADING FORM
  
			   <FileCopyIcon  className={classes.icon} style={{color : "green" , fontSize : 40}}/>
		  </Typography>
		  <form onSubmit={onSubmitHandler}>
			<Grid container spacing={2}>
			  <Grid item xs={12}>
			  <TextField
			  variant="outlined"
			  required
			  fullWidth
			  id="fhname"
			  label="Hostel Name"
			  autoComplete="hostel-name"
			  autoFocus
			  name="hostelName"
			value={hostelName}
			onChange={(e) => setHostelname(e.target.value)}
			/>
			
			  </Grid>
			  <Grid item xs={12}>
			  <TextField
			  variant="outlined"
			  required
			  fullWidth
			  
			  label="Hostel Type"
			  type="text"
			  id="htype"
			  name="hostelType"
					value={hostelType}
					onChange={(e) => setHosteltype(e.target.value)}
			/>
			  </Grid>
			
			
		  
			<Grid item xs={12}>
			<TextField
			  variant="outlined"
			  required
			  fullWidth
			 
			  label="Avaiable Room"
			  type="number"
			  id="aroom"
			  name="availableRoom"
					value={availableRoom}
					onChange={(e) => setHostelroom(e.target.value)}
			  
		  />
			</Grid>
			<Grid item xs={12}>
			<TextField
			  variant="outlined"
			  required
			  fullWidth
			  
			  label="Hostel Rent (In rupees)"
			  type="number"
			  id="rent"
			  name="hostelRent"
					value={hostelRent}
					onChange={(e) => setHostelrent(e.target.value)}
			  
		  /> 
			</Grid>
			
			<Grid item xs={12}>
			  <InputLabel>Hostel Images</InputLabel>
			<TextField
			  variant="outlined"
			  fullWidth
			  name="himages"
			  label=" "
			  type="file"
			  id="himages"
			  onChange={fileChangeHandler}
			  multiple
			  inputProps={{multiple:true}}
		  /> 
			</Grid>
			</Grid>
			<Button
			  type="submit"
			  
			  fullWidth
			  variant="contained"
			  color="primary"
			  className={classes.submit}
			>
			  SUBMIT 
			</Button>
			
		  </form>
		</div>
		
	  </Container>
	  </div>
	)
}

export default AddHostel




