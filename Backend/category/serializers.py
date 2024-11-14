from django.contrib.auth.models import User
from rest_framework import serializers

from category.models import Category
from excuse.serializers import ExcuseSerializer


class AuthorSerializer(serializers.ModelSerializer):    # could be done in the user app!
    class Meta:
        model = User
        fields = ['id', 'username']  # these are the fields that serializer will return


class CategorySerializer(serializers.ModelSerializer):
    excuses = ExcuseSerializer(many=True)   # nested serializer for 'excuses' for many-to-many relationship
    author = AuthorSerializer()            # nested serializer for 'author' for one-to-many relationship

    class Meta:
        model = Category      # this is the model serializer looks at
        fields = ['id', 'name', 'author', 'excuses']  # these are the fields that serializer will return