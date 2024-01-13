import * as Yup from 'yup';

const validationRules = Yup.object().shape({
  file: Yup.mixed().required('required')
    .test('fileFormat', 'Only PDF files are allowed for the moment!', (value) => {
      if (value) {
        const supportedFormats = ['pdf'];
        return supportedFormats.includes(value.name.split('.').pop());
      }
      return true;
    })
    .test('fileSize', 'File size must not be more than 3MB',
      (value) => {
        if (value) {
          return value.size <= 3145728;
        }
        return true;
      }),
});

export default validationRules;
