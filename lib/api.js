import axios from 'axios';

const API_KEY = 'c/Tg7ZfjstIMMe+qCP6PeQ==LjkO9Urkq59R6tk1'; // In production, use environment variables

export const getWorldTime = async (latitude, longitude) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/worldtime', {
            headers: {
                'X-Api-Key': API_KEY,
            },
            params: {
                lat: latitude,
                lon: longitude,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch time data');
    }
};

export const defaultLocations = [
    { name: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
];