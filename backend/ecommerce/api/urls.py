from django.urls import path, include
from .views import SignupView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("signup/", SignupView.as_view(), name="signup"),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
