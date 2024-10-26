import StarRating from "./StarRating";

import { useEffect, useState } from "react";

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value / array.length, 0);

const api_key = "<api_key>";

export default function App() {
  const [query, setQuery] = useState("father");
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleSelectedMovie(id) {
    setSelectedMovie((selectedMovie) => (id === selectedMovie ? null : id));
  }

  function handleUnselectMovie() {
    setSelectedMovie(null);
  }
  function handleAddToList(movie) {
    setSelectedMovies((selectedMovies) => [...selectedMovies, movie]);
    handleUnselectMovie();
  }

  function handleDeleteFromList(id) {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((m) => m.id !== id)
    );
  }

  useEffect(
    function () {
      async function getMovies() {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
          );

          if (!res.ok) {
            throw new Error("Bilinmeyen hata oluştu.");
          }

          const data = await res.json();
          if (data.total_results === 0) {
            throw new Error("Film bulunamadı.");
          }

          setMovies(data.results);
        } catch (err) {
          setError(err.message);
        }
        setLoading(false);
      }

      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }

      getMovies();
    },
    [query]
  );

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NavSearchResults movies={movies} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              {loading && <Loading />}
              {!loading && !error && (
                <MovieList
                  movies={movies}
                  onSelectMovie={handleSelectedMovie}
                  selectedMovie={selectedMovie}
                />
              )}
              {error && <ErrorMessage message={error} />}
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>
              {selectedMovie ? (
                <MovieDetails
                  selectedMovie={selectedMovie}
                  onUnSelectMovie={handleUnselectMovie}
                  onAddToList={handleAddToList}
                  selectedMovies={selectedMovies}
                />
              ) : (
                <>
                  <MyListSummary selectedMovies={selectedMovies} />
                  <MyMovieList
                    selectedMovies={selectedMovies}
                    onDeleteFromList={handleDeleteFromList}
                  />
                </>
              )}
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

function ErrorMessage({ message }) {
  return <div className="alert alert-danger">{message}</div>;
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

function Search({ query, setQuery }) {
  return (
    <div className="col-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
        placeholder="Film ara..."
      />
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

function MovieList({ movies, onSelectMovie, selectedMovie }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          onSelectMovie={onSelectMovie}
          selectedMovie={selectedMovie}
        />
      ))}
    </div>
  );
}

function MovieDetails({
  selectedMovie,
  onUnSelectMovie,
  onAddToList,
  selectedMovies,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isAddedToList = selectedMovies.map((m) => m.id).includes(selectedMovie);
  const selectedMovieUserRating = selectedMovies.find(
    (m) => m.id === selectedMovie
  )?.userRating;

  function handleAddToList() {
    const newMovie = {
      ...movie,
      userRating,
    };
    onAddToList(newMovie);
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${api_key}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }

      getMovieDetails();
    },
    [selectedMovie]
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="border p-2 mb-3">
          <div className="row">
            <div className="col-4">
              <img
                src={
                  movie.poster_path
                    ? `https://media.themoviedb.org/t/p/w440_and_h660_face` +
                      movie.poster_path
                    : "/img/no-image.jpg"
                }
                alt={movie.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-8">
              <h6>{movie.title}</h6>
              <p>
                <i className="bi bi-calendar2-date me-1"></i>
                <span>{movie.release_date}</span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning"></i>
                <span>{movie.vote_average}</span>
              </p>
            </div>
            <div className="col-12 border-top p-3 mt-3">
              <p>{movie.overview}</p>
              <p>
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="badge text-bg-primary me-1">
                    {genre.name}
                  </span>
                ))}
              </p>

              {!isAddedToList ? (
                <>
                  <div className="my-4">
                    <StarRating
                      maxRating={10}
                      size={20}
                      onRating={setUserRating}
                    />
                  </div>
                  <button
                    className="btn btn-primary me-1"
                    onClick={() => handleAddToList(movie)}
                  >
                    Listeye Ekle
                  </button>
                </>
              ) : (
                <p>
                  Film listenizde. Değerlendirme:{" "}
                  <i className="bi bi-stars text-warning me-1"></i>
                  {selectedMovieUserRating}
                </p>
              )}

              <button className="btn btn-danger" onClick={onUnSelectMovie}>
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Movie({ movie, onSelectMovie, selectedMovie }) {
  return (
    <div className="col mb-2">
      <div
        className={`card movie ${
          selectedMovie === movie.id ? "selected-movie" : ""
        }`}
        onClick={() => onSelectMovie(movie.id)}
      >
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
  const avgRating = getAverage(selectedMovies.map((m) => m.vote_average));
  const avgUserRating = getAverage(selectedMovies.map((m) => m.userRating));
  const avgDuration = getAverage(selectedMovies.map((m) => m.runtime));
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
            <i className="bi bi-stars text-warning me-1"></i>
            <span>{avgUserRating.toFixed(2)}</span>
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

function MyMovieList({ selectedMovies, onDeleteFromList }) {
  return selectedMovies.map((movie) => (
    <MyListMovie
      movie={movie}
      key={movie.id}
      onDeleteFromList={onDeleteFromList}
    />
  ));
}

function MyListMovie({ movie, onDeleteFromList }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img
            src={
              movie.poster_path
                ? `https://media.themoviedb.org/t/p/w440_and_h660_face` +
                  movie.poster_path
                : "/img/no-image.jpg"
            }
            alt={movie.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.vote_average}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.runtime} dk</span>
              </p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteFromList(movie.id)}
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
