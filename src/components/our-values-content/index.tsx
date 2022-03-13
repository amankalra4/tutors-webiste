import { Creativity, Inclusivity, Positivity } from "@modules/interface/cms-api-data";
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
            <SubHeading title="Our Values" color="red" />
            <ul>
                {data.map((el, index) => (
                    <div key={String(index)}>
                        <strong>{el.find((el) => el.type === "paragraph")?.text}</strong>
                        <p>{el.find((el) => el.type === "list-item")?.text}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default OurValues;
