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
            title="Responsive design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          />
          <Service
            icon="static/images/creative.svg"
            title="creative ideas"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          />
          <Service
            icon="static/images/seo.svg"
            title="marketing"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus"
          />
          <Service
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
          />
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
