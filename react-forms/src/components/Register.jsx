export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));
    console.log(formData.get("fullname"));
    console.log(formData.getAll("hobbies"));

    const hobbies = formData.getAll("hobbies");
    const data = Object.fromEntries(formData.entries());
    data.hobbies = hobbies;

    console.log(data);

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Register</h1>
        <p>Please enter your info!</p>
      </div>

      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="col-6">
          <label htmlFor="repassword" className="form-label">
            Re-Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            name="repassword"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="hobbies" className="form-label">
          Hobbies
        </label>
        <div className="card card-body text-bg-light">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="cars"
              value="cars"
            />
            <label htmlFor="cars" className="form-check-label">
              Araba
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="books"
              value="books"
            />
            <label htmlFor="books" className="form-check-label">
              Kitap
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="movies"
              value="movies"
            />
            <label htmlFor="movies" className="form-check-label">
              Sinema
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">
          Reset
        </button>
      </div>
    </form>
  );
}
