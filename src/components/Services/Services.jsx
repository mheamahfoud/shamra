import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';
import Graph from '../Home/Graph';
import img1 from '../../assets/construction-services-1.jpg';
import img2 from '../../assets/decoration-works.jpg';
import img3 from '../../assets/Industrial-facilities-works.jpg';
import img4 from '../../assets/construction-works.jpg';

const Services = () => {
    const [servicesData, setServicesData] = useState({
        title: "Our Services",
        desc: "We offer a variety of construction and engineering services.",
        items: [
            {
                img: img1,
                title: "Building Contracting and Construction",
                desc: "The SHAMRA contracting company executes all the private and governmental construction works, residential and commercial buildings, streets, bridges, and other infrastructure works. We are committed to all levels of construction projects, from preparation of construction to construction management services. For many years, we have managed to meet the demands of our customers for great cost and responsive services."
            },
            {
                img: img2,
                title: "Decoration Works",
                desc: "Our Decoration Works service transforms ordinary spaces into extraordinary environments. With an eye for detail and a passion for design, our team creates customized decoration solutions that reflect your personal style and meet your functional needs. From residential interiors to commercial spaces, we ensure every project is executed to perfection. Let us bring elegance and charm to your spaces with our expert decoration services."
            },
            {
                img: img3,
                title: "Industrial Facilities Works",
                desc: "Our Industrial Facilities Works service focuses on the efficient and effective construction and maintenance of industrial environments. We specialize in building and upgrading facilities that enhance operational efficiency and safety. From factories and warehouses to large-scale industrial complexes, our experienced team is dedicated to delivering projects that meet the highest standards of quality and compliance. Trust us to handle all aspects of your industrial facility needs with precision and professionalism."
            },
            {
                img: img4,
                title: "Engineering Consultancy",
                desc: "SHAMRA Engineering Consultancy SHAMRA Engineering Consultancy offers all civil and architectural consultancy, map and interior design, and exterior design as well as 3D design for your building. The company’s engineering consultancy services provide support and technical support to project owners through highly qualified consultants in various engineering fields covering all types of housing projects and utilities, infrastructure projects, urban planning, road and transportation projects."
            }
        ]
    });
/*
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('/api/services');
                setServicesData(response.data);
            } catch (error) {
                console.error('Error fetching services data:', error);
            }
        };

        fetchServices();
    }, []);
    */

    return (
        <div className="services-container">
            <div className="header">
                <h2>{servicesData.title}</h2>
                <h3>{servicesData.desc}</h3>
            </div>
            <div className="graphs">
                {servicesData.items.map((item, index) => (
                    <Graph
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
