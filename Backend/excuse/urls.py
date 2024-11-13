from django.urls import path

from excuse.views import ListCreateExcusesView

urlpatterns = [
    path('', ListCreateExcusesView.as_view()),
]