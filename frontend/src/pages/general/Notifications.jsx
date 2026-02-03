import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/general-profile.css'; // Reusing generic styles

const Notifications = () => {
    const navigate = useNavigate();
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(false);

    return (
        <div className="general-profile-page">
            <header className="gp-header">
                <button className="back-btn" onClick={() => navigate('/profile')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Notifications</h1>
            </header>

            <div className="gp-section">
                <div className="gp-menu-item">
                    <span>Push Notifications</span>
                    <label className="switch">
                        <input type="checkbox" checked={pushEnabled} onChange={() => setPushEnabled(!pushEnabled)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="gp-menu-item">
                    <span>Email Notifications</span>
                    <label className="switch">
                        <input type="checkbox" checked={emailEnabled} onChange={() => setEmailEnabled(!emailEnabled)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
