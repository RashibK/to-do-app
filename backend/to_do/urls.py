from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.ToDosAPI, name='todos-api')
]