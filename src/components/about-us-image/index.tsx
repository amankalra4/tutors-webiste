/* eslint-disable @next/next/no-img-element */
import { HomePageImage } from "@modules/interface/cms-api-data";
import { aboutUsImageContainer } from "./styles";

const AboutUsImage = ({ aboutUsImage }: { aboutUsImage: HomePageImage }) => {
    const { url, alt } = aboutUsImage;
    return (
        <div className={aboutUsImageContainer}>
            <img src={url} alt={alt} height="100%" width="100%" loading="eager" />
        </div>
    );
};

export default AboutUsImage;
