import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CounterWidget from './CounterWidget.js';
import InfoWidget from './InfoWidget.js';

const styles = StyleSheet.create({
	gridStyle: {
		flexDirection:'row', 
		flexWrap: 'wrap',
		flexGrow: 1,
		justifyContent: 'space-evenly',
	},
	
	
	notification: {
		flexDirection:'column',
		backgroundColor: '#ff0000',
		justifyContent: 'center',
		textAlign: 'center',
		color: 'white',
	}
});



const handleTouchEvent = (section) => {
	console.log(section);
}

function GridDashboard(props){
	const {navigation} = props;
	const [notification, setNotification] = useState('Notification');

	
	return (
		<View>
		{ notification && 
			<Text style={styles.notification}>Notification</Text>
		}
			<ScrollView>
				<View style={styles.gridStyle}>
					<InfoWidget
						style={styles.gridColumn} 
						count={0}
						widgetTitle={"Chlorine"}
						navigationTarget={"Chemicals"}
						navigation={navigation}/>
					
					<InfoWidget
						style={styles.gridColumn} 
						count={0}
						widgetTitle={"pH"}
						navigationTarget={"Chemicals"}
						navigation={navigation}/>
					
					<CounterWidget
					style={styles.gridColumn} 
					count={0}
					widgetTitle={"Bather Count"}/>

				</View>
			</ScrollView>
		</View>
	)
}

export default GridDashboard