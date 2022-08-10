import Header from '../../components/navigation/Header';
import OurServices from '../../components/sections/reused/OurServices';
import Footer from '../../components/navigation/Footer';
import YouCreateWeTranslate from '../../components/sections/creators/YouCreateWeTranslate';
import BenefitsOfTranslations from '../../components/sections/creators/BenefitsOfTranslations';
import HowItWorks from '../../components/sections/creators/HowItWorks';
import AtAview from '../../components/sections/creators/AtAview';
import GeneratingAviewFor from '../../components/sections/creators/GeneratingAviewFor';

const Creators = () => {
  return (
    <>
      <Header />
      <OurServices />
      <YouCreateWeTranslate />
      <BenefitsOfTranslations />
      <HowItWorks />
      <AtAview />
      <GeneratingAviewFor />
      <Footer />
    </>
  );
};

export default Creators;
