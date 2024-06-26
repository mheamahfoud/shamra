import React, { useState, useEffect } from 'react';
import './Moto.css';
import axios from 'axios';



const Moto = () =>{
    const [moto, setMoto] = useState({
    title: "___ OUR MOTO ____",
        moto: "We believe Best Service, Highest Quality, And Best Price the values of the company are not only important but the culmination of the overall success of any company, regardless of size or number of employees. The founders of this company have spent a great deal of time and effort to define the company’s ethics and code of conduct not only to build a successful company but to build a company with a strong link with the community and the surrounding environment.",
        description: "We have a rule that says:If you dont take care of your customer, someone else will. We will always strive to take care of you",
    });
    useEffect(() => {
        const fetchMoto = async () => {
            try {
                const response = await axios.get('/api/moto');
                setMoto(response.data);
            } catch (error) {
                console.error('Error fetching Moto data:', error);
            }
        };

        fetchMoto();
        }, []);

    return(
        <div className="moto-container">
            <h2>{Moto.title || " ___ OUR MOTO ____"}</h2>
            <h5> {Moto.moto || "We believe Best Service, Highest Quality, And Best Price the values of the company are not only important but the culmination of the overall success of any company, regardless of size or number of employees. The founders of this company have spent a great deal of time and effort to define the company’s ethics and code of conduct not only to build a successful company but to build a company with a strong link with the community and the surrounding environment"}</h5>
            <p> {Moto.description ||"We have a rule that says:If you dont take care of your customer, someone else will. We will always strive to take care of you"}</p>

            </div>


    )
}
export default Moto;