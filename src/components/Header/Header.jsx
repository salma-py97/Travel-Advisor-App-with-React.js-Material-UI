import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const {toolbar, title, search, searchIcon, inputRoot, inputInput} = classes
  return (
    <AppBar position="static">
      <Toolbar className={toolbar} >

        <Typography variant="h5" className={title} >Travel Advisor</Typography>
        <Box display="flex" alignItems="center" >
          <Typography variant="subtitle1" className={title} >Explore New Places</Typography>
          {/* <Autocomplete> */}
            <div className={search} >
              <div className={searchIcon}>
                {/* <SearchIcon /> */}
              </div>
              <InputBase placeholder="Search..." classes={{root: inputRoot, input:inputInput}} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
