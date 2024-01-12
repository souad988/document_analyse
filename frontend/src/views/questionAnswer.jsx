import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Box,
  Grid, Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';
import DocumentUpload from '../components/documentUpload';
import TextListItem from '../components/textListItem';
import { questionAnswer } from '../store/slices/questionAnswerSlice';

function QuestionAnswer() {
  const classes = useCustomStyles(mainStyles);
  const [question, setQuestion] = useState('');
  const { document } = useSelector((state) => state.documents);
  let { loading, questions, answers } = useSelector((state) => state.questionAnswer);
  const dispatch = useDispatch();
  const scrollableDivRef = useRef();
  useEffect(() => {
    // Scroll to the bottom when the component mounts or when content changes
    scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight + '2rem';
  }, [questions, answers]);

  const handleSubmit = () => {
    questions = [...questions, question];
    answers = [...answers, ''];
    dispatch(questionAnswer({ text: document.text, question }));
  };
  return (
    <Container
      className={
      clsx(classes.flexVerticalCenter)
      }
    >

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={12}
        >
          <DocumentUpload />
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
        >
          <Box
            className={clsx(
              classes.backgroundColor,
              classes.shadow,
              classes.boxPadding,
              classes.subContainer,
              classes.flexVerticalSpaceBetween,
            )}
          >
            <Box
              ref={scrollableDivRef}
              className={clsx(
                classes.boxPadding,
                classes.scrollable,
              )}
            >
              {questions && questions.map((value, index) => (
                <Grid key={`qacontainer${value}`}>
                  <TextListItem type="Q" text={value} />
                  <TextListItem
                    type="A"
                    text={answers[index]}
                    loading={index === questions.length ? loading : false}
                  />
                </Grid>
              ))}
            </Box>
            <Box
              className={clsx(
                classes.backgroundColor,
                classes.shadow,
                classes.boxPadding,
                classes.flexSpaceBetween,
              )}
            >
              <input
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={clsx(classes.input)}
              />
              <Button endIcon={<SendIcon />} onClick={() => handleSubmit()} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default QuestionAnswer;
