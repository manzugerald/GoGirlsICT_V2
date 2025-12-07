import GoGirlsDetailsCard from './hqLocation/details';
import HeadQuartersMap from './hqLocation/headQuatersMap';
import FAQAccordion from './components/FAQAccordion';
import BeneficiaryMessagesCard from './components/BeneficiaryMessagesCard';
import BeneficiaryRequestsCard from './components/BeneficiaryRequestsCard';

const GetInvolvedPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 mt-20 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Beneficiary Messages and Requests Cards */}
      <div className="w-full grid md:grid-cols-2 gap-8 mb-12">
        <BeneficiaryMessagesCard />
        <BeneficiaryRequestsCard />
      </div>
      {/* FAQ: full width, left aligned, static height */}
      <div className="w-full mt-16 mb-8">
        <FAQAccordion className="w-full text-left" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <div className="md:w-1/3 w-full">
          <GoGirlsDetailsCard />
        </div>
        <div className="md:w-2/3 w-full flex flex-col">
          <HeadQuartersMap />
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
