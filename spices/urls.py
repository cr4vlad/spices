from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'spices'

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]