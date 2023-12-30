from django.contrib import admin
from django.urls import path
from .views import DocumentUploadAPIView

urlpatterns = [
    path('document/upload', DocumentUploadAPIView.as_view()),
]
