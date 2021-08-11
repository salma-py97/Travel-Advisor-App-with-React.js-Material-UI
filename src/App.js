import './App.css';
// Material UI
import { CssBaseline, Grid } from '@material-ui/core';

// Components
import Header from './components/Header/Header'
import List from './components/List/List';
import Map from './components/Map/Map';

// Axios
import { getPlacesData } from './api/index'
// useEffect
import { useState, useEffect } from 'react';


const App = () => {
  // State
  const [places, setPlaces] = useState([]) 
  const [coordinates, setCoordinates] = useState({}) 
  const [bounds, setBounds] = useState({}) 

  // Map and List state in App.js
  const [childClick, setChildClick] = useState(null)

  // destructuring
  const {sw, ne} = bounds

  //  useEffect
  // set coordinates to user's coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat:latitude, lng:longitude})
    })
  } , [])

  // useEffect
  useEffect(() => {
    getPlacesData(sw, ne)
      .then(data => setPlaces(data))
   }, [coordinates, sw, ne])



  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} styles={{width: '100%'}} >
        <Grid item xs={12} md={4} >
          <List places={places}  />
        </Grid>
        <Grid item xs={12} md={8} >
          <Map setCoordinates={setCoordinates}
          setBounds={setBounds} coordinates={coordinates} places={places} />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
