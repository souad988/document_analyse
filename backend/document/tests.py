from django.test import TestCase
from rest_framework.test import APIRequestFactory
from .views import DocumentUploadAPIView, DocumentSummarizeAPIView

class DocumentSummarizeAPIViewTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()

    def test_successful_summarization(self):
        # Create a request with valid text data
        text_data = 'Lorem ipsum dolor sit amet'
        request = self.factory.post('/api/summarize/', text_data, format='json')
        view = DocumentSummarizeAPIView.as_view()
        response = view(request)
        
        self.assertEqual(response.status_code, 200)  # Ensure status code for successful summarization

    def test_failed_summarization(self):
        # Create a request with invalid text data
        invalid_text_data = None
        request = self.factory.post('/api/summarize/', invalid_text_data, format='json')
        view = DocumentSummarizeAPIView.as_view()
        response = view(request)

        self.assertEqual(response.status_code, 500)  # Ensure status code for failed summarization
