from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.ToDosAPI, name='todos-api'),
    path('api/<int:pk>', views.editTodos, name='update-todo-api'),
]