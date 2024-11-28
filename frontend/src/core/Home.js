import React, {  } from 'react';
// eslint-disable-next-line
import Layout from './Layout';
import Corosal from './Corosal';
import HomeIcon from './HomeIcon';
import Gallery from './GalleryimgHome';

const Home = () => {


    return (
        
        <Layout
            title=""
            description=""
            className="container-fluid m-0 p-0"
        >
        <Corosal />
        {/* <Search /> */}
        <HomeIcon />
        <div className="pt-3">
        <h2 className="text-center h2 mt-3 mb-3" id="home-popularplace"><span style={{color:"#4caf50"}}>Popular </span>Places</h2>
            {/* <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <h2 className="text-center h2 mt-3 mb-3"><span style={{color:"#4caf50"}}>New </span>Places</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 offset-xs-2 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div> */}
        </div>
        <h2 className="mb-3 p-3 text-center text-success font-weight-bold h2" id="homegallery">Gallery</h2>
        <Gallery />
        </Layout>
    );
};

export default Home;
