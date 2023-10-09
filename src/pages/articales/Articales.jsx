import React from 'react';
import Blogs from '../../components/blog/Blogs';
import Footer from '../../components/footer/Footer';
import AosAnimation from '../../components/aosAnimantion/AosAnimation';


const Articales = () => {
    return (
        <div>
            <div>
                <AosAnimation>
                    <Blogs />
                </AosAnimation>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Articales;