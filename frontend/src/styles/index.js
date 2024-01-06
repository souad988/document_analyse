const mainStyles = (theme) => ({
  container: {
    color: theme.palette.main,
    background: 'url(imgs/typo1.png) left center repeat',
  },
  flexHorizontalCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  shadow: {
    boxShadow: `0px 0px 10px 0px ${theme.palette.background}`,
  },
  textArea: {
    margin: '1rem',
  },
  boxPadding: {
    padding: '2rem',
  },
});

export default mainStyles;
