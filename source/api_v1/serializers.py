from webapp.models import Good, Category, Order, Photo
from django.contrib.auth.models import User
from rest_framework import serializers


class InlinePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'photo')


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class GoodSerializer(serializers.ModelSerializer):
    photo_good = InlinePhotoSerializer(many=True, read_only=True)
    category = InlineCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Good
        fields = ('id', 'name', 'description', 'receipt_date', 'price', 'category', 'photo_good')


class OrderSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True, source='user')

    def get_username(self, order):
        return order.user.username

    class Meta:
        model = Order
        fields = ('id', 'username', 'goods', 'phone', 'address', 'comment', 'order_date')
