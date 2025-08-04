import useFetch from "./functions/useFetch";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const mockMovies = [
  {
    id: "1",
    title: "The Matrix",
    releaseDate: "1999-03-31",
    overview: "A computer programmer discovers reality isn't what it seems.",
    genre: "Science Fiction",
    price: 12.99,
  },
  {
    id: "2",
    title: "Inception",
    releaseDate: "2010-07-16",
    overview: "A thief who steals corporate secrets through dream-sharing technology.",
    genre: "Science Fiction",
    price: 14.99,
  },
  {
    id: "3",
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    overview: "Batman faces the Joker in this epic superhero film.",
    genre: "Action",
    price: 13.99,
  },
];

function App() {
  const { data, loading, error } = useFetch("https://localhost:7246/api/Movies");
  const movies = error ? mockMovies : data;

  return (
    <Container fluid>
      {loading && <div>Loading...</div>}
      <div style={{ color: error ? "red" : "green", margin: "10px" }}>
        {error ? "Using mock data (API unavailable)" : "API Data"}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {movies?.map((movie) => (
          <Card key={movie.id} style={{ width: "300px", padding: "10px" }}>
            <Card.Body>
              <h3>{movie.title}</h3>
              <p>
                <strong>Released:</strong> {movie.releaseDate}
              </p>
              <p>{movie.overview}</p>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p>
                <strong>Price:</strong> ${movie.price}
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default App;
