# home/views.py
from django.shortcuts import render

def home(request):
    # This function's only job is to render the home page template.
    # We are now correctly pointing it to 'home.html'.
    return render(request, 'home.html')
