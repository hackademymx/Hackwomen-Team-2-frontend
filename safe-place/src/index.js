/** @format */

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from 'antd'

import { createGlobalStyle } from 'styled-components'

import './style.less'

import Router from './Router.js'

import PoppinsRegular from './fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
	src: url(${PoppinsRegular});
}

@font-face {
  font-family: 'Poppins-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
	src: url(${PoppinsSemiBold});
}

body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Poppins-Regular';
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Layout>
			<GlobalStyle />
			<Router />
		</Layout>
	</StrictMode>
)
