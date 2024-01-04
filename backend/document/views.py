import requests
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from .models import Document
from .serializers import DocumentSerializer
import os

API_URL = os.environ.get('API_URL')
api_key = os.environ.get('API_TOKEN')
headers = {"Authorization": f"Bearer {api_key}"}


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
        response = requests.post(API_URL, headers=headers, json=text)
        data= response.json()
        return Response(data[0]['summary_text'], status=status.HTTP_200_OK)