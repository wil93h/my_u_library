import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );
export const CardCustom = ({title,author,publishedYear,genre,qty,handle}) => {

    return (
        <Card sx={{ maxWidth: 250, minWidth: 225 ,mb: 1.5,ml: 1.5 ,mr: 1.5 ,mt: 1.5 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {publishedYear}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                    {author}
                </Typography>
                <Typography sx={{ fontSize: 9 }} color="text.secondary" >
                    Genre:
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    {genre}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
      );
}
