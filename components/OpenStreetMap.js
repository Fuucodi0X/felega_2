'use client'

import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker,Tooltip} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


const Map2 = (prop) => {
  const {checkpoints} = prop.checkpoints
  let markers = []
  let imgs = []
  for(let i of checkpoints){
    markers.push(i.position)
    imgs.push(i.img)
  }

  const [center, setCenter] = useState(markers[0])
  const ZOOM_LEVEL = 9

const mapRef = useRef()
  return (
    <>
      <div className='container'>
        <div className='container'>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='border-double border-4 border-r-8 border-black flex flex-row   gap-5'>
              <div className='w-2/4 !relative flex flex-col'>
                 <div className="btm-nav w-fit">
                    <button> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> </button>
                    <button className="active">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </button>
                  </div>
                <div>{checkpoints[0].desc}</div>
                </div>
              <MapContainer className='w-2/4' center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                { location.loaded && !location.error}
                { markers.map((item,index)=>(
                      <Marker key={`marker-${index}`} position={item} >
                      </Marker>
                    ))
                }
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map2
