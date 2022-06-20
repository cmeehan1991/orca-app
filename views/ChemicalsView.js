import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator, SectionList, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import GLOBALS from '../Constants.js';

const getChemicals = (facility, index, setIsLoading) => {

	setIsLoading(true);
	let data = new FormData();
	data.append('facility_id', facility);
	
	fetch(GLOBALS.endpoints.rest_base + '/chemicals/get-all', {
		method: 'post', 
		body: data,
	}).then((response) => response.json())
	.then((json) => {
		 
		console.log(json);
		setIsLoading(false);
		
	})
	.catch((error) => {
		console.log("Chemicals error");
		console.log(error);
	});
		
}

const getFacilities = (setFacilities, setIsLoading) => {
	setIsLoading(true);
	
	fetch(GLOBALS.endpoints.rest_base + '/facilities/get-all', {
		method: 'post'
	}).then((response) => response.json())
	.then((json) => {
		console.log(json);
		setFacilities(json);
	})
	.catch((error) => {
		console.log("facilities error");
		console.log(error);
	});
	
	setIsLoading(false);
	
	getChemicals(1, null, setIsLoading);
}

const styles = StyleSheet.create({
	mainViewStyle: {
		flexDirection: 'column', 
		justifyContent: 'center',
		height:'100%',
	},
	
	childViewStyle: {
		flexDirection: 'column', 
		justifyContent:'flex-start', 
		height:'100%',
		alignItems:'center'
	}
})

function ChemicalsView (props) {
	const [facility, setFacility] = useState();
	const [facilities, setFacilities]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(function(){
		getFacilities(setFacilities, setIsLoading);
	}, [])
	
	return (
		<View style={styles.mainViewStyle}>
			{ isLoading === true && 
				<ActivityIndicator 
					size='large'
					color='#0000ff'
				/>
			}
			
			{ isLoading === false && 
				<View style={styles.childViewStyle}>
					<SelectDropdown 
						data={facilities}
						onSelect={(selectedItem, index) => getChemicals(selectedItem, index, setIsLoading)}
						buttonTextAfterSelection={(selectedItem, index) => {
							// text represented after item is selected
							// if data array is an array of objects then return selectedItem.property to render after item is selected
							return selectedItem.label
						}}
						rowTextForSelection={(item, index) => {
							// text represented for each item in dropdown
							// if data array is an array of objects then return item.property to represent item in dropdown
							return item.label
						}}
					/>
					<SectionList 
						sections={data}
					/>
				</View>
			}
		</View>
	);
}

export default ChemicalsView;