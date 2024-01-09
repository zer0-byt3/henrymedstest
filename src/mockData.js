// mockData.js
const mockData = {
    providers: [
        {
            id: 1,
            schedule: [
                {
                    date: '2024-08-13',
                    startTime: '08:00 AM',
                    endTime: '03:00 PM',
                },
            ],
        },
        // Could add more providers
    ],
    clients: [
        {
            id: 1,
            reservations: [
                {
                    providerId: 1,
                    date: '2024-08-13',
                    startTime: '08:15 AM',
                    endTime: '08:30 AM',
                    confirmed: false,
                },
            ],
        },
        // Could add more clients
    ],
};

export default mockData;
