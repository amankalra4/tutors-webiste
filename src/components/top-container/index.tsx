import { HomePageImage, VisionText } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { container, homePageImageClass, visionTextClass } from "./styles";

interface ITopContainerProps {
    visionText: VisionText[];
    homeImage: HomePageImage;
}

const TopContainer = ({ visionText, homeImage }: ITopContainerProps) => {
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
                    <Typography
                        key={index}
                        gutterBottom
                        variant="h6"
                        component="p"
                        style={{ marginBottom: "20px", fontStyle: "italic" }}
                    >
                        {el.text}
                    </Typography>
                ))}
            </div>
            <div className={homePageImageClass}>
                <Image
                    src={homeImage.url}
                    quality={100}
                    width={500}
                    height={400}
                    alt={homeImage.alt}
                    className={homePageImageClass}
                />
            </div>
        </div>
    );
};

export default TopContainer;
