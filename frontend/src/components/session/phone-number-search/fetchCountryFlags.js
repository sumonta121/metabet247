import axios from 'axios';

// Fetch country data with flags
const fetchCountryFlags = async () => {



  try {
    const response = await axios.get('https://restcountries.com/v2/all');
    const countries = response.data.map(country => ({
      value: country.alpha2Code,
      label: country.name,
      flag: country.flags.svg,
    }));
    return countries;
  } catch (error) {
    console.error('Error fetching country flags:', error);
    return [];
  }


};

export default fetchCountryFlags;
