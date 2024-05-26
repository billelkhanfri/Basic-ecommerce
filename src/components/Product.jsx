function Products(props) {
  return (
    <div className="card h-100">
      <img
        src={props.item.image}
        className="card-img-top"
        alt="..."
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
          padding: "1px",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text flex-grow-1">{props.item.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default Products;
