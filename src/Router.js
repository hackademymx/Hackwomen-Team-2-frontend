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
import Create from './pages/Create'
import EditPlace from './components/EditPlace/Edit';


export default function Router() {
	return (

		<BrowserRouter>
			<Navbar>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sites' element={<SiteList />} />
					<Route path='/create' element={<Create />} />
					<Route path='/edit' element={<EditPlace />} />
				</Routes>
			</Navbar>
		</BrowserRouter>
		
	)
}
