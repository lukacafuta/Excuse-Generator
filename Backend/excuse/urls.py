from django.urls import path

from excuse.views import ListCreateExcusesView, RetrieveUpdateDeleteExcusesView

urlpatterns = [
    path('', ListCreateExcusesView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteExcusesView.as_view())
]