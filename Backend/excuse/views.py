import random

from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from category.models import Category
from excuse.models import Excuse
from excuse.serializers import ExcuseSerializer


# Create your views here.

# list and create excuses
class ListCreateExcusesView(ListCreateAPIView):
    serializer_class = ExcuseSerializer

    # filter excuses by category if provided
    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        if category:
            return Excuse.objects.filter(category=category)
        return Excuse.objects.all()


# retrieve, update, and delete excuses
class RetrieveUpdateDeleteExcusesView(RetrieveUpdateDestroyAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer


# fetch a random excuse by category
class RandomExcuseView(APIView):
    def get(self, request, category):
        if not Category.objects.filter(pk=category).exists():
            return Response({"error": "Category not found."}, status=404)
        excuses = Excuse.objects.filter(category=category)
        if not excuses.exists():
            return Response({"error": "No excuses found in this category."}, status=404)
        random_excuse = random.choice(excuses)
        serializer = ExcuseSerializer(random_excuse)
        return Response(serializer.data)


# Admin-only delete view
class AdminDeleteExcuseView(RetrieveUpdateDestroyAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer
    permission_classes = [IsAdminUser]  # Restrict access to admins


# like an excuse
class LikeExcuseView(APIView):
    def post(self, request, pk):
        try:
            excuse = Excuse.objects.get(pk=pk)
            excuse.likes += 1  # increment the likes
            excuse.save()
            return Response({"message": "Excuse liked successfully!", "likes": excuse.likes}, status=200)
        except Excuse.DoesNotExist:
            return Response({"error": "Excuse not found."}, status=404)
