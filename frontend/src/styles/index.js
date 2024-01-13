const mainStyles = (theme) => ({
  container: {
    color: theme.palette.main,
    padding: '10vh 0',
    background: 'url(imgs/typo1.png) left center repeat',
  },
  subContainer: {
    minHeight: '60vh',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  flexVerticalSpaceBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexVerticalCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexHorizontalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  },
  fullWidth: {
    minWidth: '100%',
  },
  btn: {
    color: theme.palette.contrast,
    fontWeight: 700,
    backgroundColor: theme.palette.title.main,
    alignSelf: 'end',
  },
  mainTitle: {
    color: theme.palette.title.main,
  },
  secondaryTitle: {
    color: theme.palette.title.secondary,
    fontWeight: 700,
  },
  shadow: {
    boxShadow: `0px 0px 10px 0px ${theme.palette.background.main}`,
    borderRadius: '15px',
  },
  textArea: {
    margin: '1rem',
    resize: 'vertical',
    overflowY: 'scroll',
    color: theme.palette.text,
    border: 'none',
    '&::placeholder': {
      color: theme.palette.text,
    },
  },
  boxPadding: {
    padding: '2%',
    [theme.breakpoints.up('555')]: {
      padding: '2%',
    },
  },
  logo: {
    fontWeight: 900,
  },
  link: {
    color: theme.palette.title.secondary,
    fontWeight: 700,
    margin: '0 3%',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.title.main,
    },
    '&:active': {
      color: theme.palette.title.main,
      fontWeight: 700,
    },
  },
  backgroundColor: {
    backgroundColor: theme.palette.contrast,
  },
  footerContainer: {
    backgroundColor: theme.palette.background.secondary,
    padding: '5vh 0',
  },
  error: {
    color: 'red',
  },
  displayNone: {
    display: 'none',
  },
  input: {
    border: 'none',
    width: '90%',
    '&:focus': {
      outline: 'none',
    },
  },
  bullet: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    color: theme.palette.contrast,
    fontSize: '1.1rem',
    fontWeight: 900,
  },
  text: {
    color: `${theme.palette.text}!important`,
    fontSize: '1rem',
  },
  scrollable: {
    height: '40vh',
    resize: 'vertical',
    overflowY: 'scroll',
  },
  mainColor: {
    backgroundColor: theme.palette.main,
  },
  secondaryColor: {
    backgroundColor: theme.palette.title.main,
  },
  nav: {
    width: '300px',
  },
  marginButtom: {
    marginButtom: '3vh',
  },
  verticalBoxPadding: {
    padding: '1% 0',
  },
  midContainer: {
    width: '90%',
  },
});

export default mainStyles;
