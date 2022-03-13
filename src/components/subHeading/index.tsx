import Typography from "@mui/material/Typography";

const SubHeading = ({ title, color }: { title: string; color?: string }) => (
    <Typography variant="h4" component="h1" gutterBottom style={{ color: `${color ? color : ""}` }}>
        {title}
    </Typography>
);

export default SubHeading;
