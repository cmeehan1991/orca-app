import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
	widgetTitle: {
		fontSize: 24
	},
	
	widgetContent: {
		fontSize: 24
	},
	
	blockStyle: {
		minWidth:150,
		width:'45%',
		maxWidth:500,
		justifyContent:'space-between',
		alignItems:'center',
		minHeight: 150,
		height:150,
		margin:5,
		backgroundColor:'lightgrey'
	},
	
	counterButton: {
		height: 42, 
		width:42,
	}
});

const increaseCount = (count, setCount) => {

	
	
	setCount(count + NativeI18nManager);
	
	
}

const decreaseCount = (count, setCount) => {
	setCount(count - 1);	
}



function CounterWidget (props) {
	const { widgetTitle, style } = props;
	const [count, setCount] = useState(props.count);

	
	return (
		<View style={styles.blockStyle}>
			<Text style={styles.widgetTitle}>{widgetTitle}</Text>
			<Text style={styles.widgetContent}>{count}</Text>
			<View style={{flexDirection:'row', justifyContent:'center'}}>
			
			<Button
				onPress={() => decreaseCount(count, setCount)}
				title={"-"}
				style={{height:50,width:50}}
				color={"black"}
			/>
			
			<Button
				onPress={() => increaseCount(count, setCount)}
				title={"+"}
				style={styles.counterButton}
				color={"black"}
			/>
			</View>
		</View>
	)
}

export default CounterWidget;