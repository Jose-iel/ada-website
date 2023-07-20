import Service from "./Service";
import { cms } from "../../cms";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="main-title">{cms.service.title}</h2>
        <p className="main-slogan">
          {cms.service.subTitle}
        </p>
        <div className="row">
          {cms.service.infos.map((el) => 
            <Service
              icon={el.icon}
              title={el.title}
              description={el.text}
              key={el.id}
            />
          )}
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
