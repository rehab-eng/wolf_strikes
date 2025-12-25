# contact/api_urls.py
from django.urls import path
from . import views

app_name = 'contact_api'

urlpatterns = [
    # المسار 'contact/' هنا يمثل /api/contact/
    path('contact/', views.submit_contact, name='submit'),
]
