# serializers.py

from rest_framework import serializers
from .models import CustomUser, Products



class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = [
            "phone_number",
            "email",
            "first_name",
            "last_name",
            "password",
            'role'
        ]

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            phone_number=validated_data["phone_number"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            password=validated_data["password"]
        )
        return user
    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__' 

