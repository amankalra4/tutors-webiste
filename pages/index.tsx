import { getReferenceIDInterface } from "@modules/interface/api";
import { cmsBaseURL, getCMSDataURL } from "@modules/constants";
import { CMSDataRootObject } from "@modules/interface/cms-api-data";
import axios from "axios";
import Header from "../src/components/header";
import TopContainer from "@components/top-container";
import { InferGetStaticPropsType } from "next";
import SeekAndBuild from "@components/seek-and-build";
import Products from "@components/products";
import Footer from "@components/footer";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const apiData = props.cmsApiData;
    return (
        <div>
            <Header />
            <TopContainer visionText={apiData?.vision_text!} />
            <SeekAndBuild seekAndBuildData={apiData!} />
            <Products productsData={apiData!} />
            <Footer address={apiData?.address!} mobileNumber={apiData?.mobile_number!} email={apiData?.email_id!} />
        </div>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        return {
            props: { cmsApiData: cmsApiData.results.find((el) => el.slugs[0] === "home-page")?.data }
        };
    } catch (err) {
        return {
            props: { cmsApiData: null }
        };
    }
}

export default Home;
