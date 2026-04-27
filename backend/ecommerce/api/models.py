from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class CustomUser(AbstractUser):
    username = None
    phone_number = models.CharField(max_length=10, unique= True)

    USERNAME_FIELD  = 'phone_number'
    objects = UserManager()