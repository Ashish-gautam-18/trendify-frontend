import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Grid 
      container 
      sx={{ 
        bgcolor: '#0f172a', 
        color: '#94a3b8', 
        pt: 8, 
        pb: 4, 
        px: { xs: 4, md: 12 },
        borderTop: '2px solid #1e293b',
        textAlign: { xs: 'center', md: 'left' },
        fontFamily: '"Inter", sans-serif'
      }}
    >
      {/* Column 1: Brand Information Section */}
      <Grid item xs={12} md={4} sx={{ mb: { xs: 5, md: 0 }, pr: { md: 6 } }}>
        <Typography sx={{ fontWeight: 800, fontSize: '24px', color: '#ffffff', mb: 2, tracking: '1px' }}>
          Trendyfy<span style={{ color: '#6366f1' }}>.</span>
        </Typography>
        <Typography sx={{ fontSize: '13px', lineHeight: 1.7, color: '#94a3b8', mb: 3 }}>
          Your ultimate premium fashion destination. We bring you the finest global trends curated by fashion experts, delivered straight to your doorstep.
        </Typography>
        
        {/* Social platform quick navigators map */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          {['Facebook', 'Instagram', 'Twitter'].map((social) => (
            <Box 
              key={social}
              sx={{ 
                fontSize: '11px', 
                fontWeight: 600,
                color: '#6366f1', 
                bgcolor: '#1e1b4b', 
                px: 2, 
                py: 0.8, 
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: '#6366f1', color: 'white' }
              }}
            >
              {social}
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Column 2: Fast Navigation Store Link Maps */}
      <Grid item xs={12} sm={6} md={2.5} sx={{ mb: { xs: 4, md: 0 } }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '1.5px', mb: 3 }}>
          QUICK SHOP
        </Typography>
        {["Men's Wear", "Women's Collection", 'Kids Clothing', 'Summer Outfits', 'New Arrivals'].map((link) => (
          <Typography 
            key={link} 
            sx={{ fontSize: '13px', mb: 1.5, cursor: 'pointer', transition: '0.2s', '&:hover': { color: '#6366f1', pl: 0.5 } }}
          >
            {link}
          </Typography>
        ))}
      </Grid>

      {/* Column 3: Customer Care Policy Indexes */}
      <Grid item xs={12} sm={6} md={2.5} sx={{ mb: { xs: 4, md: 0 } }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '1.5px', mb: 3 }}>
          NEED HELP?
        </Typography>
        {['Order Tracking', 'Easy Returns', 'Secure Payments', 'Contact Support', 'Privacy Center'].map((link) => (
          <Typography 
            key={link} 
            sx={{ fontSize: '13px', mb: 1.5, cursor: 'pointer', transition: '0.2s', '&:hover': { color: '#6366f1', pl: 0.5 } }}
          >
            {link}
          </Typography>
        ))}
      </Grid>

      {/* Column 4: Central Security Promise Box Display */}
      <Grid item xs={12} md={3}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '1.5px', mb: 3 }}>
          TRENDYFY PROMISE
        </Typography>
        <Box sx={{ bgcolor: '#1e293b', p: 2.5, borderRadius: '12px', border: '1px solid #334155' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '13px', color: '#ffffff', mb: 1 }}>
            ✨ 100% Secure Shopping
          </Typography>
          <Typography sx={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>
            All your transactions are heavily encrypted and completely safe. Experience seamless checkout with zero hidden charges.
          </Typography>
        </Box>
      </Grid>

      {/* Row Footer Base: Branding and Legal Information */}
      <Grid 
        item 
        xs={12} 
        sx={{ 
          mt: 6, 
          pt: 3, 
          borderTop: '1px solid #1e293b', 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: { xs: 2, sm: 0 }
        }}
      >
        <Typography sx={{ fontSize: '12px', color: '#64748b' }}>
          &copy; {new Date().getFullYear()} trendyfy.com. All rights reserved.
        </Typography>
        
        <Typography sx={{ fontSize: '12px', color: '#64748b' }}>
          Developed with 💜 by <span style={{ color: '#ffffff', fontWeight: 600 }}>Ashish</span>
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, fontSize: '12px' }}>
          <span style={{ color: '#64748b', cursor: 'pointer' }}>Terms</span>
          <span style={{ color: '#64748b', cursor: 'pointer' }}>Privacy</span>
          <span style={{ color: '#64748b', cursor: 'pointer' }}>Cookies</span>
        </Box>
      </Grid>

    </Grid>
  );
};

export default Footer;
