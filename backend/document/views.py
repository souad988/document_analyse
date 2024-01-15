import requests
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import APIException
from .models import Document
from .serializers import DocumentSerializer
from .utils import *
import os
import time
import json
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPEN_API_TOKEN"))


API_URL = os.environ.get('API_URL_GOOGLE')
API_KEY= os.environ.get('API_TOKEN')
headers = {"Authorization": f"Bearer {API_KEY}"}
QA_API_URL = os.environ.get('HUGGINGFACE_API_URL_QA')
class QuestionAnswerAPIView(APIView):
    """
    API endpoint for Question-Answering.
    Expected Data in Request:
    {
        "context": "Text context for question-answering",
        "question": "User-provided question"
    }
    Response Format:
    {
        "answer": "Answer to the provided question",
    }
    """
    def post(self, request, format=None):
        context = request.data['context']
        question = request.data['question']
        if not context or not question:
            return Response({'error': 'non valid input '}, status=status.HTTP_400_BAD_REQUEST)
        try:
            res = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                    "role": "system",
                    "content": f"Please in the context of the content you are provided with answer this question: {question}." 
                    },
                    {
                    "role": "user",
                    "content": context
                    }
                ],
                temperature=0.7,
                max_tokens=64,
                top_p=1
                )
            return Response({'answer': res.choices[0].message.content}, status=status.HTTP_200_OK) 
        except APIException as e:
            # Handle APIException and create the response
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        '''
        try:    
                data = {'context': context, 'question': question}
                response = requests.post(QA_API_URL, headers={"Authorization": f"Bearer {API_KEY}"}, json=data)
                data = response.json()
                return Response(data, status=status.HTTP_200_OK)
        except APIException as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)'''
        
class DocumentUploadAPIView(APIView):
    """
    API endpoint for uploading documents.

    Expected Data in Request:
    Form data with a file .

    Response Format:
    Serialized document data.
    """
    parser_classes = (MultiPartParser,)

    def post(self, request, format=None):
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   

class DocumentSummarizeAPIView(APIView):
    """
    API endpoint for text summarization.

    Expected Data in Request:
    Text data to be summarized.

    Response Format:
    Summarized text.
    """
    def post(self, request, format=None):
        text = request.data
        result = ''
        if not text:
            return Response({'error': 'non valid input '}, status=status.HTTP_400_BAD_REQUEST)
        try:
            res = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                    "role": "system",
                    "content": "Summarize content you are provided with for a second-grade student."
                    },
                    {
                    "role": "user",
                    "content": text
                    }
                ],
                temperature=0.7,
                max_tokens=64,
                top_p=1
                )
            return Response(res.choices[0].message, status=status.HTTP_200_OK) 
        except APIException as e:
            # Handle APIException and create the response
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        '''
        chunks = split_chunks(text)
        try:
            for chunk in chunks:    
                sample_text = 'summarize: ' + chunk
                response = requests.post(API_URL, headers=headers, json=sample_text)
                data = response.json()
                if response.status_code == 200:
                    result += data[0]['summary_text']
                else:
                    raise APIException("Network Error! Please wait 2min and Try Again!")   
            return Response(result, status=status.HTTP_200_OK)
        except APIException as e:
            # Handle APIException and create the response
                print('error for exeption', str(e))
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        '''