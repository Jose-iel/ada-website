import Post from "./Post";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <h2 className="main-title">últimas noticias</h2>
        <p className="main-slogan">
          fique por dentro de tudo o que rolou na nitech
        </p>
        <div className="posts">
          <Post
            title="Como se originou a Nitech"
            thumbnail="static/images/p3.png" 
            src="https://www.youtube.com/embed/fn6eMqwK0Ik" 
            excerpt="Durante a pandemia no ano de 2020, um grupo de programadores amigos identificou que o mercado tecnologico vinha crescendo"
          />
          <Post
            title="Clínicas de estética"
            thumbnail="static/images/p4.png"
            excerpt="O que uma clínica de estética e seus procedimentos trazem de beneficios para a sociedade?"
          />
        </div>
        {/* <div className="btn-wrap">
          <button className="btn first">ver mais</button>
        </div> */}
      </div>
      <style jsx>
        {`
          #blog {
            background-color: #f7f7f7;
          }
          #blog .posts {
            display: flex;
          }
          @media (max-width: 800px) {
            #blog .posts {
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Blog;
