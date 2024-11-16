from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from category.models import Category
from category.serializers import CategorySerializer, CategoryCreateSerializer


# Create your views here.
class ListCreateCategoryView(GenericAPIView):
    queryset = Category.objects.all()
    # serializer_class = CategorySerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return CategorySerializer
        return CategoryCreateSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data, status=201)


class RetrieveUpdateDeleteCategoryView(GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)