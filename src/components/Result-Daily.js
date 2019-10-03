import React from 'react';
import { Caroussel } from "./";


function Daily ( { dailyData } ) {

	return (
		<div className="daily" >
			<h4>DAILY</h4>
			<Caroussel dailyData={ dailyData } />
		</div >
	)
}

export default Daily;