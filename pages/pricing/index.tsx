import { getReferenceIDInterface } from "@modules/interface/api";
import { cmsBaseURL, getCMSDataURL } from "@modules/constants";
import { CMSDataRootObject } from "@modules/interface/cms-api-data";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import Header from "@components/header";
import useNavHandleClick from "@modules/use-handle-nav-click";
import Footer from "@components/footer";
import React from "react";
import PaymentInfo from "@components/payment-info";
import PaymentContent from "@components/payment-content";
import MetaData from "@components/meta-data";

const Pricing = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { footerData, getData } = props;
    const { handleClick } = useNavHandleClick();

    if (!getData || !footerData) {
        return <p>Error</p>;
    }

    const { address, mobile_number, email_id } = footerData;
    const {
        upi_image,
        upi_content,
        bank_account_details,
        communication_pricing,
        march_exams_pricing,
        other_skills_pricing,
        phone_pe,
        gpay
    } = getData;

    return (
        <div>
            <MetaData title="Pricing | Learn with Elite" description="Pay and get a chance to be a part of elite group" />
            <Header showWhite={false} currentPage={"/pricing"} handleClick={handleClick} />
            <PaymentInfo
                upiImage={upi_image}
                upiContent={upi_content}
                bank_account_details={bank_account_details}
                phone_pe_image={phone_pe}
                gpayImage={gpay}
            />
            <PaymentContent collectiveData={[communication_pricing, march_exams_pricing, other_skills_pricing]} />
            <Footer address={address} mobileNumber={mobile_number} email={email_id} />
        </div>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        return {
            props: {
                getData: cmsApiData.results.find((el) => el.slugs[0] === "payments")?.data,
                footerData: cmsApiData.results.find((el) => el.slugs[0] === "home-page")?.data
            }
        };
    } catch (err) {
        return {
            props: { getData: null, footerData: null }
        };
    }
}

export default Pricing;
