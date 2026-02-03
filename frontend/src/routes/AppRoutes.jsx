import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import PartnerProfile from '../pages/food-partner/Profile';
import GeneralProfile from '../pages/general/Profile';
import AccountSettings from '../pages/general/AccountSettings';
import Notifications from '../pages/general/Notifications';
import PrivacyPolicy from '../pages/general/PrivacyPolicy';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<ChooseRegister />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
                <Route path="/" element={<><Home /><BottomNav /></>} />
                <Route path="/saved" element={<><Saved /><BottomNav /></>} />
                <Route path="/create-food" element={<CreateFood />} />
                <Route path="/food-partner/:id" element={<PartnerProfile />} />
                <Route path="/profile" element={<><GeneralProfile /><BottomNav /></>} />
                <Route path="/profile/account" element={<><AccountSettings /></>} />
                <Route path="/profile/notifications" element={<><Notifications /></>} />
                <Route path="/profile/privacy" element={<><PrivacyPolicy /></>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
