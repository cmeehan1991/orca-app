import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

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
	}
});

const navigateTo = ( page, navigation ) => {

	navigation.navigate({name: page});
}

function InfoWidget (props) {
	const { widgetTitle, style, navigationTarget, navigation } = props;	
	const [count, setCount] = useState(props.count);

	return (
		<TouchableOpacity style={styles.blockStyle} onPress={() => navigateTo(navigationTarget, navigation)}>
			<Text style={styles.widgetTitle}>{widgetTitle}</Text>
			<View style={{flexDirection:'column', justifyContent:'center', flexGrow:1, flexBasis:1}}>
				<Text style={styles.widgetContent}>{count}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default InfoWidget;