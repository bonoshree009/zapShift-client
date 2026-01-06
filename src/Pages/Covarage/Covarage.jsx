import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Covarage = () => {
    const position = [24.3745,88.6042]
    const areadata = useLoaderData()
    const mapref = useRef()
    console.log(areadata)
    const handlesearch =(e)=>{
        e.preventDefault();
         const location = e.target.location.value;
         const district = areadata.find(dis => dis.district.toLowerCase().includes(location.toLowerCase()))
           if(district){
            const coo =[district.latitude,district.longitude];
            mapref.current.flyTo(coo,12)
           }

    }

    //leaflet css import korte hobe.map container ante hobe and height dite hobe.data fetch kore position a lati long bosate hobe.
    //map fly er jonno form er vitore search field rakhte hobe.map constainer a ref dite hobe.handlesearch a flyto() add korte hobe

    return (
        <div >
            <h1 className='text-4xl font-bold text-center my-6 '>We Are Available In 64 Districs</h1>
             <form onSubmit={handlesearch}>
                <div className='my-6 text-center'>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" placeholder="Search" name='location'/>

     </label>
            </div>
             </form>

            <div className='w-full h-150 px-4'>

                <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='h-50 md:h-150' ref={mapref}>

                  <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                 {
                    areadata.map((area ,index)=>  <Marker key ={index} position={[area.latitude,area.longitude]}>
                   <Popup> <strong>{area.district}</strong>:{area.covered_area.join(', ')}</Popup>
                  </Marker>)
                 }
               </MapContainer>
            </div>
        </div>
    );
};

export default Covarage;