from django.db import models
import os

class Document(models.Model):
    file = models.FileField(upload_to='media/documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=True, null=True) 

    def __str__(self):
        return self.name  

    def save(self, *args, **kwargs):
        self.name = os.path.basename(self.file.name)
        super().save(*args, **kwargs)