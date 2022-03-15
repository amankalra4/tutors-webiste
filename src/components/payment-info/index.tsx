import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import {
  BankAccountDetail,
  GPayImage,
  PhonePeImage,
  UpiContent,
  UpiImage,
} from "@modules/interface/cms-api-data";
import ModalPopUp from "./ModalPopUp";
import { googlePayImage, phonePayImage } from "@src/modules/constants";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

interface IPaymentInfoProps {
  upiImage: UpiImage;
  upiContent: UpiContent[];
  bank_account_details: BankAccountDetail[];
  phone_pe_image: PhonePeImage;
  gpayImage: GPayImage;
}

const PaymentInfo = ({
  upiImage,
  upiContent,
  bank_account_details,
  phone_pe_image,
  gpayImage,
}: IPaymentInfoProps) => {
  const content = (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={upiImage.url} alt={upiImage.alt} width="50%" height="50%" />
    </div>
  );

  const bankAccount = (
    <div>
      <div>
        <strong>{bank_account_details[0].text}</strong>
        {bank_account_details.map((el) => {
          if (el.type === "list-item") return <p key={el.text}>{el.text}</p>;
        })}
      </div>
      <div style={{ marginTop: "2rem" }}>
        <strong> You can also pay with</strong>
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <ModalPopUp
            paymentImage={phone_pe_image}
            button="PhonePe"
            url={phonePayImage}
          />
          <ModalPopUp
            paymentImage={gpayImage}
            button="gpay"
            url={googlePayImage}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        {upiContent[1].text}
      </div>

      <Grid container>
        <Grid item xs>
          {content}
        </Grid>
        <Divider orientation="vertical" flexItem>
          OR
        </Divider>
        <Grid item xs>
          {bankAccount}
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentInfo;
