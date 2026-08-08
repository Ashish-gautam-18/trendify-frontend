import React from 'react';
import { Card, Button, Typography, CardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
});

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
});

const Achivement = () => {
  const theme = useTheme();

  // Theme support for dark and light mode background transitions
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png';

  return (
    <Card sx={{ position: 'relative', boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        {/* Shop Branding */}
        <Typography variant='h6' sx={{ letterSpacing: '0.25px', fontWeight: 700 }}>
          Trendify Shop
        </Typography>
        
        {/* Growth Subtext */}
        <Typography variant='body2' sx={{ mt: 0.5, color: 'text.secondary' }}>
          Platform Growth Overview 🚀
        </Typography>
        
        {/* Sales Number */}
        <Typography variant='h5' sx={{ my: 2.5, color: 'primary.main', fontWeight: 800 }}>
          ₹420.8k
        </Typography>
        
        {/* Navigation Action Button */}
        <Button size='small' variant='contained'>
          View Analytics
        </Button>

        {/* Decorative Visual Background Graphics */}
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  );
};

// Keeping the name 'Achivement' to protect dashboard path integrity
export default Achivement;
