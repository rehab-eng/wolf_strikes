# contact/views.py
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# This function displays the main contact page
def contact(request):
    """
    Renders the main contact page.
    """
    # The only change is on this line: 'contact/contact.html' -> 'contact.html'
    return render(request, 'contact.html')


# This function handles the API request when the form is submitted
@api_view(['POST'])
def submit_contact(request):
    """
    API endpoint to handle contact form submissions.
    In a real project, this would save to a database or send an email.
    """
    # For now, we just simulate a successful submission
    print("Received contact form data:", request.data)
    return Response(
        {"message": "Thank you for your message! We will get back to you soon."},
        status=status.HTTP_200_OK
    )
