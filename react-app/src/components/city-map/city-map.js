import React from 'react';

const CityMap = (props) => {
  switch(props.display) {

    case 'hide':
      return <div />

    case 'show':
    let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.rawData.latitude}%2c%20${props.rawData.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`;
      return (
        <>
          <img id="map" src={mapURL} alt="Map of search query" />
          <h2 className="query-placeholder">Here are the results for {props.searchContent}</h2>
        </>
      );

    default: return <div>Error displaying City Map</div>
  }   
}

export default CityMap;