import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/general-profile.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="general-profile-page">
            <header className="gp-header">
                <button className="back-btn" onClick={() => navigate('/profile')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Privacy Policy</h1>
            </header>

            <div className="gp-section">
                <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                    Welcome to our Privacy Policy. Your privacy is critically important to us.
                </p>
                <h3>1. Information We Collect</h3>
                <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                    We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us.
                </p>
                <h3>2. How We Use Information</h3>
                <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                    We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you.
                </p>
                <h3>3. Sharing of Information</h3>
                <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                    We do not share your personal information with third parties except as described in this policy.
                </p>
                <p style={{ lineHeight: '1.6', color: '#666', marginTop: '40px', fontSize: '12px' }}>
                    Last updated: October 2023
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
