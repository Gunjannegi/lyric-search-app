const axios = require('axios');

exports.handler = async (event, context) => {
    try {
        const apiUrl = 'https://api.musixmatch.com/ws/1.1/chart.tracks.get';
        const apiKey = '3341df6501471995d978516f3f1fe4e0';

        const response = await axios.get(
            `${apiUrl}?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${apiKey}`
        );

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};