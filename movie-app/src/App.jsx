import { useEffect, useState } from "react";

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value, 2) / array.length;

const api_key = "<api_key>";
const query = "father";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function getMovies() {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
      );
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }
    getMovies();
  }, []);

  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <NavSearchResults movies={movies} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              {loading ? <Loading /> : <MovieList movies={movies} />}
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>
              <>
                <MyListSummary selectedMovies={selectedMovies} />
                <MyMovieList selectedMovies={selectedMovies} />
              </>
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

function Loading() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function Nav({ children }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>
      Movie App
    </div>
  );
}

function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film ara..." />
    </div>
  );
}

function NavSearchResults({ movies }) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> kayıt bulundu.
    </div>
  );
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function ListContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="col mb-2">
      <div className="card">
        <img
          src={
            movie.poster_path
              ? `https://media.themoviedb.org/t/p/w440_and_h660_face` +
                movie.poster_path
              : "/img/no-image.jpg"
          }
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{movie.release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyListSummary({ selectedMovies }) {
  const avgRating = getAverage(selectedMovies.map((m) => m.rating));
  const avgDuration = getAverage(selectedMovies.map((m) => m.duration));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selectedMovies.length}] film eklendi.</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span>{avgRating.toFixed(2)}</span>
          </p>
          <p>
            <i className="bi bi-hourglass-split text-warning me-1"></i>
            <span>{avgDuration} dk</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies }) {
  return selectedMovies.map((movie) => (
    <MyListMovie movie={movie} key={movie.Id} />
  ));
}

function MyListMovie({ movie }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.Title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.rating}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.duration} dk</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
