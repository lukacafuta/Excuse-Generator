from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models

# User = get_user_model()

# Create your models here.
class Excuse(models.Model):
    excuse_text = models.CharField(max_length=1000)
    author = models.ForeignKey(to=User, related_name='excuses', on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.excuse_text