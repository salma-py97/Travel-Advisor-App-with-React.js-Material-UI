import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
import { mapStyles } from './mapStyles'


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
  // useStyles hook
  const classes = useStyles()
  // destructuring
  const {mapContainer, paper, markerContainer, pointer} = classes
  // media queries
  const isMobile = useMediaQuery('(max-width: 600px)')

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
        options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        // snazzymaps.com to styles maps
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)} 
      >

        {/* display the restaurants on the map */}
        {places?.map((place, i) => (
          <div className={markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i} >
            {isMobile ? 
            (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            )
            :
            (
              <Paper elevation={3} className={paper} >
                <Typography className="" variant="subtitle2" gutterBottom >
                  {place.name}
                </Typography>
                <img className={pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />

                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )
            
            
            }
          </div>
        ))}

            {/* weather display */}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon} >
            <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
          </div>
        ) )}
      </GoogleMapReact>
    </div>
  )
}

export default Map
