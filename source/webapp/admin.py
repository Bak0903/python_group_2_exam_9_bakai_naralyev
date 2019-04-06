from django.contrib import admin
from webapp.models import Category, Good, Order, Photo


admin.site.register(Category)
admin.site.register(Good)
admin.site.register(Photo)
admin.site.register(Order)