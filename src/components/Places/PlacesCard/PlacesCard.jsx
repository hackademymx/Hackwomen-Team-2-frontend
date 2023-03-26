import { PropTypes } from 'prop-types';
import {
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography,
} from '@mui/material';
import { MyCard } from './PlacesCardStyle';

export default function PlacesCard({place}){
    return <MyCard>
    <CardMedia
      sx={{ height: 140 }}
      image={place.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {place.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {place.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`${place.address.state}, ${place.address.city}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        Más Información
      </Button>
    </CardActions>
  </MyCard>
}

PlacesCard.propTypes={
    place:PropTypes.shape([]).isRequired
}