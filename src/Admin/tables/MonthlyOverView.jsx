import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp';
import DotsVertical from 'mdi-material-ui/DotsVertical';
import CellphoneLink from 'mdi-material-ui/CellphoneLink';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import CurrencyInr from 'mdi-material-ui/CurrencyInr'; // 🛠️ FIXED: USD hata kar INR currency icon lagaya

// 🛠️ MOCK METRICS FIXED: Currency format changed to Indian Rupees (₹) for business context alignment
const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '₹88k', // 🛠️ FIXED: America ka $ hata kar India ka ₹ laga diya hai
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyInr sx={{ fontSize: '1.75rem' }} />
  }
];

const renderStats = () => {
  return salesData.map((item, index) => (
    // 🛠️ BUG FIXED: Box ke andar se duplicate key property warning saaf kar di hai
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption' sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {item.title}
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {item.stats}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardHeader
        title='Monthly Business Overview'
        action={
          // 🛠️ BUG FIXED: </ObjectModel> ko hatakar yahan correct </IconButton> lagaya hai
          <IconButton size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2' sx={{ color: 'text.secondary', mt: 0.5 }}>
            <Box component='span' sx={{ fontWeight: 600, color: 'success.main' }}>
              Total 48.5% growth
            </Box>{' '}
            attained this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 1,
            lineHeight: '1.5rem !important',
            letterSpacing: '0.15px !important',
            fontWeight: 600
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {/* 🛠️ FIXED: Grid container spacing perfectly dynamic set kar di hai */}
        <Grid container spacing={5}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;



