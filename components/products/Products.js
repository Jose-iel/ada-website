import Product from "./Product";

const Products = () => {
  const images1 = [
    "static/images/clinestetic1.png",
    "static/images/clinestetic2.png",
    "static/images/clinestetic3.png",
  ];
  const images2 = [
    "static/images/p4.png",
    "static/images/p.png",
    "static/images/p2.png",
  ];
  return (
    <section id="products">
      <div className="container">
        <h2 className="main-title">produtos que a nitech oferece</h2>
        <p className="main-slogan">
          Nós temos os produtos mais inovadores do mercado para facilitar o seu dia a dia
        </p>
        <div className="row">
          <Product
            images={images1}
            title="Clinestetic"
            excerpt="Sistema online para Clínicas de estéticas e profissionais do segmento disponibilizar seus produtos/serviços com maior visibilidade e comodidade ao mercado consumidor."
          />
          <Product
            images={images2}
            title="Webudget"
            excerpt="O Webudget é um sistema web que realiza orçamentos de portões e seus acessórios. Com este sistema o cliente é capaz de realizar orçamentos de variados tipos de portões, podendo incluir acessórios, somente possuindo a medida desejada, de uma forma prática e objetiva, sem a necessidade de um fabricante ir até o local."
          />
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
