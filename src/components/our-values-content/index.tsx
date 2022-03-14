import { Creativity, Inclusivity, Positivity } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import React from "react";
import SubHeading from "../subHeading";

interface IOurValuesProps {
    creativity: Creativity[];
    inclusivity: Inclusivity[];
    positivity: Positivity[];
}

const OurValues = ({ creativity, inclusivity, positivity }: IOurValuesProps) => {
    const data = [creativity, inclusivity, positivity];
    return (
        <div>
            <Typography gutterBottom variant="h4" component="p" style={{ color: "red" }}>
                Our Values
            </Typography>
            <div>
                {data.map((el, index) => (
                    <div key={String(index)}>
                        <Typography gutterBottom variant="h5" component="i" style={{ display: "block" }}>
                            <u>{el.find((el) => el.type === "paragraph")?.text}</u>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="p">
                            {el.find((el) => el.type === "list-item")?.text}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurValues;
