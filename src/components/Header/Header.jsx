import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react'


import useStyles from './styles'

const Header = ({setCoordinates}) => {
  const classes = useStyles()
  const {toolbar, title, search, searchIcon, inputRoot, inputInput} = classes
  // State
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({lat, lng})
  }


  return (
    <AppBar position="static">
      <Toolbar className={toolbar} >

        <Typography variant="h5" className={title} >Travel Advisor</Typography>
        <Box display="flex" alignItems="center" >
          <Typography variant="subtitle1" className={title} >Explore New Places</Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={search} >
              <div className={searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{root: inputRoot, input:inputInput}} />
            </div>
          </Autocomplete >
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
