import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigation } from 'react-router';
import Loading from '../../Component/Loading';

AOS.init();

const Root = () => {
    const { state } = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
            <Footer></Footer>

            <Toaster position="top-center"
                reverseOrder={false}></Toaster>
        </div>
    );
};

export default Root;