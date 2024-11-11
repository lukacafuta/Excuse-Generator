from django.contrib import admin

from excuse.models import Excuse

class ExcuseAdmin(admin.ModelAdmin):
    list_display = ['id', 'author', 'created', 'likes', 'excuse_text']

# Register your models here.
admin.site.register(Excuse, ExcuseAdmin)