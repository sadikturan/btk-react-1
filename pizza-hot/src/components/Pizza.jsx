export default function Pizza() {
  return (
    <div className="col">
      <div className="card item">
        <img
          src="http://localhost:3000/images/3.jpg"
          alt="Sucuk Mısır"
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title">Sucuk Mısır</h3>
          <p className="card-text">
            Pizza sosu, mozzarella peyniri, sucuk, mısır
          </p>
          <div className="item-price">
            <b>285 TL</b>
            <button className="btn btn-sm btn-danger">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
}
