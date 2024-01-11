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
    padding: '2rem',
    resize: 'vertical',
    overflowY: 'scroll',
  },
  boxPadding: {
    padding: '2rem',
  },
  logo: {
    fontWeight: 900,
  },
  link: {
    color: theme.palette.title.secondary,
    fontWeight: 700,
    marginRight: '2rem',
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
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.palette.main,
    color: theme.palette.contrast,
    fontSize: '1.2rem',
    fontWeight: 900,
  },
  text: {
    color: `${theme.palette.text}!important`,
    fontSize: '1.2rem',
  },
});

export default mainStyles;
