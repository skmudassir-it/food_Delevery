import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/account-settings.css';

const AccountSettings = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const formData = new FormData();
        if (fullName) formData.append('fullName', fullName);
        if (password) formData.append('password', password);
        if (profilePic) formData.append('profilePic', profilePic);

        try {
            await axios.put('http://localhost:4000/api/auth/user/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            setMessage('Profile updated successfully!');
            setTimeout(() => navigate('/profile'), 1500);
        } catch (error) {
            console.error('Update failed:', error);
            setMessage('Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="account-settings-page">
            <header className="gp-header">
                <button className="back-btn" onClick={() => navigate('/profile')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Account Settings</h1>
            </header>

            <form onSubmit={handleSubmit} className="settings-form">
                <div className="profile-pic-upload">
                    <div className="profile-pic-preview">
                        {preview ? <img src={preview} alt="Profile Preview" /> : <div className="placeholder">No Image</div>}
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Change Photo
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileChange} accept="image/*" />
                </div>

                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Update your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        placeholder="Enter new password (optional)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {message && <p className="status-message">{message}</p>}

                <button type="submit" className="save-btn" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
};

export default AccountSettings;
