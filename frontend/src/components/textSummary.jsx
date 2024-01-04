import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { textSummarize } from '../store/slices/documentManagerSlice'

function TextSummary() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { loading, error, summary, status } = useSelector(state => state.documents)

  const handleChange = (e) =>{
    setText(e.target.value)
  }
  return (
    <div>
        <h1>Summarize text</h1>
        {loading && <div>Loading...</div>}
        {status === 'succeeded' && <div>{summary}</div>}
        {status === 'failed' && <div>{error}</div>}
        <textarea type="text" name="text" onChange={(e) => handleChange(e)} />
        <button type="submit" onClick={() => dispatch(textSummarize(text))}>Upload</button>
    </div>
  )
}

export default TextSummary