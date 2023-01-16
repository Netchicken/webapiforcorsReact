import useFetch from "./functions/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://localhost:7285/api/Movies"
  );
  if (error) {
    console.log(error);
  }

  // {
  //   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "title": "string",
  //   "releaseDate": "2023-01-16T00:00:00",
  //   "overview": "string",
  //   "genre": "string",
  //   "price": 0
  // }

  return (
    <div className='body'>
      {loading && <div>Loading...{error}</div>}
      {data && (
        <div className='bodytext-wrapper'>
          {data.map((item) => (
            <div>
              <h2 className='bodytext-Title'> {item.title}</h2>
              <p>Release Date... {item.releaseDate}</p>
              <p>Overview... {item.overview}</p>
              <h4>Genre ... {item.genre}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
