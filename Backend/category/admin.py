from django.contrib import admin
from category.models import Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'category', 'created', 'updated']
    search_fields = ['category']  # allow searching by category name

# Register your models here.
admin.site.register(Category, CategoryAdmin)