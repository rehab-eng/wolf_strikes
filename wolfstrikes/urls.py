# wolfstrikes/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# URLs that should not have a language prefix
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contact.api_urls')),
    path('i18n/', include('django.conf.urls.i18n')),
]

# URLs that should be translated
urlpatterns += i18n_patterns(
    path('', include('home.urls', namespace='home')),
    path('about/', include('about.urls', namespace='about')),
    path('projects/', include('projects.urls', namespace='projects')),
    path('team/', include('team.urls', namespace='team')),
    path('contact/', include('contact.urls', namespace='contact')),
)

# This is the correct and simplest way to serve static files in development
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
