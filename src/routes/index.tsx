import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/login';
import RegisterPage from '../pages/register/register';
import HomePage from '../pages/home/index';
import { useSelector } from 'react-redux';
import SidebarLayout from '../components/Sidebar/index';
import { getAccessToken } from '../helper/functions';
import SideBarLayout from '../components/Sidebar/index';

const Protected = (props: any) => {
    const {isLoggedIn, children} = props;
    const [tokenExist, setTokenExist] = useState<boolean | null>(null)

    const getToken = async () => {
        const tokenValue = await getAccessToken();
        if(!!tokenValue){
            setTokenExist(true)
        }
        return !!tokenValue
    }

    useEffect(() => {
        getToken();
    }, [isLoggedIn, tokenExist])

    
    if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
    }
    return (
        <div className="flex">
            <SideBarLayout />
            {children}
        </div>
    )
   };

const AllRoutes = () => {
    const isLoggedIn = useSelector((state: any) => state.employeeState.isLoggedIn)
    
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/login" element={<LoginPage />} />
                <Route  path="/register" element={<RegisterPage />} />
                <Route path="/" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <HomePage />
                    </Protected>
                }
                />
            </Routes> 
        </BrowserRouter>
    )
}

export default AllRoutes;