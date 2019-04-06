from django.urls import include, path
from rest_framework import routers
from api_v1 import views

router = routers.DefaultRouter()
router.register(r'goods', views.GoodViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'orders', views.OrderViewSet)


app_name = 'api_v1'

urlpatterns = [
    path('', include(router.urls))
]