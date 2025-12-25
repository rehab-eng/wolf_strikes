from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'status', 'created_at')
    list_filter = ('status', 'year')
    search_fields = ('title', 'description')
    fieldsets = (
        ('Basic Information', {'fields': ('title', 'description', 'image')}),
        ('Details', {'fields': ('year', 'status', 'technologies')}),
    )
