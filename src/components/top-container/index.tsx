import { homePageImage } from "@modules/constants";
import { VisionText } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { container, homePageImageClass, visionTextClass } from "./styles";

const TopContainer = ({ visionText }: { visionText: VisionText[] }) => {
    const getTitle = visionText.filter((el) => el.type === "list-item");
    return (
        <div className={container}>
            <div className={visionTextClass}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Communicate.
                    <br />
                    Collaborate. Create.
                </Typography>
                {getTitle.map((el, index) => (
                    <p key={index}>{el.text}</p>
                ))}
            </div>
            <div className={homePageImageClass}>
                <Image
                    priority
                    src={homePageImage}
                    quality={100}
                    width={500}
                    height={400}
                    alt="home-page"
                    className={homePageImageClass}
                />
            </div>
        </div>
    );
};

export default TopContainer;
