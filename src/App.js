import useFetch from "./functions/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://localhost:7064/WeatherForecast"
  );
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {loading && <div>Loading...{error}</div>}
      {data && (
        <div>
          {data.map((item) => (
            <div>
              <h2>Date... {item.date}</h2>
              <p>Farenheit... {item.temperatureF}</p>
              <p>Celcius... {item.temperatureC}</p>
              <h4>Wishy washy summary ... {item.summary}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
