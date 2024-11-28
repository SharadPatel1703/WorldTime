// app/page.js
'use client';

import { useState } from 'react';
import { TimeCard, SearchLocation, LoadingSpinner } from '../components';
import { getWorldTime, defaultLocations } from '../lib/api';

export default function Home() {
    const [timeData, setTimeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('Custom Location');

    const fetchTime = async (lat, lon, locationName = 'Custom Location') => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWorldTime(lat, lon);
            setTimeData(data);
            setSelectedLocation(locationName);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-center text-gray-900">
                    World Time App
                </h1>

                <div className="bg-white rounded-lg shadow p-6">
                    <SearchLocation onSearch={fetchTime} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {defaultLocations.map((location) => (
                        <button
                            key={location.name}
                            onClick={() => fetchTime(location.lat, location.lon, location.name)}
                            className="p-3 text-sm bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center"
                        >
                            {location.name}
                        </button>
                    ))}
                </div>

                {loading && <LoadingSpinner />}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                {timeData && !loading && (
                    <TimeCard timeData={timeData} location={selectedLocation} />
                )}
            </div>
        </main>
    );
}