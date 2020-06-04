from django.db import models
from django.utils import timezone
import uuid

class Category(models.Model):
    id = models.CharField(primary_key=True, max_length=20)
    title = models.CharField(max_length=255)
    index = models.IntegerField(blank=True, default=0)
    keywords = models.CharField(max_length=1023, blank=True, default='')
    meta_description = models.CharField(max_length=255, blank=True, default='')

    def __str__(self):
        return self.id + " - " + self.title

    class Meta:
        verbose_name_plural = "Categories"


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(blank=True, default='')
    keywords = models.CharField(max_length=1023, blank=True, default='')
    meta_description = models.CharField(max_length=255, blank=True, default='')
    logo = models.FileField(upload_to='logos', null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=0)
    price20 = models.DecimalField(max_digits=7, decimal_places=0, blank=True, null=True)
    price50 = models.DecimalField(max_digits=7, decimal_places=0, blank=True, null=True)
    price100 = models.DecimalField(max_digits=7, decimal_places=0, blank=True, null=True)

    def __str__(self):
        return self.title + " - UAH " + str(self.price)