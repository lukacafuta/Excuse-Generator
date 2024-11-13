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
