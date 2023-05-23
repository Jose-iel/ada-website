import Service from "./Service";
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="main-title">Nossos serviços</h2>
        <p className="main-slogan">
          alta qualidade com o melhor suporte
        </p>
        <div className="row">
          <Service
            icon="static/images/responsive.svg"
            title="Desenvolvimento de sistemas"
            description="Desenvolvemos soluções digitais. Simplificamos a tecnologia para que você possa ter sua inovação."
          />
          <Service
            icon="static/images/creative.svg"
            title="Área academy"
            description="Simulamos o ambiente coorporativo com as principais tecnologias trazendo inovações, projetos e ideias para o aprimoramento de soft e hard skills."
          />
          <Service
            icon="static/images/seo.svg"
            title="marketing"
            description="Utilizamos estratégias e técnicas que têm como objetivo promover e vender produtos, serviços ou marcas."
          />
          {/* <Service
            icon="static/images/style.svg"
            title="UI/UX development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          />
          <Service
            icon="static/images/fast.svg"
            title="high performance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          />
          <Service
            icon="static/images/code.svg"
            title="clean code"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          /> */}
        </div>
      </div>
      <style jsx>
        {`
          #services .row {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
