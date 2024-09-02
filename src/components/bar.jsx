import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import CampaignIcon from "@mui/icons-material/Campaign";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CallIcon from "@mui/icons-material/Call";
import ContactsIcon from "@mui/icons-material/Contacts";
//de
export default function Sidebar() {
  const [selected, setSelected] = useState('Dashboard');
  const role = 'Admin'; // Hardcoded role for design purposes

  const getLinks = () => {
    if (role === 'Admin') {
      return [
        { label: 'Education', Icon: DashboardIcon },
        { label: 'Hobbies', Icon: PeopleAltIcon },
        { label: 'Programs', Icon: SchoolIcon },
        { label: 'Reports', Icon: CloudSyncIcon },
        { label: 'Send Notifications', Icon: CampaignIcon },
        { label: 'Applications', Icon: DisplaySettingsIcon },
        { label: 'Accounts', Icon: AdminPanelSettingsIcon },
      ];
    } else if (role === 'Student') {
      return [
        { label: 'Dashboard', Icon: DashboardIcon },
        { label: 'My Applications', Icon: SchoolIcon },
        { label: 'Notifications', Icon: CircleNotificationsIcon },
        { label: 'Contact', Icon: CallIcon },
        { label: 'My Profile', Icon: ContactsIcon },
      ];
    } else {
      return []; // Handle other roles here
    }
  };

  const theme = createTheme({
    components: {
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            minWidth: "70px",
            padding: "6px",
            ":hover": {
              ".MuiBottomNavigationAction-label": {
                opacity: 1,
              },
            },
          },
          label: {
            color: "white",
            opacity: 0,
          },
        },
      },
    },
  });

  const SidebarLink = ({ label, Icon }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          marginBottom: '12px',
          cursor: 'pointer',
          backgroundColor: selected === label ? '#6C5DD3' : 'white',
          gap: '10px',
          padding: '12px',
          borderRadius: '10px',
          width: '100%',
          alignItems: 'center'
        }}
        onClick={() => setSelected(label)}
      >
        <Icon sx={{ color: selected === label ? "white" : "#8F95B2" }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            fontSize: '15px',
            textAlign: 'left',
            color: selected === label ? "white" : "#8F95B2"
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Full height
          position: "fixed",
          left: 0,
          width: "270px",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {getLinks().map((link, index) => (
          <SidebarLink key={index} label={link.label} Icon={link.Icon} />
        ))}
      </Box>
    </ThemeProvider>
  );
}
