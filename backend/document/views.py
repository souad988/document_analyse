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

API_URL = os.environ.get('API_URL_GOOGLE')
API_KEY= os.environ.get('API_TOKEN')
headers = {"Authorization": f"Bearer {API_KEY}"}


class DocumentUploadAPIView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, format=None):
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   

class DocumentSummarizeAPIView(APIView):
    def post(self, request, format=None):
        text = request.data
        result = ''
        if not text:
            return Response({'error': 'non valid input '}, status=status.HTTP_400_BAD_REQUEST)
        chunks = split_chunks(text)
        try:
            for chunk in chunks:    
                sample_text = 'summarize: ' + chunk
                print('chunk', sample_text) 
                response = requests.post(API_URL, headers=headers, json=sample_text)
                data = response.json()
                print('result:', data)
                if response.status_code == 200:
                    result += data[0]['summary_text']
                else:
                    raise APIException("Network Error! Please wait 2min and Try Again!")   
            return Response(result, status=status.HTTP_200_OK)
        except APIException as e:
            # Handle APIException and create the response
                print('error for exeption', str(e))
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)