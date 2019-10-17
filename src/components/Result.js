import React from 'react';
import styled from 'styled-components';
import { global } from "../styles/globalStyles";
import { Graph, SunSet, Wind, Humidity, PlaceTime, Caroussel, Section } from "./";

export default function Result ( { place, dailyData, hourlyData, localTime, offsetTime } ) {

	const [ activeDay, setActiveDay ] = React.useState( 0 );
	const [ graphType, setGraphType ] = React.useState( "classic" );

	const setCurrentActive = ( e ) => {
		setActiveDay( parseInt( e.target.dataset.index ) )
	}

	return (
		<ResultStyled>

			<PlaceTime
				className="place-time"
				localTime={ localTime }
				place={ place }
			/>

			<Section
				className="daily section"
				title="DAILY"
				content={
					<Caroussel
						className="caroussel-container"
						dailyData={ dailyData }
						setCurrentActive={ setCurrentActive }
						activeDay={ activeDay }
					/>
				}
			/>

			<Section
				className="hourly section"
				title="HOURLY"
				titleContent={
					<div className="hourly-title-content">
						<button className={ graphType === "classic" ? "active" : "" } onClick={ () => setGraphType( "classic" ) } >Classic</button>
						<button className={ graphType === "precip" ? "active" : "" } onClick={ () => setGraphType( "precip" ) }  >Precipitation</button>
					</div>
				}
				content={
					<Graph
						className="graph-container"
						hourlyData={ hourlyData }
						activeDay={ activeDay }
						graphType={ graphType }
					/>
				}
			/>

			<Section
				className="details section"
				title="DAY DETAILS"
				content={
					<div className="details-container">
						<Humidity
							className="details-sub-section"
							dailyData={ dailyData }
							hourlyData={ hourlyData }
							activeDay={ activeDay }
							offsetTime={ offsetTime }
						/>
						<Wind
							className="details-sub-section"
							hourlyData={ hourlyData }
							activeDay={ activeDay }
							offsetTime={ offsetTime }
						/>
						<SunSet
							className="details-sub-section"
							dailyData={ dailyData }
							activeDay={ activeDay }
							offsetTime={ offsetTime }
						/>
					</div>
				}
			/>

		</ResultStyled >
	)
}

const ResultStyled = styled.div`
	font-family: ${ global.fontFamily.ternary };
	color: ${ global.fontColor.dark };
	padding: 2rem 20vw 0 20vw;
	flex-grow: 1;
		
	@media (max-width: 1280px){
		padding: 2rem 15vw 0 15vw;
	}
	
	@media (max-width: 1024px){
		padding: 2rem 8vw 0 8vw;
	}

	.hourly-title-content button {
		background: none;
		border: none;
		padding: 0.2rem 1rem;
		cursor: pointer;
		font-family:${ global.fontFamily.secondary };
		color: ${ global.fontColor.dark + "bb" };
		font-size: 0.9rem;
		border-radius: 4px;
		margin: 0 0.2rem;
		min-width: 6rem;
		outline: none;

		&:hover, &:focus {
			color: ${ global.fontColor.dark };
			background: #ffffff40;
		}

		&.active {
			color: ${ global.fontColor.dark + "dd" };
			background: #ffffffcc;
			box-shadow: 0 0 5px 0 #00000020;
		}
	}

	.details-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1rem;
		width: 100%;
		min-height: 9rem;

		& > .details-sub-section {
			border-top: 1px solid ${global.fontColor.dark + "70" };
		}

		.loading-container {
			position: relative;

			.loading-img {
				height: 40px;
			}
		}
	}
`
