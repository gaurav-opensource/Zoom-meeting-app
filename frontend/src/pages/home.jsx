import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField, Typography, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
// import './HomeComponent.css'; // Import the CSS file

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    const handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    return (
        <Box className="home-container"> 
            {/* Navbar */}
            <Box className="navBar">
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>Apna Video Call</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ marginRight: '16px', color: '#555' }}>History</Typography>
                    <Button variant="outlined" onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }}>Logout</Button>
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', padding: '32px' }}>
                <Box className="leftPanel">
                    <Typography variant="h4" sx={{ marginBottom: '24px', fontWeight: 'bold', color: '#00796b' }}>
                        Quality Video Call Experience
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '16px', color: '#555' }}>
                        Join your meetings effortlessly with the meeting code.
                    </Typography>
                    <Box className="join-container">
                        <TextField 
                            onChange={e => setMeetingCode(e.target.value)} 
                            id="outlined-basic" 
                            label="Meeting Code" 
                            variant="outlined" 
                            fullWidth 
                            sx={{ backgroundColor: '#fff' }} // White background for input
                        />
                        <Button 
                            onClick={handleJoinVideoCall} 
                            variant='contained' 
                            sx={{ marginLeft: '10px', backgroundColor: '#00796b', '&:hover': { backgroundColor: '#004d40' } }} // Primary color with hover effect
                        >
                            Join
                        </Button>
                    </Box>
                </Box>
                <Box className='rightPanel'>
                    <img srcSet='/logo3.png' alt="Logo" className="logo-image" />
                </Box>
            </Box>
        </Box>
    );
}

export default withAuth(HomeComponent);
