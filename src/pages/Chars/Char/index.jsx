import * as React from 'react';
import {Link} from 'react-router-dom'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

 import eziz from '../Chars.module.css'

export default function Char({ item }) {
    return (
        <Card className={eziz.char}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.fullName}
                    </Typography>
                    <Button variant="outlined">
                        <Link to={`/charinfo/${item.id}`}> About character</Link>
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}