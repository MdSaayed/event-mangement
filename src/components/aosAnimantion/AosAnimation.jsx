import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosAnimation = ({children}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return <div data-aos="fade-up">{children}</div>;
};

export default AosAnimation;