// import "./styles.css";

const PaymentContent = () => {
    return (
        <div className="demo">
            <div className="container">
                <div className="row text-center">
                    <h1 className="heading-title">CSS Pricing Table</h1>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <h3 className="heading">Standard</h3>
                                <span className="subtitle">Lorem ipsum dolor sit amet</span>
                                <div className="price-value">
                                    10
                                    <span className="currency">$</span>
                                    <span className="month">/mo</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Monthly Bandwidth</li>
                                <li>10 Subdomains</li>
                                <li>15 Domains</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <h3 className="heading">Business</h3>
                                <span className="subtitle">Lorem ipsum dolor sit amet</span>
                                <div className="price-value">
                                    20
                                    <span className="currency">$</span>
                                    <span className="month">/mo</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>60GB Disk Space</li>
                                <li>60 Email Accounts</li>
                                <li>60GB Monthly Bandwidth</li>
                                <li>15 Subdomains</li>
                                <li>20 Domains</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <h3 className="heading">Premium</h3>
                                <span className="subtitle">Lorem ipsum dolor sit amet</span>
                                <div className="price-value">
                                    30
                                    <span className="currency">$</span>
                                    <span className="month">/mo</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>70GB Disk Space</li>
                                <li>70 Email Accounts</li>
                                <li>70GB Monthly Bandwidth</li>
                                <li>20 Subdomains</li>
                                <li>25 Domains</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentContent;
