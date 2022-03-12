import LinearProgress from "@mui/material/LinearProgress";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 20
    }
});

export default function LinearDeterminate() {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgress color="primary" variant="determinate" value={progress} />
        </div>
    );
}
