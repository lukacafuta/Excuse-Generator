from django.contrib.auth.models import User
from rest_framework import serializers
from category.models import Category
from excuse.serializers import ExcuseSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category      # this is the model serializer looks at
        fields = ['id', 'category', 'created', 'updated']  # these are the fields that serializer will return