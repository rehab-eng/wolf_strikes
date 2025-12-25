# projects/urls.py
from django.urls import path
from . import views

app_name = 'projects' # Defines the namespace

urlpatterns = [
    path('', views.projects, name='projects'), # Gives the name 'projects' to this view
]
