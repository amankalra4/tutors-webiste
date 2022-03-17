/* eslint-disable @next/next/no-img-element */
import { CollectiveData, CommunicationList } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
// import Image from "next/image";
import SubHeading from "../subHeading";
import { container, seekAndBuildImages, contentContainer, contentHeading, containerHeading } from "./styles";
import useReactViewPort from "@src/modules/use-react-viewport";
import useMediaQuery from "@mui/material/useMediaQuery";

const SeekAndBuild = ({ seekAndBuildData }: { seekAndBuildData: CollectiveData }) => {
    const { communication_image, communication_list, digital_marketing_image, seo, seo_image, digital_marketing } =
        seekAndBuildData;
    return (
        <div className={container}>
            <div className={containerHeading}>
                <SubHeading title="Seek and Build" />
            </div>
            <AlternateComponent
                imageSrc={communication_image.url}
                imageAltText={communication_image.alt}
                flexDirection="row"
                subHeading={[...communication_list.filter((el) => el.type === "paragraph").map((el) => el.text)]}
                displayData={communication_list.filter((el) => el.type !== "paragraph")}
            />
            <AlternateComponent
                imageSrc={seo_image.url}
                imageAltText={seo_image.alt}
                flexDirection="row-reverse"
                subHeading={[...seo.filter((el) => el.type === "paragraph").map((el) => el.text)]}
                displayData={seo.filter((el) => el.type !== "paragraph")}
            />
            <AlternateComponent
                imageSrc={digital_marketing_image.url}
                imageAltText={digital_marketing_image.alt}
                flexDirection="row"
                subHeading={[...digital_marketing.filter((el) => el.type === "paragraph").map((el) => el.text)]}
                displayData={digital_marketing.filter((el) => el.type !== "paragraph")}
            />
        </div>
    );
};

interface IAlternateComponentProps {
    flexDirection: "row" | "row-reverse";
    imageSrc: string;
    imageAltText: string;
    subHeading: string[];
    displayData: CommunicationList[];
}

const AlternateComponent = ({ flexDirection, imageSrc, imageAltText, subHeading, displayData }: IAlternateComponentProps) => {
    const { getStyles, viewPortRef } = useReactViewPort();
    const isPhone = useMediaQuery("(max-width:767px)");
    return (
        <div
            style={{
                display: "flex",
                flexDirection,
                gap: "40px",
                ...getStyles()
            }}
            ref={viewPortRef}
        >
            <div className={contentContainer}>
                {/* <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}> */}
                <Typography variant="h5" component="div" gutterBottom className={contentHeading}>
                    {subHeading.flat(1)}
                </Typography>
                <img
                    className={seekAndBuildImages}
                    src={imageSrc}
                    width={isPhone ? "100%" : "40%"}
                    height={isPhone ? "100%" : "50%"}
                    loading="lazy"
                    alt={imageAltText}
                />
                {/* </div> */}
                <Typography style={{ textAlign: "justify" }}>
                    {displayData.map((el) => (
                        <span key={el.text}>{el.text}</span>
                    ))}
                </Typography>
            </div>
        </div>
    );
};

export default SeekAndBuild;
