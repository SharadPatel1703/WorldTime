import React, { useState } from 'react';

export default function SearchLocation({ onSearch }) {
    const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (coordinates.lat && coordinates.lon) {
            onSearch(parseFloat(coordinates.lat), parseFloat(coordinates.lon));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
                <input
                    type="number"
                    placeholder="Latitude"
                    step="any"
                    value={coordinates.lat}
                    onChange={(e) => setCoordinates(prev => ({ ...prev, lat: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    placeholder="Longitude"
                    step="any"
                    value={coordinates.lon}
                    onChange={(e) => setCoordinates(prev => ({ ...prev, lon: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Get Time
            </button>
        </form>
    );
};
