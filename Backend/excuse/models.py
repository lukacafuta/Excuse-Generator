from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models

# User = get_user_model()

# Create your models here.
class Excuse(models.Model):

    CATEGORY_CHOICES = [
        ('work', 'Work'),
        ('school', 'School'),
        ('family', 'Family'),
        ('friends', 'Friends'),
        ('relationship', 'Relationship'),
        ('coding', 'Coding'),
        ('other', 'Other')
    ]

    excuse_text = models.CharField(max_length=1000)     # excuse text
    nickname = models.CharField(max_length=50, blank=True, null=True)      # nickname of the user
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)        # predefined categories
    likes = models.IntegerField(default=0)      # number of likes
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.category}: {self.excuse_text[:50]}"