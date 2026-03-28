// Tourism API Module simulation - Pakistan Edition
export const tourismAPI = {
    getScenicViews: async () => [
        { id: 1, name: 'Karakoram Highway (KKH)', images: ['https://via.placeholder.com/400x250'], rating: 5.0, photos: 450, bestTime: 'Morning' },
        { id: 2, name: 'Babusar Top', images: ['https://via.placeholder.com/400x250'], rating: 4.9, photos: 320, bestTime: 'Afternoon' },
        { id: 3, name: 'Makran Coastal Highway', images: ['https://via.placeholder.com/400x250'], rating: 4.8, photos: 280, bestTime: 'Sunset' }
    ],
    getHotels: async () => [
        { id: 1, name: 'Pearl Continental Bhurban', images: ['https://via.placeholder.com/400x250'], price: 'Rs. 25,000', amenities: ['Spa', 'Mountain View', 'Luxury'], rooms: ['Deluxe', 'Executive Suite'] },
        { id: 2, name: 'Serena Shigar Fort', images: ['https://via.placeholder.com/400x250'], price: 'Rs. 30,000', amenities: ['Heritage', 'Garden', 'Royal'], rooms: ['Raja Room', 'Standard'] },
        { id: 3, name: 'Shangrila Resort Skardu', images: ['https://via.placeholder.com/400x250'], price: 'Rs. 18,000', amenities: ['Lake View', 'Boating'], rooms: ['Cottage'] }
    ],
    getAttractions: async () => [
        { id: 1, name: 'Badshahi Mosque, Lahore', tags: ['History', 'Architecture'], hours: '8:00 - 20:00', price: 'Free' },
        { id: 2, name: 'Faisal Mosque, Islamabad', tags: ['Iconic', 'Landmark'], hours: 'Open for Prayers', price: 'Free' },
        { id: 3, name: 'Attabad Lake', tags: ['Nature', 'Boating'], hours: 'Sunrise - Sunset', price: 'Rs. 500' }
    ],
    getRestaurants: async () => [
        { id: 1, name: 'Monal Islamabad', cuisine: 'Traditional/Continental', priceRange: '$$$' },
        { id: 2, name: 'Kolachi Karachi', cuisine: 'Seafood/BBQ', priceRange: '$$$' },
        { id: 3, name: 'Butt Karahi Lahore', cuisine: 'Traditional', priceRange: '$$' }
    ],
    getWeatherData: async (location) => {
        return {
            location: location || 'Skardu',
            temp: 12,
            condition: 'Partly Cloudy',
            humidity: 45,
            windSpeed: 15,
            forecast: [
                { day: 'Tue', temp: 10, condition: 'Cloudy' },
                { day: 'Wed', temp: 8, condition: 'Snow' },
                { day: 'Thu', temp: 14, condition: 'Sunny' }
            ]
        };
    }
};
