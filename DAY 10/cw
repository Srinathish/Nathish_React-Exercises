import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel Explorer
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '1rem', marginTop: '2rem' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 Travel Explorer. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const DestinationCard = ({ destination }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography variant="h6">{destination.name}</Typography>
        <Typography variant="body2">{destination.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
import React from 'react';
import { Grid, Container } from '@mui/material';
import DestinationCard from '../components/DestinationCard';

const destinations = [
  {
    name: 'Paris',
    description: 'The city of lights and love.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'New York',
    description: 'The city that never sleeps.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Tokyo',
    description: 'A blend of tradition and modernity.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Destinations = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {destinations.map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Destinations;
