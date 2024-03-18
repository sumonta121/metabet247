import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import fetchCountryFlags from './fetchCountryFlags';

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetchCountryFlags();
      setCountryOptions(countries);
    };
    getCountries();
  }, []);

  const handleCountryChange = selectedOption => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
   
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Select country..."
        isSearchable
      />
      {selectedCountry && (
        <div>
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.label} flag`}
            width="24"
            height="24"
          />
          <span>{selectedCountry.label}</span>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
