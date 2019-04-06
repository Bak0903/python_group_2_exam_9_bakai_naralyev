from webapp.models import Good, Category, Order, Photo
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets
from api_v1.serializers import GoodSerializer, CategorySerializer, OrderSerializer, AuthTokenSerializer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, APIView
from django.contrib.auth.models import User


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'id': user.id,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        })


class TokenLoginView(APIView):
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user = token.user
        return Response({
            'token': token.key,
            'id': user.id,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        })


class BaseViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        permissions = super().get_permissions()

        if self.request.method in ["POST", "DELETE", "PUT", "PATCH"]:
            permissions.append(IsAuthenticated())
        return permissions


class GoodViewSet(BaseViewSet):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer


class CategoryViewSet(BaseViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(BaseViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer