import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    <Link
      key="home"
      underline="hover"
      variant="h6"
      color="white"
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      | Blogged Labs
    </Link>,
    ...pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSegments.length - 1;

      return isLast ? (
        <Typography key={url}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Typography>
      ) : (
        <Link
          key={url}
          underline="hover"
          color="white"
          href={url}
          onClick={(e) => {
            e.preventDefault();
            navigate(url);
          }}
        >
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Link>
      );
    }),
  ];

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <img src={reactLogo} />
        <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};
