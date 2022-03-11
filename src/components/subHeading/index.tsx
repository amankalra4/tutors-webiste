import Typography from "@mui/material/Typography";

const SubHeading = ({ title }: { title: string }) => (
    <Typography variant="h4" component="h1" gutterBottom>
        {title}
    </Typography>
);

export default SubHeading;
