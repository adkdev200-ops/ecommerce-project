# views.py
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, ProductSerializer
from .models import Products
from django.contrib.auth import get_user_model
from .models import CustomUser

class SignupView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = SignupSerializer
    

class ProductCreateView(generics.ListCreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer


class ProductUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'

class UserData(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = SignupSerializer
    lookup_field = 'pk'