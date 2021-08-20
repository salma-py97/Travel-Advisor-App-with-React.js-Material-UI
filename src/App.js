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
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({}) 
  const [bounds, setBounds] = useState({}) 

  const [isLoading, setIsLoading] = useState(false)

  // List state
	const [type, setType] = useState("restaurants")
	const [rating, setRating] = useState("")

  // Map and List state in App.js
  const [childClicked, setChildClicked] = useState(null)

  // destructuring
  const {sw, ne} = bounds

  //  useEffect
  // set coordinates to user's coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat:latitude, lng:longitude})
    })
  } , [])

  // useEffect to fetch data
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true)
  
      getPlacesData(type, sw, ne)
      .then(data => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setIsLoading(false)
      })
    }
  }, [type, sw, ne])

  console.log({places})
  console.log({filteredPlaces})

  // useEffect for rating
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)
    setFilteredPlaces(filteredPlaces)
  }, [rating])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} styles={{width: '100%'}} >
        <Grid item xs={12} md={4} >
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8} >
          <Map setCoordinates={setCoordinates}
          setBounds={setBounds} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked} />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
