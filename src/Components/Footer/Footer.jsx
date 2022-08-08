import { makeStyles } from "@mui/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em 6em",
    color: "darkturquoise",
    fontFamily: "rubik mono one",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "2em 3em",
    },
  },
  icons: {
    display: "flex",
    marginLeft: "0.5em",
    color: "aquamarine",
  },
  firstIcon: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const socialMediaAccounts = [
    {
      id: 0,
      name: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/yashrojesara/",
    },
    {
      id: 1,
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/yash-rojesara-749aa3155/",
    },
    {
      id: 2,
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/yash_rojesara/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/yash__rojesara/",
    },
  ];

  return (
    <div className={classes.footer}>
      <span>Find Me On Web:</span>
      <span>
        {socialMediaAccounts.map((account) => {
          return (
            <Link
              href={account.url}
              key={account.id}
              target="_blank"
              rel="noopener"
            >
              <account.icon
                className={`${classes.icons} ${
                  account.id === 0 && classes.firstIcon
                }`}
              />
            </Link>
          );
        })}
      </span>
    </div>
  );
};

export default Footer;
