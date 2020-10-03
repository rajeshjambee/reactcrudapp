import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const ViewUser = () => {

	const [users, setUsers] = useState({
		name:"",
		username:"",
		email:"",
		phone:"",
		website:"",
	})

	const {id} = useParams();

	useEffect(()=>{
		dataLoad();
	},[])

	const dataLoad = async ()=> {
		const result = await axios.get(`http://localhost:3001/users/${id}`)
		setUsers(result.data);
	}
	return (
		<>	
			<div className="container py-5 userview">
				<div className="row">
					<div className="col-md-6 mx-auto shadow border p-5">
						<h1> User Id is {users.id}</h1>
						<ul>
							<li>Name: <span>{users.name}</span></li>
							<li>User Name: <span>{users.username}</span></li>
							<li>Email Address: <span>{users.email}</span></li>
							<li>Phone: <span>{users.phone}</span></li>
							<li>Website: <span>{users.website}</span></li>
						</ul>

						<div className="text-center mt-3">
						  	<Link type="button" to="/" className="btn btn-secondary ml-3">Back</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ViewUser;