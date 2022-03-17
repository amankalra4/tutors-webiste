/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CollectiveData } from "@src/modules/interface/cms-api-data";
import { cardContainer, container, individualCard } from "./styles";
import SubHeading from "../subHeading";
import useReactViewPort from "@modules/use-react-viewport";
import { containerHeading } from "../seek-and-build/styles";

const Products = ({ productsData }: { productsData: CollectiveData }) => {
    const {
        march_exams,
        march_exams_image,
        interview_programs,
        interview_training_image,
        competitive_exams,
        competitive_exams_image
    } = productsData;
    const data = [
        {
            innerData: march_exams,
            imageData: march_exams_image
        },
        {
            innerData: interview_programs,
            imageData: interview_training_image
        },
        {
            innerData: competitive_exams,
            imageData: competitive_exams_image
        }
    ];
    const { getStyles, viewPortRef } = useReactViewPort();
    return (
        <div className={container} ref={viewPortRef} style={{ ...getStyles() }}>
            <div className={containerHeading}>
                <SubHeading title="Products" />
            </div>
            <div className={cardContainer}>
                {data.map((el, index) => (
                    <CardDetails key={String(index)} imageSrc={el.imageData.url} altText={el.imageData.alt}>
                        <Typography gutterBottom variant="h5" component="div">
                            {el.innerData
                                .filter((el) => el.type === "paragraph")
                                .map((el) => (
                                    <span key={el.text}>{el.text}</span>
                                ))}
                        </Typography>
                        <Typography variant="body2" component={"span"} color="text.secondary">
                            {el.innerData
                                .filter((el) => el.type === "list-item")
                                .map((el) => (
                                    <ul key={el.text}>
                                        <li>{el.text}</li>
                                    </ul>
                                ))}
                        </Typography>
                    </CardDetails>
                ))}
            </div>
        </div>
    );
};

interface ICardDetailsProps {
    children: React.ReactNode;
    imageSrc: string;
    altText: string;
}

function CardDetails({ imageSrc, altText, children }: ICardDetailsProps) {
    return (
        <Card sx={{ maxWidth: 345 }} className={individualCard}>
            <CardActionArea>
                <CardMedia children={<img src={imageSrc} width="100%" height="170" alt={altText} loading="lazy" />} />
                <CardContent>{children}</CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Products;
