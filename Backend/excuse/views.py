from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from excuse.models import Excuse
from excuse.serializers import ExcuseSerializer


# Create your views here.
class ListCreateExcusesView(GenericAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer

    def get(self, request, *args, **kwargs):
        excuses = Excuse.objects.all()
        serializer = ExcuseSerializer(excuses, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ExcuseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class RetrieveUpdateDeleteExcusesView(GenericAPIView):
    queryset = Excuse.objects.all()
    serializer_class = ExcuseSerializer

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