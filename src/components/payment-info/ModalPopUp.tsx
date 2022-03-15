/* eslint-disable @next/next/no-img-element */
import { GPayImage, PhonePeImage } from "@src/modules/interface/cms-api-data";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

type ModalPopUpType = {
    paymentImage: PhonePeImage | GPayImage;
    button: string;
    url: string;
};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const ModalPopUp = ({ paymentImage, button, url }: ModalPopUpType) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <img src={url} alt={button} width="60px" height="60px" onClick={handleOpen} style={{ cursor: "pointer" }} />
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <img src={paymentImage.url} alt={paymentImage.alt} width="100%" height="100%" />
                </Box>
            </Modal>
        </div>
    );
};

export default ModalPopUp;
