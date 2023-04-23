import * as React from 'react';
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

export default function OutlinedCard({ cardContent }) {
  console.log("cardContent", cardContent)
  let headers = Object.keys(cardContent)
  console.log("headers", headers)
  return (
    <Box sx={{ minWidth: 275, maxWidth: 300, marginTop: 10 }}>
      <Card variant="outlined">
        <CardContent>
          {
            headers.map(header => (<Typography sx={{ fontSize: 14 }} variant="h5" component="div" gutterBottom>
              {header} : {String(cardContent[header])}
            </Typography>))
          }

        </CardContent>
        <CardActions>
          <Button size="small">Update</Button>
        </CardActions>
      </Card>
    </Box>
  );
}