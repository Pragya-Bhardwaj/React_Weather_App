import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css';


export default function InfoBox({info}) {
     const INIT_URL="https://images.unsplash.com/photo-1519333485041-cfe73bc11164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9ycmVzdHxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1561634666-669fe33c3d0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        if (!info) {
        return <h3>Welcome! Search the location for the weather.</h3>;
    }

    return(
       
        <div className="InfoBox">
        
    <div className="cardContainer">
    <Card sx={{ width: "80%", maxWidth: 600, padding: 2 }}>
    <CardMedia sx={{ height: 200 }}
        image={info.humidity>80? RAIN_URL: info.temp>25? HOT_URL : info.temp<25? COLD_URL : INIT_URL}

      />
     <CardContent sx={{ padding: 3 }}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {info.humidity>80? <ThunderstormIcon /> : info.temp>25? <SunnyIcon /> : info.temp<25? <AcUnitIcon /> : <SunnyIcon />} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component= {"span"}>
          <p>Temperature: {info.temp}&deg;c</p>
          <p>Feels Like: {info.feelsLike}&deg;c</p>
          <p>Humidity: {info.humidity}</p>
          <p>Min Temp: {info.tempMin}&deg;c</p>
          <p>Max Temp: {info.tempMax}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}