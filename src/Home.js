import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams, useHistory} from "react-router-dom";

const Home = () => {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadusers();
	},[]);

	const loadusers = async () => {
		const result = await axios.get("http://localhost:3001/users");
		setUsers(result.data.reverse());
	}

	const deleteuser = async (id) => {
		await axios.delete(`http://localhost:3001/users/${id}`);
		loadusers();
	}

	return (
		<>	
			<div className="p-3">
				<div className="text-right my-4">
					<Link to="/user/adduser" className="btn btn-primary">Add User</Link>
				</div>
				<table className="table border shadow">
				  <thead className="thead-dark">
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Name</th>
				      <th scope="col">User Name</th>
				      <th scope="col">Email</th>
				      <th>Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    {users.map((user, index) => (
				    		<tr>
						      <td> {index + 1} </td>
						      <td> {user.name} </td>
						      <td> {user.username} </td>
						      <td> {user.email} </td>
						      <td>
						      	   <Link className="btn btn-primary mr-2" to={`/user/viewuser/${user.id}`}>View</Link>
						      	   <Link className="btn btn-secondary mr-2" to={`/user/edituser/${user.id}`}>Edit</Link>
						      	   <button className="btn btn-danger" onClick={()=> deleteuser(user.id)}>Delete</button>
						      </td>
						    </tr>
				    	))}
				  </tbody>
				</table>
			</div>
		</>
	)
}

export default Home;