import React,{useState} from 'react';
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer, Divider, Typography, Collapse,Menu ,MenuItem} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import userAvatar from '../assets/userAvatar.jpg';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ open, handleToggleSidebar }) => {
    const [openPromotion, setOpenPromotion] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log('User logged out');
        handleClose();
        
        navigate('/');
    };

    const handleTogglePromotion = () => {
        setOpenPromotion(!openPromotion);
    };

    const handleToggleSettings = () => {
        setOpenSettings(!openSettings);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const menuItems = [
        { text: 'Home', icon: <InboxIcon />, path: '', subItems: [] },
        { text: 'Promotion List', icon: <InboxIcon />, path: '', subItems: [] },
       
        { text: 'SKU Forecast', icon: <AssignmentIcon />, path: 'skuforecast', subItems: [] },
        { text: 'Monthly PriceList', icon: <AttachMoneyIcon />, path: 'monthlypricelist', subItems: [] },
        { text: 'User', icon: <AccountCircleIcon />, path: '/', subItems: [] },
        {
            text: 'Settings',
            icon: <SettingsIcon />,
            subItems: [
                { text: 'GrandParent', path: '/' },
                { text: 'SKU', path: 'SKUList' },
                { text: 'Indirect Customer', path: '/' },
                { text: 'GPIC Access', path: '/' },
                
                { text: 'PPG', path: '/' }
            ]
        },
    ];

    return (
        <Drawer
            variant="permanent"
            open={open}
            sx={{
                width: open ? '230px' : '60px',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                '& .MuiDrawer-paper': {
                    width: open ? '230px' : '60px',
                    transition: 'width 0.3s',
                    overflowX: 'hidden',
                },
                marginTop: '69px',
                paddingTop: '30px'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px' }}>
                <Typography variant="h6" noWrap sx={{ display: open ? 'block' : 'none' }}>
                    Menu
                </Typography>
                <IconButton onClick={handleToggleSidebar}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>
            <Divider />
            <List sx={{ fontSize: 'small' }}>
                {menuItems.map((item, index) => (
                    <Box key={index}>
                        <ListItem  onClick={() => {
                            if (item.text === 'Settings') {
                                handleToggleSettings();
                            } else {
                                handleNavigation(item.path);
                            }
                        }} sx={{ padding: open ? '10px 16px' : '10px 8px' ,cursor: 'pointer'}}>
                            <ListItemIcon sx={{ minWidth: open ? '40px' : '24px' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ display: open ? 'block' : 'none' }} />
                            {(item.subItems.length > 0 && open) && (item.text === 'Promotion List' ? (openPromotion ? <ExpandLess /> : <ExpandMore />) : (openSettings ? <ExpandLess /> : <ExpandMore />))}
                        </ListItem>
                        <Collapse in={item.text === 'Promotion List' ? openPromotion : openSettings} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {item.subItems.map((subItem, subIndex) => (
                                    <ListItem  key={subIndex} sx={{ paddingLeft: open ? '32px' : '24px', padding: '1px 60px',cursor: 'pointer' }} onClick={() => handleNavigation(subItem.path)}>
                                        <ListItemText primary={subItem.text} sx={{ display: open ? 'block' : 'none' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, borderTop: '1px solid #ddd', width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#fff', height: '40px' }}>
        <Avatar src={userAvatar} alt="User Avatar" onClick={handleClick} />
        <Box sx={{ marginLeft: 2, display: open ? 'block' : 'none' }}>
            <strong>Alice Treez</strong>
            <br />
            Account Manager
        </Box>
        <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
    </Box>
        </Drawer>
    );

};

export default Sidebar;
