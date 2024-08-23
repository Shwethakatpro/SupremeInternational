import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'

import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
// import image3 from '../../assets/img.jpg'
import image4 from '../../assets/img4.png'

// import image1 from '../../assets/img1.png'
// import image2 from '../../assets/img2.png'
// import image3 from '../../assets/img.png'
// import image4 from '../../assets/img4.png'

const Home = () => {
    const images = [
        image1,
        image2,
        
        image4
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="home-page">
            <h1>Home</h1>
            <div className="content">
                <div className="slideshow">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="description">
                    <p>Supreme's main factory is located in Wetaskiwin, Alberta. In 2010, Supreme expanded into the US with a parts distribution warehouse located in Dodge City, Kansas. This centralized location improved parts distribution throughout North America.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
