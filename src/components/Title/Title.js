/** @format */

import React from 'react'
import { Outlet } from 'react-router-dom'

import { Radio, DatePicker } from 'antd'
import styled from 'styled-components'

const optionsWithDisabled = [
	{
		label: 'Día',
		value: 'day',
	},
	{
		label: 'Semana',
		value: 'week',
	},
	{
		label: 'Mes',
		value: 'month',
		disabled: true,
	},
]

export default function Title(props) {
	const onChange4 = ({ target: { value } }) => {
		console.log('radio4 checked', value)
	}
	return (
		<>
			<FlexContainer>
				<div>
					<TitleText>{props.title}</TitleText>
				</div>
				<div>
					<Radio.Group
						options={optionsWithDisabled}
						onChange={onChange4}
						value={'day'}
						optionType='button'
						buttonStyle='solid'
					/>
				</div>
				<div>
					<DatePicker.RangePicker placeholder={['Inicio', 'Final']} />
				</div>
			</FlexContainer>
			<Outlet />
		</>
	)
}

const TitleText = styled.span`
	font-size: 20px;
	font-family: 'Poppins-SemiBold';
`
const FlexContainer = styled.div`
	display: flex;
	margin-bottom: 15px;

	& > div:nth-child(1) {
		margin-right: auto;
	}

	& > div:nth-child(2) {
		margin-right: 20px;
	}

	& > div:nth-child(3) {
		width: 15%;
	}
`