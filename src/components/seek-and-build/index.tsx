import { CollectiveData, CommunicationList } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useRef } from "react";
import SubHeading from "../subHeading";
import { container, seekAndBuildImages } from "./styles";
import { useInViewport } from "react-in-viewport";

const SeekAndBuild = ({ seekAndBuildData }: { seekAndBuildData: CollectiveData }) => {
    const { communication_image, communication_list, digital_marketing_image, seo, seo_image, digital_marketing } =
        seekAndBuildData;
    return (
        <div className={container}>
            <div style={{ textAlign: "center", margin: "0 0 3rem 0" }}>
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
    const myRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const { inViewport, enterCount } = useInViewport(myRef);
    const getStyles = () => {
        if (inViewport && enterCount === 1) {
            return { WebkitTransition: "opacity 2s ease-in-out" };
        } else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: "none", opacity: "0" };
        } else {
            return {};
        }
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection,
                gap: "40px",
                ...getStyles()
            }}
            ref={myRef}
        >
            <Image
                className={seekAndBuildImages}
                src={imageSrc}
                quality={100}
                width={400}
                height={300}
                loading="lazy"
                alt={imageAltText}
                layout="fixed"
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "50%" }}>
                <Typography variant="h4" component="div" gutterBottom>
                    {subHeading.flat(1)}
                </Typography>
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
