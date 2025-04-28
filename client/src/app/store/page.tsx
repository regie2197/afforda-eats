"use client";

import Image from "next/image";
import { Box, Container, Typography, Card, CardContent, Divider, Grid, ImageList, ImageListItem, Button, Rating, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React, { useEffect, useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBarComponent from "../../components/AppBarComponent";
import axios from 'axios';


function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

interface CardData {
    title: string;
    description: string;
    rating: number;
}

interface storeData {
    name: string;
    tags: string;
    about: string;
    meal: {
        name: string;
        type: string;
    };
    location: string;
    time: string;
    rating: number;
}


export default function Landing() {

    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [storeData, setStoreData] = useState<storeData>({
        name: 'Affordaeats Jollijeep',
        tags: 'Masarap • Mesherep • Meisirip',
        about: 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary',
        meal: {
            name: '',
            type: '',
        },
        location: '8th Floor Adamson Center, 121 L.P Leviste St. Salcedo Village, Makati City, 1227 Philippines',
        time: 'Mon-Fri, 8:00am - 5:00pm',
        rating: 3,
    });
    const [error, setError] = useState<string | null>(null);

    const [rating, setRating] = useState<number | null>(5);

    const [feedback, setFeedback] = useState('');

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [mapUrl, setMapUrl] = useState('');

    useEffect(() => {
        if (storeData) {
            const encodedAddress = encodeURIComponent(storeData.location);
            const url = 'https://maps.google.com/maps?q=' + encodedAddress  + '&t=&z=13&ie=UTF8&iwloc=&output=embed'
            setMapUrl(url);
        }
    }, [])

    

    const handleSubmit = () => {
        const reviewData = {
            rating: rating ?? 0,
            feedback,
        };


        axios.post('https://api.example.com/reviews', reviewData)
            .then(response => {
                console.log('Review submitted: ', response.data);
                handleClose();
            })
            .catch(error => {
                console.error('Error submitting review:', error)
            })

    }


    useEffect(() => {
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

        axios.get('https://api.example.com/store')
            .then(response => {
                setStoreData(response.data);
            })
            .catch(error => {
                setError('Error fetching store data: ' + error.message);
            });
    }, []);



    return (
        <React.Fragment>
            <AppBarComponent />
            <Box sx={{ bgcolor: '#f3f4f6', minHeight: '100vh' }}>

                <Box sx={{ position: 'relative', width: '100%', height: 256 }}>
                    <Image
                        src="https://d86ddjz7lz2d4.cloudfront.net/blog/wp-content/uploads/2018/03/hoppler-jollijeeps.jpg"
                        alt="Picture of the Webpage"
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>

                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', maxWidth: '1200px', gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column' }, width: { xs: '100%', md: '40%' }, gap: 2, height: '100%' }}>
                            <Card sx={{ flex: 1, p: 2 }}>
                                <CardContent>
                                    <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red' }}>
                                        {storeData.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'gray.400', pt: 1, pb: 1 }}>
                                        {storeData.tags}
                                    </Typography>
                                </CardContent>
                                <Divider sx={{ my: 2 }} />
                                <CardContent>
                                    <Typography variant="body1" sx={{ fontWeight: 700, color: 'gray', pt: 1, pb: 1 }}>
                                        About
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                        {storeData.about}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ flex: 1, p: 2 }}>
                                <CardContent>
                                    <Grid container>
                                        <Grid xs={12} md={12}>
                                            <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red', mb: 2 }}>
                                                Menu
                                            </Typography>
                                        </Grid>
                                        {/* <Grid xs={6} md={6}>
                                            <Typography variant="body1" sx={{ fontWeight: 700, color: 'gray', pt: 1, pb: 1 }}>
                                                Type of Meal
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 1
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 2
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 3
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 4
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 5
                                            </Typography>
                                        </Grid>
                                        <Grid xs={6} md={6}>
                                            <Typography variant="body1" sx={{ fontWeight: 700, color: 'gray', pt: 1, pb: 1 }}>
                                                Type of Meal
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 1
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 2
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 3
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 4
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                                Meal 5
                                            </Typography>
                                        </Grid> */}
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card sx={{ flex: 1, p: 2 }}>
                                <CardContent>
                                    <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red', mb: 2 }}>
                                        Photos
                                    </Typography>
                                    <ImageList sx={{ height: 680 }} variant="quilted" cols={4} rowHeight={121}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                                <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>

                            <Card sx={{ p: 2, height: '100%' }}>
                                <CardContent>
                                    <Grid>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
                                            <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red' }}>
                                                Overall Rating
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', alignItems: 'left', pt: 2 }}>
                                        <Rating name="half-rating" value={storeData.rating} precision={1} readOnly />
                                        <Typography variant="body2" sx={{ ml: 1, fontSize: 20 }}>
                                            {storeData.rating} out of 5 stars (24 reviews)
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </Card>

                            <Card sx={{ p: 2, justifyContent: 'center', alignContent: 'center' }}>
                                <CardContent>
                                    <Grid>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
                                            <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red' }}>
                                                Location & Hours
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', alignItems: 'left', alignContent: 'center', pt: 2 }}>
                                        <iframe src={mapUrl} width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </Grid>
                                    <Grid container>
                                        <Grid xs={6} md={6}>
                                            <Typography variant="body2" sx={{ fontWeight: '800', color: 'red', mt: 1, p: 1 }}>
                                                Location
                                            </Typography>
                                        </Grid>
                                        <Grid xs={6} md={6}>
                                            <Typography variant="body2" sx={{ fontWeight: '800', color: 'red', mt: 1, p: 1 }}>
                                                Operating Hours
                                            </Typography>
                                        </Grid>
                                        <Grid xs={6} md={6}>
                                            <Typography variant="body2" sx={{ m: 1 }}>
                                                {storeData.location}
                                            </Typography>
                                        </Grid>
                                        <Grid xs={6} md={6}>
                                            <Typography variant="body2" sx={{ m: 1 }}>
                                                {storeData.time}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Card>

                            <Card sx={{ p: 2, justifyContent: 'center', alignContent: 'center' }}>
                                <Grid sx={{ p: 2, justifyContent: 'center', alignContent: 'center' }}>

                                    <Grid container>
                                        <Grid xs={8} md={8}>
                                            <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red' }}>
                                                Latest Reviews
                                            </Typography>
                                        </Grid>
                                        <Grid display="flex" justifyContent="end" alignItems="center" xs={4} md={4}>
                                            <Button onClick={handleClickOpen} variant="contained" sx={{ color: 'white', bgcolor: 'red' }}>Create Review</Button>
                                        </Grid>
                                    </Grid>


                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogTitle>Create a Review</DialogTitle>
                                        <DialogContent>
                                            <Grid container spacing={2} alignItems="center">
                                                {/* Rating Section */}
                                                <Grid item xs={2}>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                        Rating:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Rating name="half-rating" defaultValue={5} precision={1} value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
                                                </Grid>

                                                {/* Feedback Section */}
                                                <Grid item xs={12}>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                        Feedback:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextareaAutosize
                                                        aria-label="minimum height"
                                                        minRows={8}
                                                        maxRows={18}
                                                        style={{
                                                            width: "95%",
                                                            padding: "10px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "4px",
                                                            resize: "none",
                                                        }}
                                                        maxLength={500}
                                                        value={feedback}
                                                        onChange={(event) => setFeedback(event.target.value)}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleSubmit} autoFocus>
                                                Submit
                                            </Button>
                                            <Button onClick={handleClose}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>

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
                                                    <Rating name="half-rating" value={card.rating} precision={1} readOnly />
                                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                                        {card.rating} stars out of 5
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    ))}



                                </Grid>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];