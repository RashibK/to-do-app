# it basically makes the database model into a format that can be easily converted to JSON format.
# in simple words, JSON data -> complex database values
# complex database objects/values -> into Python native datatype -> JSON format at last


from rest_framework import serializers
from .models import ToDo

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'