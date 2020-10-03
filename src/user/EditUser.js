import React, {useState, useEffect} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import axios from "axios";

const EditUser = () => {

	const [inputValue, setInputValue] = useState({
		name: "",
		username:"",
		email:"",
		website:"",
	});

	const history = useHistory();

	const {id} = useParams();

	useEffect(()=> {
		updateData();
	},[]);

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
		await axios.put(`http://localhost:3001/users/${id}`, inputValue);
		history.push("/");
	}

	const updateData = async () => {
		const result = await axios.get(`http://localhost:3001/users/${id}`);
		setInputValue(result.data);
	}

	return (
		<>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h1 className="text-center">Edit User</h1>
						<form className="mt-3" onSubmit={formSubmit}>
						  <div className="form-group">
						    <label>Name</label>
						    <input type="text" value={inputValue.name} name="name" className="form-control" onChange={inputData} />
						  </div>

						  <div className="form-group">
						    <label>User Name</label>
						    <input type="text" value={inputValue.username} name="username" className="form-control" onChange={inputData} />
						  </div>

						  <div className="form-group">
						    <label>Email address</label>
						    <input type="text" value={inputValue.email} name="email" className="form-control" onChange={inputData} />
						  </div>

						  <div className="form-group">
						    <label>Website</label>
						    <input type="text" value={inputValue.website} name="phone" className="form-control" onChange={inputData} />
						  </div>
						  <div className="text-center">
						  	<button type="submit" className="btn btn-primary">Update</button>
						  	<Link type="button" to="/" className="btn btn-secondary ml-3">Back</Link>
						  </div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default EditUser;