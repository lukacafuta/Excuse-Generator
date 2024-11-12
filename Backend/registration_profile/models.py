import string
import random

from django.contrib.auth.models import User
from django.db import models


def code_generator(length=12):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for i in range(length))


# Create your models here.
class RegistrationProfile(models.Model):
    code = models.CharField(max_length=12, default=code_generator)
    user = models.OneToOneField(to=User, related_name='registration_profile', on_delete=models.CASCADE)