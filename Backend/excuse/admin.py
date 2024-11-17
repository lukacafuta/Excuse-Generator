from django.contrib import admin

from excuse.models import Excuse

class ExcuseAdmin(admin.ModelAdmin):
    list_display = ['id', 'excuse_text', 'nickname', 'category', 'likes', 'created']  # display fields
    search_fields = ['excuse_text', 'nickname', 'category']  # enable searching
    list_filter = ['category', 'created']  # add filtering options

# Register your models here.
admin.site.register(Excuse, ExcuseAdmin)