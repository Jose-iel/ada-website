import Product from "./Product";
import { cms } from "../../cms";

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <h2 className="main-title">{cms.products.title}</h2>
        <p className="main-slogan">
          {cms.products.subTitle}
        </p>
        <div className="row">
          {cms.products.infos.map((el) => 
            <Product
              images={el.images}
              title={el.title}
              excerpt={el.text}
              key={el.id}
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          #products {
            background-color: #f7f7f7;
          }
        `}
      </style>
    </section>
  );
};

export default Products;
