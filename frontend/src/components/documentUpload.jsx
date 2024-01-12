import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import {
  Typography, CircularProgress, Box, FormControl, FormHelperText,
  Grid, Button,
} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { uploadDocument } from '../store/slices/documentManagerSlice';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';
import validationRules from './scripts';

const DocumentUploadForm = (props) => {
  const {
    values,
    touched,
    setTouched,
    errors,
    setFieldValue,
    resetForm,
  } = props;
  const classes = useCustomStyles(mainStyles);
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const {
    document, status, loading, error,
  } = useSelector((state) => state.documents);

  const handleFileButtonClick = (fileInput) => {
    fileInput.current.click();
  };
  console.log('values', values, errors);
  const handleChange = (event) => {
    setTouched({ file: true });
    setFieldValue('file', event.currentTarget.files[0], true).then((errors) => {
      errors.file && setFieldValue('file', null, false);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(uploadDocument(values.file));
    resetForm();
  };
  return (
    <Grid
      container
      spacing={2}
      className={classes.justifyContentCenter}
    >
      <Grid
        item
        xs={12}
        lg={8}
      >
        <Box
          className={clsx(
            classes.backgroundColor,
            classes.flexVerticalCenter,
            classes.shadow,
            classes.boxPadding,
          )}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {(status === 'succeeded' || (status === 'idle' && document.name)) && (
              <Typography className={classes.text}>{document.name}</Typography>
              )}
              {status === 'failed' && (
              <Typography className={classes.error}>{error}</Typography>
              )}
            </>
          )}
          <Button
            variant="outlined"
            size="large"
            margin="normal"
            onClick={() => handleFileButtonClick(fileInputRef)}
            fullWidth
          >
            Select File
          </Button>
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            margin="none"
          >
            <input
              ref={fileInputRef}
              className={classes.displayNone}
              aria-hidden="true"
              type="file"
              accept="csv"
              name="file"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <Typography color="textSecondary" variant="caption" component="span" id="file_count_el">
              {
                  values.file && values.file.name
                }
            </Typography>
            <FormHelperText error>
              {touched.file && errors.file && errors.file}
            </FormHelperText>
          </FormControl>
          <Button
            endIcon={<FileUploadIcon />}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            className={classes.btn}
            disabled={loading || !values.file}
          >
            Upload
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

DocumentUploadForm.propTypes = {
  values: PropTypes.shape({
    file: PropTypes.instanceOf(File),
    // Define the expected types for each property in the 'values' object
    // These should align with the actual data structure in your application
  }).isRequired,
  touched: PropTypes.shape({
    file: PropTypes.bool,
    // Define the expected types for each property in the 'touched' object
    // These should align with the actual data structure in your application
  }).isRequired,
  errors: PropTypes.shape({
    file: PropTypes.string,
    // Define the expected types for each property in the 'errors' object
    // These should align with the actual data structure in your application
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

const DocumentUpload = withFormik({
  mapPropsToValues: () => ({
    file: null,
  }),
  validationSchema: validationRules,
  displayName: 'BasicForm',
})(DocumentUploadForm);

export default DocumentUpload;
