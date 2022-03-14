import { OurTeam, OurMission } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";

interface IOurTeamAndMissionProps {
    ourTeamContent: OurTeam[];
    ourMission: OurMission[];
}

const OurTeamAndMission = ({ ourTeamContent, ourMission }: IOurTeamAndMissionProps) => {
    return (
        <div>
            <CommonData
                heading={ourTeamContent.find((el) => el.type === "paragraph")?.text!}
                content={ourTeamContent.find((el) => el.type === "list-item")?.text!}
            />
            <CommonData
                heading={ourMission.find((el) => el.type === "paragraph")?.text!}
                content={ourMission.find((el) => el.type === "list-item")?.text!}
            />
        </div>
    );
};

interface ICommonDataProps {
    heading: string;
    content: string;
}
const CommonData = ({ heading, content }: ICommonDataProps) => {
    return (
        <div style={{ margin: "2rem 0 0" }}>
            <Typography gutterBottom variant="h4" component="p" style={{ color: "red" }}>
                {heading}
            </Typography>
            <Typography gutterBottom variant="h6" component="p">
                {content}
            </Typography>
        </div>
    );
};

export default OurTeamAndMission;
