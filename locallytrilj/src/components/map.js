import React from "react"
import GoogleMapReact from "google-map-react"

const Marker = () => (
  <div>
    <img src="/placeholder.png" alt="slika" className="pin" />
  </div>
)

const Map = ({ lat, long }) => {
  const zoom = 12
  const location = {
    lat: lat,
    lng: long,
  }

  return (
    <div className="map-wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
          language: "en",
        }}
        defaultCenter={location}
        draggable={false}
        defaultZoom={zoom}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  )
}

export default Map
