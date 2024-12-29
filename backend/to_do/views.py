from rest_framework.decorators import api_view
from .models import ToDo
from .serializers import ToDoSerializer
from rest_framework.response import Response
from rest_framework import status








@api_view(['GET', 'POST'])
def ToDosAPI(request):

    # for listing all the objects we have in database models, through GET request
    if request.method == 'GET':
        to_dos = ToDo.objects.all()
        serializer = ToDoSerializer(to_dos, many=True)
        return Response(serializer.data)

    # for posting/getting the data from frontend and saving it in the database
    if request.method == 'POST':
        serializer = ToDoSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    