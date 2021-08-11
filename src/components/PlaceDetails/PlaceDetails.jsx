import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({place}) => {
  const classes = useStyles()
  // Destructuring classes
  const {chip, subtitle, spacing} = classes
  // Destructuring place
  const {name, address, photo, price_level, ranking, phone, web_url, website} = place

  return (
    <Card elevation={6}>
      <CardMedia style={{height: 350}} image={photo ? photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
      title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" >{name ? name : "Restaurant near you"}</Typography>
        <Box display='flex' justifyContent="space-between">
          <Typography variant="subtitle1" >Price</Typography>
          <Typography gutterBottom variant="subtitle1" >{price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent="space-between">
          <Typography variant="subtitle1" >Ranking</Typography>
          <Typography gutterBottom variant="subtitle1" >{ranking}</Typography>
        </Box>
        {place?.awards?.map(award => (
          <Box display="flex" my={1} justifyContent="space-between" >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary" >{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({name}) => (
          <Chip key={name} size="small" label={name} className={chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={subtitle} >
            <LocationOnIcon /> {address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={spacing} >
            <PhoneIcon /> {phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(web_url, '_blank')} >Trip Advisor</Button>
        <Button size="small" color="primary" onClick={() => window.open(website, '_blank')} >Website</Button>
      </CardActions>
    </Card>
  )
}

export default PlaceDetails
