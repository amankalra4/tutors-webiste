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

const Pricing = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { footerData, getData } = props;
    const { handleClick } = useNavHandleClick();

    if (!getData || !footerData) {
        return <p>Error</p>;
    }

    const { address, mobile_number, email_id } = footerData;
    const { upi_image, upi_content } = getData;

    return (
        <div>
            <Header showWhite={false} currentPage={"/pricing"} handleClick={handleClick} />
            <PaymentInfo upiImage={upi_image} upiContent={upi_content} />
            <PaymentContent />
            <Footer address={address} mobileNumber={mobile_number} email={email_id} />
        </div>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        console.log("cmsApiData: ", cmsApiData);
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
