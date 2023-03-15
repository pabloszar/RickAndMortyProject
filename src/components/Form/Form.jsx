import React from "react";
import Style from "./Form.module.css";
import { useState } from "react";
// import validate from "./Form.js";

const Form = ({login}) => {
    
	const [userData, setUserData] = useState({
		 username: '', 
		 password: '' 
		});

		const [errors, setErrors] = useState({
			username: '', 
		 password: '' 
		});

	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({...userData, [property]: value});

		validate({...userData, [property]: value}, errors, setErrors);
	}

	const validate = (userData, errors, setErrors) => {
		if (!userData.username) {
			setErrors({...errors, username: "Debe completar este campo"})
		} else if (userData.username > 35) {
			setErrors({...errors, username: "El correo no puede ser mayor a 35 caracteres"})
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
			setErrors({...errors, username: "Correo no válido"})
		} else {
			setErrors("");
		}
		
		if(!/^(?=.*\d).{6,10}$/.test(userData.password)) {
			setErrors({...errors, password: "La contraseña debe tener entre 6 y 10 caracteres y al menos un número"})
		} else {
			setErrors("");
		}
	}


	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	}


	return (
			<div className={Style.container}>
					<form onSubmit={handleSubmit} className={Style.form}>
							<label htmlFor="username" className={Style.label}>Username</label>
							<input className={Style.input} type="text" name="username" value={userData.username} onChange={handleChange} />
							<p className={Style.p}>{errors.username}</p>

							<label htmlFor="password" className={Style.label}>Password</label>
							<input className={Style.input} type="password" name="password" value={userData.password} onChange={handleChange} />
							<p className={Style.p}>{errors.password}</p>

							<button className={Style.button} >Login</button>
					</form>
			</div>
	);
}

export default Form;