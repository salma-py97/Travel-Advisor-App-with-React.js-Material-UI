import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles'


const Map = ({setCoordinates, setBounds, coordinates}) => {
  // useStyles hook
  const classes = useStyles()
  // destructuring
  const {mapContainer} = classes
  // media queries
  const isMobile = useMediaQuery('(min-width: 600px)')
  return (
    <div className={mapContainer}>
      {/* to get the API key go to : https://console.cloud.google.com/projectcreate?pli=1
      give name to project
      click create
      on the top left click the drop down menu and select your project
      on the side menu on the left click API & services and click dashboard
      search for maps
      click on Maps Javascript API
      click enable
      click again on Map Javascript API
      on the side menu on the left click credentials
      click create credentials
      click API Key */}
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyC_3Kd3aOAKJBO6PCdUQMSThVQdsWEhdOw' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={''} 
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map
