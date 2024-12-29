from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getToDos, name='get-todos')
]