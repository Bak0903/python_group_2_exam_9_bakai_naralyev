from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Good(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    receipt_date = models.DateField()
    category = models.ManyToManyField(Category, related_name='good_category')
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Photo(models.Model):
    good = models.ForeignKey(Good, related_name='photo_good', on_delete=models.PROTECT)
    photo = models.ImageField()

    def __str__(self):
        return '%s. %s' % (self.id, self.good.name)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goods = models.ManyToManyField(Good, related_name='order_goods')
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=255, null=True, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    order_date = models.DateTimeField(auto_now_add=True)