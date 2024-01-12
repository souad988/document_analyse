from rest_framework import serializers
from .models import Document
from .utils import *

class DocumentSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    class Meta:
        model = Document
        fields = ('id', 'file', 'uploaded_at', 'text')

    def get_text(self, obj):
        # Assuming you have a method to extract text from the file path
        return extract_text_from_pdf(obj.file.path)    