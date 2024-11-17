from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from category.models import Category
from category.serializers import CategorySerializer, CategoryCreateSerializer


# Create your views here.

# list categories (no authentication required)
class ListCategoriesView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Create a new category (admin-only)
class CreateCategoryView(CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Retrieve, update, or delete a category (admin-only)
class RetrieveUpdateDeleteCategoryView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


