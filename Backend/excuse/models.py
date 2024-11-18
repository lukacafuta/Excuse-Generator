from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models
from category.models import Category


# User = get_user_model()

# Create your models here.
class Excuse(models.Model):

    excuse_text = models.CharField(max_length=1000)     # excuse text
    nickname = models.CharField(max_length=50, blank=True, null=True)      # nickname of the user
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="excuses")        # linked to Category model
    likes = models.IntegerField(default=0)      # number of likes
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.category}: {self.excuse_text[:50]}"