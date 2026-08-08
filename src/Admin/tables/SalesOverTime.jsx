import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DotsVertical from 'mdi-material-ui/DotsVertical';
import ReactApexCharts from 'react-apexcharts';

const SalesOverTime = () => {
  const theme = useTheme();

  // ApexCharts Core Design Properties & Theming Configuration Setup
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette?.background?.paper || '#ffffff']
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: { top: -1, right: 0, left: -12, bottom: 5 }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette?.background?.default || '#f4f5fa',
      theme.palette?.background?.default || '#f4f5fa',
      theme.palette?.background?.default || '#f4f5fa',
      theme.palette?.primary?.main || '#312d4b',
      theme.palette?.background?.default || '#f4f5fa',
      theme.palette?.background?.default || '#f4f5fa',
      theme.palette?.background?.default || '#f4f5fa'
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: true, style: { colors: theme.palette?.text?.secondary } },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value}k`,
        style: { colors: theme.palette?.text?.secondary }
      }
    }
  };

  // 🛠️ MOCK METRICS FIXED: Array elements strictly mapped to clear runtime syntax errors
  const chartSalesSeries =[37, 57, 45, 75, 57, 40, 65];
  const progressRatioText = "45%";

  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardHeader
        title='Sales Over Time'
        titleTypographyProps={{
          sx: { lineHeight: '1.2 !important', letterSpacing: '0.15px !important', fontWeight: 600 }
        }}
        action={
          <IconButton size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        {/* Dynamic Chart Rendering Injector (Height intact to original specifications) */}
        <ReactApexCharts 
          type='bar' 
          height={274} 
          options={options} 
          series={[{ name: 'Sales Trend', data: chartSalesSeries }]} 
        />
        
        {/* Analytics Growth Insight Grid */}
        <Box sx={{ mb: 4, mt: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4, fontWeight: 'bold', color: 'success.main' }}>
            {progressRatioText}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Your sales performance is optimized compared to previous analytical cycles.
          </Typography>
        </Box>

        {/* 🛠️ VISUAL FIXED: Standard uniform button style maintained */}
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default SalesOverTime;
