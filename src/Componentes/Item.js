import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

export const Item = ({producto}) =>{

    return(
        <main>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="200"
                    image={producto.image}
                    alt={producto.alt}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={"/producto/"+ producto.id } > 

                        <button size = "small">
                            Ver Detalle
                        </button>
                        
                    </Link>
                </CardActions>
            </Card>
  );
        </main>
    );

} 

