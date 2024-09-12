import { SvgIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DnsIcon from "@mui/icons-material/Dns";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

export const items = [
  {
    title: "Package",
    path: "/",
    icon: (
      <SvgIcon fontSize="medium">
        <DnsIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Staking",
    path: "/staking",
    icon: (
      <SvgIcon fontSize="medium">
        <PersonIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Referral",
    path: "/referral",
    icon: (
      <SvgIcon fontSize="medium">
        <AccountTreeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Commission",
    path: "/commission",
    icon: (
      <SvgIcon fontSize="medium">
        <HistoryEduIcon />
      </SvgIcon>
    ),
  },
];
