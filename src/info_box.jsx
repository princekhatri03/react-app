import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Info_box({infoWeather}){
 let info = infoWeather;
    let imageUrl ="https://images.unsplash.com/photo-1580687774725-4e23db308efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGR1c3R5fGVufDB8fDB8fHww";
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
          
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}> 

            {/* <p>cannot be descedatnt of <p> */}

         <p>Temperature:{info.temp}&deg;C</p>
         <p>Min temp:{info.mintemp}&deg;C</p>
         <p>Max temp:{info.maxtemp}&deg;C</p>
         <p>The weather can be feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}