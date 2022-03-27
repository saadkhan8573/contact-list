import React from 'react'
import Navbar from './components/navbar/Navbar'
import Routers from './components/routers/Routers'
import { ToastContainer } from 'react-toastify';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'react-toastify/dist/ReactToastify.css';
// import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <>
      {/* <div className="w-full h-96">
        <MapContainer
          className="markercluster-map"
          center={[51.0, 19.0]}
          zoom={4}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div> */}
      <ToastContainer position="top-center" autoClose={2000} />
      <Navbar />
      <Routers />
    </>
  )
}

export default App
