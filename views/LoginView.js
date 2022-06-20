import React, {useState} from "react";
import {View, TextInput, Button, Text, LogBox} from "react-native";
import Notification from '../components/NotificationComponent.js';

const submitLoginForm = (userLogin, userPassword, setUser, setError) => {
	console.log(userLogin);
	console.log(userPassword);
	
	let data = new FormData(); 
	data.append('userLogin', userLogin);
	data.append('userPassword', userPassword);

	
	fetch('http://localhost:8080/users/login',{
		method: 'post',
		body: data,
	})
	.then((response) => response.json())
	.then((json) => {
		console.log('response');
		console.log(json);
		if( json.IS_LOGGED_IN === true){
			setUser(json);
		}else{
			setError(true);
		}
	})
	.catch( (error) => {
		console.log("Catch");
		console.log(error);
	});
}

const inputStyle = {
	fontSize: 18, 
	height:32,
	borderBottomWidth: 1,
	borderBottomColor:'lightgrey',
	underlineColor: 'transparent'
};


function LoginView ( props ) {
	const{setUser} = props;
	const[userLogin, setUserLogin] = useState();
	const[userPassword, setUserPassword] = useState();
	const [error, setError] = useState(false);
	
	return (
		<View style={{
			flexDirection:"column",
			height:"100%",
			justifyContent:"center",
			marginLeft:"10%",
			marginRight:"10%"
		}}>	
			{error && 
				<Notification 
					type='error' 
					message='Invalid Login Credentials' />
			}
			<Text>Email</Text>
			<TextInput
				style={inputStyle}
				autoComplete="email"
				onChangeText={setUserLogin}
				value={userLogin}
				autoCapitalize="none"
			/>
			<Text>Password</Text>
			<TextInput 
				style={inputStyle}
				onChangeText={setUserPassword}
				value={userPassword}
				secureTextEntry={true}
				autoCapitalize="none"
			/>
			<Button 
				color="#000000"
				title="Sign In"
				onPress={() => submitLoginForm(userLogin, userPassword, setUser, setError)}
			/>
		</View>
	);
}

export default LoginView;