import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp';
import DotsVertical from 'mdi-material-ui/DotsVertical';

// 🛠️ MOCK METRICS FIXED: Foreign dollar inputs replaced with standard Indian Rupees (₹) layout
const revenueCategoryData = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Men',
    color: 'primary',
    amount: '₹24,895.65',
    subtitle: 'Clothing, Footwear',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/z/3/7/xl-r-dark-grey-stoneberg-original-imaghghn2vcf5euv.jpeg?q=70'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Women',
    amount: '₹8,650.20',
    subtitle: 'Clothing, Handbags, Jewellery',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/p/c/free-half-sleeve-jk-6-kedar-fab-original-imaghh4unhxgyveg.jpeg?q=70'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Kids',
    color: 'secondary',
    amount: '₹1,245.80',
    subtitle: 'Clothing',
    imgSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kids-t-shirt/i/7/e/10-11-years-bwtrnfulboy-bz55-blive-original-imagmuafh2ennezv.jpeg?q=70'
  }
];

const TotalEarning = () => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardHeader
        title='Total Earnings Overview'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.15px !important', fontWeight: 600 } }}
        action={
          <IconButton size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(1.5)} !important` }}>
        {/* Main Volumetric Metrics Summary Header */}
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 800, fontSize: '2.125rem !important', color: 'primary.main' }}>
            ₹24,895
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', ml: 1 }}>
            <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
            <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
              10%
            </Typography>
          </Box>
        </Box>

        {/* Comparative Timeline Analytics Subtext */}
        <Typography component='p' variant='caption' sx={{ mb: 4, color: 'text.secondary' }}>
          Compared to ₹84,325 last fiscal cycle
        </Typography>

        {/* Dynamic Mapping Iteration Rendering */}
        {revenueCategoryData.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== revenueCategoryData.length - 1 ? { mb: 3.5 } : {})
              }}
            >
              {/* Product Illustration Icon Container */}
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
              </Avatar>

              {/* Text Layout and Segment Settlement */}
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {/* Meta details titles */}
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                    {item.subtitle}
                  </Typography>
                </Box>

                {/* Quantitative Segment Settlement Units */}
                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column', textAlign: 'end' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TotalEarning;

