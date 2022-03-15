import {
  CommunicationPricing,
  MarchExamsPricing,
  OtherSkillsPricing,
} from "@src/modules/interface/cms-api-data";

// import "./styles.css";
type PaymentContentType = {
  communication_pricing: CommunicationPricing[];
  march_exam_pricing: MarchExamsPricing[];
  other_skills_pricing: OtherSkillsPricing[];
};
const PaymentContent = ({
  communication_pricing,
  march_exam_pricing,
  other_skills_pricing,
}: PaymentContentType) => {
  return (
    <div className="demo">
      <div className="container">
        <div className="row text-center">
          <h1 className="heading-title"> Pricing Details</h1>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">{communication_pricing[0].text}</h3>
                {/* <span className="subtitle">Lorem ipsum dolor sit amet</span>
                <div className="price-value">
                  10
                  <span className="currency">$</span>
                  <span className="month">/mo</span>
                </div> */}
              </div>
              <ul className="pricing-content">
                {communication_pricing.map((el) => {
                  if (el.type === "list-item") return <li>{el.text}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">{march_exam_pricing[0].text}</h3>
                {/* <span className="subtitle">Lorem ipsum dolor sit amet</span>
                <div className="price-value">
                  20
                  <span className="currency">$</span>
                  <span className="month">/mo</span>
                </div> */}
              </div>
              <ul className="pricing-content">
                {march_exam_pricing.map((el) => {
                  if (el.type === "list-item") return <li>{el.text}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">{other_skills_pricing[0].text}</h3>
                {/* <span className="subtitle">Lorem ipsum dolor sit amet</span>
                <div className="price-value">
                  30
                  <span className="currency">$</span>
                  <span className="month">/mo</span>
                </div> */}
              </div>
              <ul className="pricing-content">
                {other_skills_pricing.map((el) => {
                  if (el.type === "list-item") return <li>{el.text}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;
