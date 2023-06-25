// main page of the app to show all the components
'use client'
import { useState, useEffect } from "react";
import { ContentBox, DateAndTime, ErrorScreen, FutureForecast, Header, LoadingScreen, MainCard, NavBar, NextDaysForecast, Search, UnitSwitch, MetricsBox, Footer } from "@/components";
import { motion } from "framer-motion";
export const App = () => {
  const [cityInput, setCityInput] = useState("Delhi");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");
  const [forecast, setForeCast] = useState();


  const getData = async () => {
    const res = await fetch("api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cityInput }),
    });
    const data = await res.json();
    setWeatherData({ ...data });
    setCityInput("");
  };

  const getForecast = async () => {
    const res = await fetch("api/forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cityInput }),
    });

    const data = await res.json();
    setForeCast({ ...data.list })
    console.log(data.list)
  };

  useEffect(() => {
    getData().then(() => getForecast());
  }, [triggerFetch]);




  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <>
      <NavBar />
      <motion.div
        className="containerGrid"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <MainCard
          city={weatherData.name}
          country={weatherData.sys.country}
          description={weatherData.weather[0].description}
          iconName={weatherData.weather[0].icon}
          unitSystem={unitSystem}
          weatherData={weatherData}
        />
        <ContentBox>
          <Header>
            <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
            <Search
              placeHolder="Search a city..."
              value={cityInput}
              onFocus={(e) => {
                e.target.value = "";
                e.target.placeholder = "";
              }}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={(e) => {
                e.keyCode === 13 && setTriggerFetch(!triggerFetch);
                e.target.placeholder = "Search a city...";
              }}
            />
          </Header>
          <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
          <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
        </ContentBox>

      </motion.div>

      <FutureForecast>
        {forecast &&
          <NextDaysForecast forecast={forecast} unitSystem={unitSystem} />
        }
      </FutureForecast>

      <Footer />
    </>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;