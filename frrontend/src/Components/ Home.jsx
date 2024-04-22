import {  Button, Typography } from '@mui/material'
import React from 'react'
import Img from './images/Restobackground.jpg'


export const Home = () => {
    const backgroundImageStyle={
        backgroundImage:`url(${Img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }
  return (
    <div style={backgroundImageStyle}>
        <br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'></Typography>
        <Typography variant='h6' color={'whitesmoke'}>Welcome to our RESTAURANT clasic resto </Typography>
        <br />
        <Typography variant='h4' color={'whitesmoke'} align='centre'>RESTAURANT HOURS</Typography><br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'> Dine-in: <br /> <br />Sun - Wed 11:30am - 9:00pm <br /><br />
        Thurs 11:30am - 9:30pm <br /><br />Fri - Sat  11:30 AM - 10:00 <br />_____
        </Typography>
<br />        <Typography variant='h5' fontStyle={'bold'} color={'whitesmoke'}>Pala,Kottayam</Typography>
        <br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'> We prepare each dish from <br />scratch with ingredients fresh from our Market <br />  and immerse guests in our traditions with our open-concept kitchen. Chat with <br />the chef, raise a glass with other diners—when you eat at Mercato, you’re family.</Typography>
        <br />
        
        <Typography variant='h6' color={'black'} align='centre'> TO US, FOOD IS EVERYTHING WITH CUSTOMER SATISFACTION <br />WE’RE PROUD TO SHARE OUR TRADITIONS WITH YOU. </Typography>
    
        <Typography variant='h6' color={'black'} align='centre'> CONTACT US 
        <Button color='warning'>HERE</Button></Typography>

        
  </div>
        
        

  )
}