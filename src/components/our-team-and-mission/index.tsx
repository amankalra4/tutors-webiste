import { OurTeam, OurMission } from "@modules/interface/cms-api-data";
import Typography from "@mui/material/Typography";
import SubHeading from "../subHeading";

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
        <div>
            <SubHeading title={heading} color="red" />
            <Typography gutterBottom variant="h6" component="p">
                {content}
            </Typography>
        </div>
    );
};

export default OurTeamAndMission;
