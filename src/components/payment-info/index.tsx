/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { BankAccountDetail, GPayImage, PhonePeImage, UpiContent, UpiImage } from "@modules/interface/cms-api-data";
import ModalPopUp from "./ModalPopUp";
import { googlePayImage, phonePayImage } from "@modules/constants";
import Typography from "@mui/material/Typography";

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2)
    }
}));

const QRCode = ({ imageURL, alt }: { imageURL: string; alt: string }) => (
    <div style={{ display: "flex", justifyContent: "center", margin: "0 0 0 8rem" }}>
        <img src={imageURL} alt={alt} width="50%" height="50%" />
    </div>
);

const AccountDetails = ({
    accountHeading,
    accountDetails,
    phonePeImage,
    gPayImage
}: {
    accountHeading: string;
    accountDetails: BankAccountDetail[];
    phonePeImage: PhonePeImage;
    gPayImage: GPayImage;
}) => (
    <div>
        <div>
            <Typography gutterBottom variant="h5">
                <u>{accountHeading}</u>
            </Typography>
            {accountDetails.map((el) => (
                <Typography gutterBottom variant="h6" component="span" key={el.text} style={{ display: "block" }}>
                    {el.text}
                </Typography>
            ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
            <Typography gutterBottom variant="h5">
                <u>You can also pay with</u>
            </Typography>
            <div
                style={{
                    display: "flex",
                    width: "70%",
                    justifyContent: "space-between",
                    marginTop: "2rem"
                }}
            >
                <ModalPopUp paymentImage={phonePeImage} button="PhonePe" url={phonePayImage} />
                <ModalPopUp paymentImage={gPayImage} button="gpay" url={googlePayImage} />
            </div>
        </div>
    </div>
);

interface IPaymentInfoProps {
    upiImage: UpiImage;
    upiContent: UpiContent[];
    bank_account_details: BankAccountDetail[];
    phone_pe_image: PhonePeImage;
    gpayImage: GPayImage;
}

const PaymentInfo = ({ upiImage, upiContent, bank_account_details, phone_pe_image, gpayImage }: IPaymentInfoProps) => {
    return (
        <>
            <Typography gutterBottom variant="h6" style={{ textAlign: "center", margin: "1rem 0 3rem" }}>
                {upiContent[1].text}
            </Typography>
            <Grid container style={{ placeItems: "center" }}>
                <QRCode imageURL={upiImage.url} alt={upiImage.alt} />
                <Divider orientation="vertical" flexItem>
                    OR
                </Divider>
                <AccountDetails
                    accountHeading={bank_account_details[0].text}
                    accountDetails={bank_account_details.filter((el) => el.type === "list-item")}
                    phonePeImage={phone_pe_image}
                    gPayImage={gpayImage}
                />
            </Grid>
        </>
    );
};

export default PaymentInfo;
