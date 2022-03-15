import { CommunicationPricing, MarchExamsPricing, OtherSkillsPricing } from "@src/modules/interface/cms-api-data";

interface IPaymentContent {
    collectiveData: [CommunicationPricing[], MarchExamsPricing[], OtherSkillsPricing[]];
}

const PaymentContent = ({ collectiveData }: IPaymentContent) => {
    return (
        <div className="demo">
            <div className="container">
                <div className="row text-center">
                    <h1 className="heading-title">Pricing Details</h1>
                </div>

                <div className="row">
                    {collectiveData.map((el, index) => (
                        <div key={String(index)} className="col-md-4 col-sm-6">
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <h3 className="heading">{el[0].text}</h3>
                                </div>
                                <ul className="pricing-content">
                                    {el
                                        .filter((el1) => el1.type === "list-item")
                                        .map((el2) => (
                                            <li key={el2.text}>{el2.text}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentContent;
