import React, { useState } from 'react';
import countryData from './countryData'; // Import your countryData object
import './flaginput.css';

  const PhoneNumberSearch = ({ onPhoneNumberChange }) => {
  const [countryCode, setCountryCode] = useState('');
  const [countryDetails, setCountryDetails] = useState(null);

  const handleCountryCodeChange = event => {

    const newCountryCode = event.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
    setCountryCode(newCountryCode);

    if (onPhoneNumberChange) {
      onPhoneNumberChange(`+${newCountryCode}`);
    }


    // Check if the country code exists in the data
    if (newCountryCode === '') {
      setCountryDetails(null);
    } else if (countryData[newCountryCode]) {
      setCountryDetails(countryData[newCountryCode]);
    }
  };

  const formattedCountryCode = countryCode ? `+${countryCode}` : '';
  return (
    <div>
      <div className="country-input">
        <input
          type="tel" // Use 'tel' type to allow numeric input
          value={formattedCountryCode}
          onChange={handleCountryCodeChange}
          name="mobile"
          placeholder="Enter country code..."
          className="country-code-input input-field"
        />
        {countryDetails && (
          <div
            className="flag-icon"
            style={{ backgroundImage: `url(${countryDetails.flag})` }}
          ></div>
        )}
      </div>
     
    </div>
  );
};

export default PhoneNumberSearch;
