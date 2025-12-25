# home/urls.py

from django.urls import path
from . import views

app_name = 'home' # This defines the namespace

urlpatterns = [
    path('', views.home, name='home'), # This is the pattern named 'home'
]
