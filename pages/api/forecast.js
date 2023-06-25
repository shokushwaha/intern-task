// function to get weather forecast of input city for the coming hours and days
export default async function handler(req, res) {
    const { cityInput } = req.body;
    const getWeatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const data = await getWeatherData.json();
    res.status(200).json(data);
}
