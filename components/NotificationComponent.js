import React, { useState } from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
	notification: {
		textAlign:'center',
		fontSize:18,
	},
	error: {
		backgroundColor:'red',
		color:'white',
		
	},
	success: {
		backgroundColor: 'green', 
		color: 'white', 
	}, 
	warning: {
		backgroundColor: 'yellow', 
		color: 'black'
	}
})

function Notification (props) {
	const {type, message} = props;

	return (
		<View>
			<Text style={[styles.notification, type == 'error' ? styles.error : type == 'success' ? styles.success : type == 'warning' ?? styles.warning]}>{message}</Text>
		</View>
	)
}

export default Notification