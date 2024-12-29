from rest_framework.decorators import api_view
from .models import ToDo
from .serializers import ToDoSerializer
from rest_framework.response import Response

# for listing all the objects we have in database models, through GET request

@api_view(['GET'])
def getToDos(request):
    to_dos = ToDo.objects.all()
    serializer = ToDoSerializer(to_dos, many=True)
    return Response(serializer.data)

