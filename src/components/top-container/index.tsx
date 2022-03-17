/* eslint-disable @next/next/no-img-element */
import { HomePageImage, VisionText } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import { container, homePageImageClass, visionTextClass, heading } from "./styles";

interface ITopContainerProps {
    visionText: VisionText[];
    homeImage: HomePageImage;
}

const TopContainer = ({ visionText, homeImage }: ITopContainerProps) => {
    const getTitle = visionText.filter((el) => el.type === "list-item");
    return (
        <div className={container}>
            <div className={visionTextClass}>
                <Typography variant="h3" component="h1" gutterBottom className={heading}>
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
                <img src={homeImage.url} width="100%" height="100%" alt={homeImage.alt} className={homePageImageClass} />
            </div>
        </div>
    );
};

export default TopContainer;
