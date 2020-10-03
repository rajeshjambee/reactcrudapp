import React, {useState} from "react";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";

const AddUser = () => {

	const [inputValue, setInputValue] = useState({
		name: "",
		username:"",
		email:"",
		website:"",
	});

	const history = useHistory();

	const inputData = (e) => {
		const {name, value} = e.target;

		setInputValue((myData)=>{
			return {
				...myData,
				[name]: value,
			}
		})
	}

	const formSubmit = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3001/users", inputValue);
		history.push("/");
	}

	return (
		<>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-6 mx-auto shadow border p-5">
						<h1 className="text-center">Add User</h1>
						<form className="mt-3" onSubmit={formSubmit}>
						  <div className="form-group">
						    <label>Name</label>
						    <input type="text" name="name" className="form-control" onChange={inputData} />
						  </div>

						  <div className="form-group">
						    <label>User Name</label>
						    <input type="text" name="username" className="form-control" onChange={inputData} />
						  </div>

						  <div className="form-group">
						    <label>Email address</label>
						    <input type="text" name="email" className="form-control" onChange={inputData} />
						  </div>
						  <div className="form-group">
						    <label>Phone</label>
						    <input type="number" name="phone" className="form-control" onChange={inputData} />
						  </div>
						  <div className="form-group">
						    <label>Website</label>
						    <input type="text" name="website" className="form-control" onChange={inputData} />
						  </div>
						  <div className="text-center">
						  	<button type="submit" className="btn btn-primary">Submit</button>
						  	<Link type="button" exact to="/" className="btn btn-secondary ml-3">Back</Link>
						  </div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddUser;