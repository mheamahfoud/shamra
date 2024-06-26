import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './ContactInfo.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import emailjs from 'emailjs-com';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactInfo = ({ initialData = { location: [51.505, -0.09] } }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [location, setLocation] = useState(initialData.location);

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            phone: phone,
            message: message,
            to_email: 'shamra821@gmail.com'
        };

        emailjs.send('service_dt4uqvf', 'template_8esim8j', templateParams, 'AZP9AZJRhBDe2zZqE')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccess(true);
                setName('');
                setPhone('');
                setMessage('');
                setTimeout(() => setSuccess(false), 3000);
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">___ Contact Info ___</h2>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    {success && <div className="success-message">Message sent successfully!</div>}
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="map-container">
                    <MapContainer center={location} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={location}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
