from django.contrib import admin
from django.urls import path
from .views import DocumentUploadAPIView, DocumentSummarizeAPIView

urlpatterns = [
    path('document/upload', DocumentUploadAPIView.as_view()),
    path('document/summarize', DocumentSummarizeAPIView.as_view()),
]
