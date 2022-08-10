import Row3 from '../../layout/Row3';
import GraphicCard from '../../../components/UI/GraphicCard';
import { OUR_SERVICES } from '../../../constants/constants';

const OurServices = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s3 text-center md:mb-s10">
        Our <span className="gradient-2 gradient-text">Services</span>
      </h2>
      <Row3>
        {OUR_SERVICES.map((service) => (
          <GraphicCard
            key={service.id}
            title={service.title}
            description={service.description}
            graphic={service.graphic}
            direction="vertical"
          />
        ))}
      </Row3>
    </section>
  );
};

export default OurServices;
