from rest_framework import serializers

from category.models import Category
from excuse.models import Excuse


class ExcuseSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.category')

    class Meta:
        model = Excuse      # this is the model serializer looks at
        fields = ['id', 'excuse_text', 'nickname', 'category', 'category_name', 'likes', 'created']  # these are the fields that serializer will return

    def create(self, validated_data):
        # prevent 'likes' from being set during creation
        validated_data.pop('likes', None)
        return super().create(validated_data)

    def validate_category(self, value):
        if not Category.objects.filter(pk=value.id).exists():
            raise serializers.ValidationError(f"'{value}' is not a valid category.")
        return value