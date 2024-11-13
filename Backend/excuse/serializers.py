from rest_framework import serializers

from excuse.models import Excuse


class ExcuseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excuse      # this is the model serializer looks at
        fields = '__all__'  # these are the fields that serializer will return