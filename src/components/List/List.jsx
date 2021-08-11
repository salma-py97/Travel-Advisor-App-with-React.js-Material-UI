import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card} from '@material-ui/core'
import {useState} from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = ({places}) => {
  const classes = useStyles()

  const {formControl, selectEmpty, loading, container, marginBottom, list} = classes

  // State
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  return (
    <div className={container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select value={type} label="type" labelId="type" onChange={(e) => setType(e.target.value)} >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={formControl}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select value={rating} label="rating" labelId="rating" onChange={(e) => setRating(e.target.value)} >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>


      <Grid container spacing={3} className={list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List

// places.length > 0 && 
