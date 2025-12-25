# team/views.py
from django.shortcuts import render

# The function name MUST match the name in urls.py
def team(request):
    # For now, we just render the template.
    # Later, we can add team members from the database.

    return render(request, 'team.html')