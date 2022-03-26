import { getReferenceIDInterface } from "@modules/interface/api";
import { cmsBaseURL, getCMSDataURL } from "@modules/constants";
import { CMSDataRootObject } from "@modules/interface/cms-api-data";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import Header from "@components/header";
import AboutUsImage from "@components/about-us-image";
import OurValues from "@components/our-values-content";
import OurTeamAndMission from "@components/our-team-and-mission";
import useNavHandleClick from "@modules/use-handle-nav-click";
import Footer from "@components/footer";
import MetaData from "@components/meta-data";

const AboutUs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { footerData, getData } = props;
    const { handleClick } = useNavHandleClick();

    if (!getData || !footerData) {
        return <p>Error</p>;
    }

    const { address, mobile_number, email_id } = footerData;
    const { our_team, our_mission, creativity, inclusivity, positivity, "about-us-image": aboutUsImage } = getData;

    return (
        <>
            <MetaData title="Learn more about us | Learn with Elite" description="Read more about Learn with Elite and what is our Mission & Values." />
            <AboutUsImage aboutUsImage={aboutUsImage} />
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
                <Header showWhite={false} currentPage={"/about-us"} handleClick={handleClick} />
            </div>
            <div style={{ padding: "20px 40px 40px", background: "#feefc9" }}>
                <OurTeamAndMission ourTeamContent={our_team} ourMission={our_mission} />
                <div style={{ margin: "2rem 0 0" }}>
                    <OurValues creativity={creativity} inclusivity={inclusivity} positivity={positivity} />
                </div>
            </div>
            <Footer address={address} mobileNumber={mobile_number} email={email_id} />
        </>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        return {
            props: {
                getData: cmsApiData.results.find((el) => el.slugs[0] === "about-us")?.data,
                footerData: cmsApiData.results.find((el) => el.slugs[0] === "home-page")?.data
            }
        };
    } catch (err) {
        return {
            props: { getData: null, footerData: null }
        };
    }
}

export default AboutUs;
