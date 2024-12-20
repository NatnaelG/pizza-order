import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "857px",
  height: "591px",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,

  justifyContent: "center",
  display: "flex",
};

export default function Successmodal({
  handleSuccessModalClose,
  successModalOpen,
  type,
}: {
  handleSuccessModalClose: () => void;
  successModalOpen: boolean;
  type: "Order" | "Menu";
}) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={successModalOpen}
        onClose={handleSuccessModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box data-id={"order-success-modal"} sx={style}>
          <Stack
            sx={{
              m: "auto",
              width: "602px",
              height: "394px",
              textAlign: "center",
              //   p: 5,
              alignItems: "center",
            }}
            spacing={5}
          >
            <Box
              sx={{
                width: "281px",
                height: "281px",
                borderRadius: "50%",
                background: "#05C6051A",
                color: "#fff",

                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "167px",
                  height: "167px",
                  borderRadius: "50%",
                  background: "#05C605",
                  color: "#fff",
                  // fontWeight:900

                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",

                  "& .MuiSvgIcon-root": {
                    fontSize: "7.5rem",
                  },
                }}
              >
                <CheckIcon />
              </Box>
            </Box>
            <Typography
              id="modal-modal-title"
              color="#05C605"
              fontWeight={700}
              fontSize={"32px"}
            >
              {type === "Menu"
                ? "Your have uploaded the Pizza successfully."
                : "Your order has been successfully completed!"}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
