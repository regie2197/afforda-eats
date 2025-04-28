import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, Typography, Box, Rating } from '@mui/material';

// Define the type for card data
interface CardData {
  title: string;
  description: string;
  rating: number;
}

const CardsDisplay: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.example.com/cards')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCardsData(response.data);
        } else {
          setError('API response is not an array');
        }
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} sx={{ border: 1, borderColor: 'gray.200', borderRadius: 2, boxShadow: 3, m: 2 }}>
          <CardContent>
            <Grid container>
              <Grid xs={1} md={1} sx={{ ml: 1, mt: 0.5 }}>
                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Grid>
              <Grid xs={9} md={9}>
                <Typography variant="h6" component="div" sx={{ color: 'gray.800' }}>
                  {card.title}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: 'gray.600', mt: 1 }}>
              {card.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
              <Rating name="half-rating" defaultValue={card.rating} precision={1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {card.rating} stars out of 5
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsDisplay;
