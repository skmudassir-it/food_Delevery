import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/general-profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Check if user is logged in as user or food partner
            // For simplicity, we just hit the user logout endpoint first, if that fails/doesn't clear everything, we might need a more robust check.
            // However, based on shared cookie usage, clearing the token is key.
            // Let's try to logout from user first.
            await axios.get('http://localhost:4000/api/auth/user/logout', { withCredentials: true });

            // In a better real-world scenario, we'd check "userType" from context or local storage 
            // to decide which endpoint to call, but effectively both clear the same "token" cookie.

            navigate('/user/login');
        } catch (error) {
            console.error('Logout failed:', error);
            // Fallback - maybe try force clear client side?
            navigate('/user/login');
        }
    };

    return (
        <div className="general-profile-page">
            <header className="gp-header">
                <h1>Profile</h1>
            </header>

            <div className="gp-section">
                <h2>Settings</h2>
                <div className="gp-menu-item" onClick={() => navigate('/profile/account')}>
                    <span>Account Settings</span>
                    <i className="arrow-right"></i>
                </div>
                <div className="gp-menu-item" onClick={() => navigate('/profile/notifications')}>
                    <span>Notifications</span>
                    <i className="arrow-right"></i>
                </div>
                <div className="gp-menu-item" onClick={() => navigate('/profile/privacy')}>
                    <span>Privacy</span>
                    <i className="arrow-right"></i>
                </div>
            </div>

            <div className="gp-section">
                <button className="gp-logout-btn" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Profile;
