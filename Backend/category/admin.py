from django.contrib import admin

from category.models import Category

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'author', 'created', 'name']


# Register your models here.
admin.site.register(Category, CategoryAdmin)