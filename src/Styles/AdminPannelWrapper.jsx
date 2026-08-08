// ** MUI (Material UI) se styled utility import ki taaki custom CSS wrapper bana sakein
import { styled } from '@mui/material/styles'

// Admin panel ke charts ke liye ek custom div wrapper banaya jo Theme ke hisab se badlega
const AdminPannelWrapper = styled('div')(({ theme }) => ({
  // 📈 ApexCharts ke main container ki CSS settings
  '& .apexcharts-canvas': {
    "& line[stroke='transparent']": {
      display: 'none'
    },
    // Graph ki X-axis aur Y-axis wali lines ka color background theme se match kiya
    '& .apexcharts-xaxis > line, & .apexcharts-yaxis > line': {
      stroke: theme.palette.divider
    },
    // Graph ke ticks (chhote points) ka color set kiya
    '& .apexcharts-xaxis-tick, & .apexcharts-yaxis-tick': {
      stroke: theme.palette.divider
    },
    // 💬 Tooltip (Graph par mouse le jaane par jo box khulta hai) ki CSS
    '& .apexcharts-tooltip': {
      boxShadow: theme.shadows[3],
      borderColor: theme.palette.divider,
      background: theme.palette.background.paper,
      '& .apexcharts-tooltip-title': {
        fontWeight: 600,
        borderColor: theme.palette.divider,
        background: theme.palette.background.paper
      },
      // Dark theme hone par tooltip ke text ko white (safed) karne ke liye
      '&.apexcharts-theme-dark': {
        '& .apexcharts-tooltip-text-label, & .apexcharts-tooltip-text-value': {
          color: theme.palette.common.white
        }
      },
      '& .bar-chart': {
        padding: theme.spacing(2, 2.5)
      }
    },
    // X-axis par dikhne wale tooltip ka design (Light aur Dark mode ke liye alag alag)
    '& .apexcharts-xaxistooltip': {
      borderColor: theme.palette.divider,
      background: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
      '& .apexcharts-xaxistooltip-text': {
        color: theme.palette.text.primary
      },
      '&:after': {
        borderBottomColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default
      },
      '&:before': {
        borderBottomColor: theme.palette.divider
      }
    },
    // Y-axis par dikhne wale tooltip ka design
    '& .apexcharts-yaxistooltip': {
      borderColor: theme.palette.divider,
      background: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
      '& .apexcharts-yaxistooltip-text': {
        color: theme.palette.text.primary
      },
      '&:after': {
        borderLeftColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default
      },
      '&:before': {
        borderLeftColor: theme.palette.divider
      }
    },
    // 🔤 Graph ke andar likhe saare text aur labels ka font global project se match kiya
    '& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel': {
      filter: 'none',
      fontWeight: 400,
      fill: theme.palette.text.primary,
      fontFamily: `${theme.typography.fontFamily} !important`
    },
    // Pie chart (gol wala graph) ke andar ke labels ka color safed set kiya
    '& .apexcharts-pie-label': {
      filter: 'none',
      fill: theme.palette.common.white
    },
    // Pie chart ke data text ka font size bada kiya
    '& .apexcharts-pie': {
      '& .apexcharts-datalabel-label, .apexcharts-datalabel-value': {
        fontSize: '1.5rem'
      }
    },
    '& .apexcharts-marker': {
      boxShadow: 'none'
    },
    // 📋 Legend Section (Jo batata hai ki kaunsa color kis cheez ka hai) ki spacing aur color
    '& .apexcharts-legend-series': {
      margin: `${theme.spacing(0.75, 2)} !important`,
      '& .apexcharts-legend-text': {
        marginLeft: theme.spacing(0.75),
        color: `${theme.palette.text.primary} !important`
      }
    },
    // Graph ke piche ki grid lines ka color divider ke jaisa set kiya
    '& .apexcharts-xcrosshairs, & .apexcharts-ycrosshairs, & .apexcharts-gridline': {
      stroke: theme.palette.divider
    },
    // Heatmap chart ki borders ka design setup kiya
    '& .apexcharts-heatmap-rect': {
      stroke: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default
    },
    // Radial bar chart (gol loading jaisa chart) ka background area set kiya
    '& .apexcharts-radialbar > g > g:first-of-type .apexcharts-radialbar-area': {
      stroke: theme.palette.background.default
    },
    // Radar chart (makdi ke jale jaisa chart) ki lines aur background setup kiya
    '& .apexcharts-radar-series polygon': {
      stroke: theme.palette.divider,
      fill: theme.palette.background.paper
    },
    '& .apexcharts-radar-series line': {
      stroke: theme.palette.divider
    }
  }
}))

// Is styles wrapper ko export kiya taaki Admin Dashboard layout me ise outer div ki tarah use kar sakein
export default AdminPannelWrapper
