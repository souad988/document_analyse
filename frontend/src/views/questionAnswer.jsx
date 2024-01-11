import React, { useState } from 'react';
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
import { answerQuestion } from '../store/slices/documentManagerSlice';

function QuestionAnswer() {
  const classes = useCustomStyles(mainStyles);
  const [question, setQuestion] = useState('');
  const { questions, answers, document } = useSelector((state) => state.documents);
  const dispatch = useDispatch();
  console.log(questions, answers);
  const handleSubmit = () => {
    dispatch(answerQuestion({ text: document.content, question }));
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
              classes.textArea,
              classes.subContainer,
              classes.flexVerticalSpaceBetween,
            )}
          >
            <Box
              className={clsx(
                classes.boxPadding,
              )}
            >
              {questions && questions.map((value, index) => (
                <Grid key={`qacontainer${value}`}>
                  <TextListItem type="Q" text={value} />
                  <TextListItem type="A" text={answers[index]} />
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
