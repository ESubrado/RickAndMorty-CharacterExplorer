import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const TransparentBtn = styled(Button)({
  backgroundColor: "transparent",
  color: "#1976d2",
  boxShadow: "none",
  border: "1px solid #1976d2",
  "&:hover": {
    backgroundColor: "rgba(25, 118, 210, 0.08)",
    boxShadow: "none",
  },
});

export default TransparentBtn