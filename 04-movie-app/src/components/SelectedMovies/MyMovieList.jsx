import MyListMovie from "./MyListMovie";

export default function MyMovieList({ selectedMovies, onDeleteFromList }) {
  return selectedMovies.map((movie) => (
    <MyListMovie
      movie={movie}
      key={movie.id}
      onDeleteFromList={onDeleteFromList}
    />
  ));
}
