# projects/views.py
from django.shortcuts import render

def projects(request):
    # Later, we will get real projects from the database here
    context = {} 
    return render(request, 'projects.html', context)
