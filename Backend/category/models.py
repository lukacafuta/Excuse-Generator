from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models

# from excuse.models import Excuse


# User = get_user_model()

# Create your models here.
class Category(models.Model):
    category = models.CharField(max_length=255, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.category    # display the category name in admin panel