import requests
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from .models import Document
from .serializers import DocumentSerializer
from .utils import *
import os

API_URL = os.environ.get('HUGGINGFACE_API_URL')
api_key = os.environ.get('API_TOKEN')
bart_api_url = os.environ.get('API_URL')
headers = {"Authorization": f"Bearer {api_key}"}
print('api_url',API_URL,api_key,headers)


class DocumentUploadAPIView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, format=None):
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DocumentSummarizeAPIView(APIView):
    
    def post(self, request, format=None):
        text = request.data
        print('text:::',text)
        sample_text = get_text_by_doc(text)
        print('sample_text:::::',sample_text)
        print('/*****************************************/')
        print('api_url',API_URL)
        result = ''
        for chunck in split_chunks(sample_text):    
            sample_text = 'summarize: ' + chunck
            response = requests.post(API_URL, headers=headers, json=sample_text)
            data= response.json()
            print(data)
            result += data[0]['summary_text']
        print(result)
        #data[0]['summary_text']
        return Response(result, status=status.HTTP_200_OK)