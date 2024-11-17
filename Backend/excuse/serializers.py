from rest_framework import serializers

from excuse.models import Excuse


class ExcuseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Excuse      # this is the model serializer looks at
        fields = ['id', 'excuse_text', 'nickname', 'category', 'likes', 'created']  # these are the fields that serializer will return

    def validate_category(self, value):
        valid_categories = [choice[0] for choice in Excuse.CATEGORY_CHOICES]
        if value not in valid_categories:
            raise serializers.ValidationError(f"'{value}' is not a valid category. Choose from {valid_categories}.")
        return value