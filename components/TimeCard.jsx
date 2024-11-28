import React from 'react';

export default function TimeCard ({ timeData, location }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-2">{location}</h2>
            <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600">
                    {timeData.hour}:{timeData.minute}
                </p>
                <p className="text-gray-600">{timeData.date}</p>
                <div className="text-sm text-gray-500">
                    <p>Timezone: {timeData.timezone}</p>
                    <p>Day of Week: {timeData.day_of_week}</p>
                </div>
            </div>
        </div>
    );
};
