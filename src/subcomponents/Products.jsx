import "../css/products.css";
import { useState, useEffect } from "react";
import { GetAllProducts } from "../Api";
function ProductCard({ ProductsList }) {
  return (
    <>
      {ProductsList.map((item) => {
        return (
          <div key={item.id} className="product-card">
            <img
              src={item.image}
              alt={item.title}
              width="300px"
              height="250px"
            />
            <h3>{item.title}</h3>
            <h5>{item.price.$numberDecimal}</h5>
          </div>
        );
      })}
    </>
  );
}

function Product() {
  const getdata = async () => {
    const res = await GetAllProducts();
    console.log(res.data);
    setProducts(res.data);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="products">
        {products.length === 0 && <p>Loading...</p>}
        {products.length > 0 && <ProductCard ProductsList={products} />}
      </div>
    </>
  );
}
export default Product;
