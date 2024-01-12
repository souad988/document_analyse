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
    padding: '2%',
    resize: 'vertical',
    overflowY: 'scroll',
    border: 'none',
  },
  boxPadding: {
    padding: '2%',
  },
  logo: {
    fontWeight: 900,
  },
  link: {
    color: theme.palette.title.secondary,
    fontWeight: 700,
    marginRight: '2%',
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
    height: '45vh',
    resize: 'vertical',
    overflowY: 'scroll',
  },
  mainColor: {
    backgroundColor: theme.palette.main,
  },
  secondaryColor: {
    backgroundColor: theme.palette.title.main,
  },
});

export default mainStyles;
