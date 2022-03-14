import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { UpiContent, UpiImage } from "@modules/interface/cms-api-data";

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2)
    }
}));

interface IPaymentInfoProps {
    upiImage: UpiImage;
    upiContent: UpiContent[];
}

const PaymentInfo = ({ upiImage, upiContent }: IPaymentInfoProps) => {
    const content = (
        <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
        </div>
    );

    return (
        <Grid container>
            <Grid item xs>
                {content}
            </Grid>
            <Divider orientation="vertical" flexItem>
                VERTICAL
            </Divider>
            <Grid item xs>
                {content}
            </Grid>
        </Grid>
    );
};

export default PaymentInfo;
