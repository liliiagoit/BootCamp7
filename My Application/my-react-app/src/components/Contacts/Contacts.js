import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts_block'>
        <h2 className='contacts_title'>CONTACTS</h2>
        <h4 className='my_contacts'><span className='title_span_contacts'>Get</span> in Touch</h4>
    <div className='contacts_container'><i className="fas fa-map-marker-alt contact_icon"></i><h5 className='contacts_item'>Address</h5><p className='contacts_text'>Ukraine, Kyiv</p></div>
    <div className='contacts_container'><i className="fas fa-at contact_icon"></i><h5 className='contacts_item'>Email</h5><a className='contacts_text' href='mailto:plonsaklo@gmail.com'>plonsaklo@gmail.com</a></div>
    <div className='contacts_container'><i className="fas fa-phone-volume contact_icon"></i><h5 className='contacts_item'>Phone</h5><a className='contacts_text' href='tel:+380672583616'>+380672583616</a></div>
    <div className='contacts_container'><a href='https://drive.google.com/open?id=1GiLIPQ-nDEHgPsKM7H8n51vMEAeDhpsD' rel="noopener noreferrer" target="_blank" title='download'><i className="fas fa-download contact_icon_cv"></i><span className='contacts_span_cv'>Download CV</span></a></div>
        </div>
    )
}
export default Contacts;