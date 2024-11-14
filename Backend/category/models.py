from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models

from excuse.models import Excuse


# User = get_user_model()

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(to=User, related_name='categories', on_delete=models.CASCADE)
    excuses = models.ManyToManyField(to=Excuse, related_name='categories')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.name