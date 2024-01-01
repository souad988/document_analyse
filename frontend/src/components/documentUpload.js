import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDocument } from '../store/slices/documentManagerSlice';

function DocumentUpload() {
  const dispatch = useDispatch();
  const [file, setFile] = useState({});
  const {
    document, status, loading, error,
  } = useSelector((state) => state.documents);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload document</h1>
      {loading && <div>Loading...</div>}
      {status === 'succeeded' && <div>{document.message}</div>}
      {status === 'failed' && <div>{error}</div>}
      <input type="file" name="file" onChange={(e) => handleChange(e)} />
      <button type="submit" onClick={() => dispatch(uploadDocument(file))}>Upload</button>
    </div>
  );
}

export default DocumentUpload;
