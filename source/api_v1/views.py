from webapp.models import Good, Category, Order, Photo
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets
from api_v1.serializers import GoodSerializer, CategorySerializer, OrderSerializer


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