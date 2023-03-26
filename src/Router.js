import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
  } from "react-router-dom";
import { Title, Navbar } from './components'

import Home from './pages/Home'
import SiteList from './pages/SiteList'


export default function Router() {
	return (

		<BrowserRouter>
			<Navbar>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/sites' element={<SiteList />} />
				</Routes>
			</Navbar>
		</BrowserRouter>
		
	)
}
