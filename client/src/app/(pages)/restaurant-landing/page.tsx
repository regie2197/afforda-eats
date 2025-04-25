import Image from "next/image";
import { Box, Container, Typography, Card, CardContent, Divider, Grid, ImageList, ImageListItem, Button } from '@mui/material';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}




export default function Landing() {
    return (
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
                                    Restaurant Name
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray.400', pt: 1, pb: 1 }}>
                                    Restaurant Tags
                                </Typography>
                            </CardContent>
                            <Divider sx={{ my: 2 }} />
                            <CardContent>
                                <Typography variant="body1" sx={{ fontWeight: 700, color: 'gray', pt: 1, pb: 1 }}>
                                    About
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                    Paragraph 1
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                    Paragraph 2
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray', pt: 1, pb: 1 }}>
                                    Paragraph 3
                                </Typography>
                            </CardContent>
                            {/* <Divider sx={{ my: 2 }} />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'gray.950', pt: 1, pb: 1 }}>
                                    About
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray.400', pt: 1, pb: 1 }}>
                                    Placeholder 1
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray.400', pt: 1, pb: 1 }}>
                                    Placeholder 2
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'gray.400', pt: 1, pb: 1 }}>
                                    Placeholder 3
                                </Typography>
                            </CardContent> */}
                        </Card>
                        <Card sx={{ flex: 1, p: 2 }}>
                            <CardContent>
                                <Grid container>
                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red', mb: 2 }}>
                                            Menu
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, md: 6 }}>
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
                                    <Grid size={{ xs: 6, md: 6 }}>
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
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <Typography variant="body2" sx={{ ml: 1, fontSize: 20 }}>
                                        4.8 out of 5 stars (24 reviews)
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15447.105331519!2d121.02450585000001!3d14.55477925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c95b0494f8cf%3A0x38bcb0d8f0bb8b77!2sOne%20Ayala%20(Ayala%20Malls)!5e0!3m2!1sen!2sph!4v1745474030767!5m2!1sen!2sph" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Grid>
                                <Grid container>
                                    <Grid size={{ xs: 6, md: 6 }}>
                                        <Typography variant="body2" sx={{ fontWeight: '800', color: 'red', mt: 1, p: 1 }}>
                                            Location
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, md: 6 }}>
                                        <Typography variant="body2" sx={{ fontWeight: '800', color: 'red', mt: 1, p: 1 }}>
                                            Operating Hours
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, md: 6 }}>
                                        <Typography variant="body2" sx={{ m: 1 }}>
                                            911 Kapitan Tikong Street Corner Leon Guinto Street, Manila, 1004 Metro Manila, Philippines, Manila City
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, md: 6 }}>
                                        <Typography variant="body2" sx={{ m: 1 }}>
                                            Mon - Sun
                                            10:00 AM - 12:00 AM
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>

                        <Card sx={{ p: 2, justifyContent: 'center', alignContent: 'center' }}>
                            <Grid sx={{ p: 2, justifyContent: 'center', alignContent: 'center' }}>

                                <Grid container>
                                    <Grid size={{ xs: 8, md: 8 }}>
                                        <Typography variant="h4" component="div" sx={{ fontWeight: '800', color: 'red' }}>
                                            Latest Reviews
                                        </Typography>
                                    </Grid>
                                    <Grid display="flex" justifyContent="end" alignItems="center" size={{ xs: 4, md: 4 }}>
                                        <Button variant="contained" sx={{ color: 'white', bgcolor: 'red' }}>Create Review</Button>
                                    </Grid>
                                </Grid>

                                <Card sx={{ border: 1, borderColor: 'gray.200', borderRadius: 2, boxShadow: 3, m: 2 }}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid size={{ xs: 1, md: 1}} sx={{ml: 1, mt: 0.5}}>
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
                                            <Grid size={{ xs: 9, md: 9 }}>
                                                <Typography variant="h6" component="div" sx={{ color: 'gray.800'}}>
                                                    Classic Blue Jeans
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" sx={{ color: 'gray.600', mt: 1 }}>
                                            Our classic blue jeans are a timeless addition to your wardrobe. Crafted
                                            from premium denim, they offer both style and comfort. Perfect for any
                                            casual occasion.
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                            <Typography variant="body2" sx={{ ml: 1 }}>
                                                4.8 stars out of 5
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card sx={{ border: 1, borderColor: 'gray.200', borderRadius: 2, boxShadow: 3, m: 2 }}>
                                <CardContent>
                                        <Grid container>
                                            <Grid size={{ xs: 1, md: 1}} sx={{ml: 1, mt: 0.5}}>
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
                                            <Grid size={{ xs: 9, md: 9 }}>
                                                <Typography variant="h6" component="div" sx={{ color: 'gray.800'}}>
                                                    Classic Blue Jeans
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" sx={{ color: 'gray.600', mt: 1 }}>
                                            Our classic blue jeans are a timeless addition to your wardrobe. Crafted
                                            from premium denim, they offer both style and comfort. Perfect for any
                                            casual occasion.
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                            <Typography variant="body2" sx={{ ml: 1 }}>
                                                4.8 stars out of 5
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card sx={{ border: 1, borderColor: 'gray.200', borderRadius: 2, boxShadow: 3, m: 2 }}>
                                <CardContent>
                                        <Grid container>
                                            <Grid size={{ xs: 1, md: 1}} sx={{ml: 1, mt: 0.5}}>
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
                                            <Grid size={{ xs: 9, md: 9 }}>
                                                <Typography variant="h6" component="div" sx={{ color: 'gray.800'}}>
                                                    Classic Blue Jeans
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" sx={{ color: 'gray.600', mt: 1 }}>
                                            Our classic blue jeans are a timeless addition to your wardrobe. Crafted
                                            from premium denim, they offer both style and comfort. Perfect for any
                                            casual occasion.
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: 'gray.600' }}>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                            <Typography variant="body2" sx={{ ml: 1 }}>
                                                4.8 stars out of 5
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
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