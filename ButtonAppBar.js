import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import pic  from "./vikasnew.jpg";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from './Tabs';
import { Container, Paper,IconButton,Grid, Divider,ListItemText } from '@mui/material';
import EnhancedTable from './Table';

const drawerWidth = 170;

export default function PermanentDrawerLeft() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#9700b7',
      color: '#9700b7',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    
  }));
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  position="fixed"
        sx={{  width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor:`Background`, color:`black` }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
          <MenuIcon/>
          </IconButton>
          <Box component="div" sx={{ml:'auto', p: 0.3, borderRadius:"0.3em",display:'flex', alignItems:'center' }}>
          <DarkModeOutlinedIcon sx={{mx:1}}/>
          <NotificationsNoneOutlinedIcon sx={{mx:1}}/>
          <GTranslateOutlinedIcon sx={{mx:1}}/>
          <Avatar alt="Remy Sharp" src={pic} variant="rounded" sx={{mx:1}}/>
          <SettingsOutlinedIcon sx={{mx:1}}/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
        <Stack direction="row" > 
            <StyledBadge
            sx={{ml:'4rem',mb:'1.1rem'}}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <Avatar alt="Remy Sharp" src="https://experience.webmobi.com/assets/img/signinRight.jpeg" variant="rounded"/>
            </StyledBadge>
        </Stack>
        <Divider/>
        {['Dashboard', 'Inventory', 'Orders', 'Shipping','Channel'].map((text, index) => (
            <ListItem key={text} style={{ textAlign: "center" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                { index === 0 ?  
                    <div style={{ fontSize:"0.7em", width:"95%"}}>
                    <DashboardIcon sx={{stroke: "white"}} fontSize="medium"/>
                    </div>
                  : index === 1 ?
                    <div style={{ fontSize:"0.7em", width:"95%" }}>
                      <LocalOfferOutlinedIcon sx={{stroke: "white"}} fontSize="medium"/>
                    </div>
                  : index === 2 ?
                    <div style={{ fontSize:"0.7em", width:"95%" }}>
                      <AssignmentIcon sx={{stroke: "white"}} fontSize="medium"/>
                    </div>
                  : index === 3 ?
                    <div style={{ fontSize:"0.7em", width:"95%" }}>
                      <LocalShippingOutlinedIcon sx={{stroke: "white"}} fontSize="medium"/>
                    </div>
                  : 
                  <div style={{ fontSize:"0.7em", width:"95%" }}>
                    <ShareOutlinedIcon sx={{stroke: "white"}} fontSize="medium"/>
                  </div>
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#a9a9a954', p: 3 }}
      >
      <Toolbar />
      <Tabs />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper sx={{ borderRadius:"0.8em", p:0, display: 'flex', flexDirection: 'column',height: 440 }}>
                <EnhancedTable/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Box>
    </Box>
  );
}