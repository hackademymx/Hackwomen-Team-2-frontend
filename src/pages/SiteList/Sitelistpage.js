import React from 'react'
import { SitesRender } from './Components'
const data = require('../../services/data.json')

export default function SiteList() {

  return (
    <>
      <SitesRender places={data}/>
    </> 
  );
}

