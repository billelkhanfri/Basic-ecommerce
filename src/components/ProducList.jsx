import Products from "./Product"

function ProductList (props){
    return (
      <>
      <div className="container ">
        <h2 className="text-center m-5"> Our Products</h2>
       
          <div className="row">
            {props.products.map((item) => (
              <div className="col-xs-12 col-md-6 col-lg-3 mb-4" key={item.id}>
                <Products item={item} />
              </div>
            ))}
          </div>
          </div>
        
      </>
    );
}

export default ProductList