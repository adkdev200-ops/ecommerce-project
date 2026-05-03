from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class CustomUser(AbstractUser):
    username = None
    role_choice = {
        'buyer'  : 'buyer',
        'seller' : 'seller'
    }
    phone_number = models.CharField(max_length=10, unique= True)
    role = models.CharField(choices=role_choice, default= 'buyer')

    USERNAME_FIELD  = 'phone_number'
    objects = UserManager()


class Products(models.Model):
    category_choices = [
        ('male', 'male'),
        ('female', 'female'),
        ('kid', 'kid')
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='products/')
    category = models.CharField(choices=category_choices)

