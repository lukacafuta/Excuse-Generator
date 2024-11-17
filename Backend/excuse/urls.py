from django.urls import path
from excuse.views import ListCreateExcusesView, RetrieveUpdateDeleteExcusesView, RandomExcuseView

urlpatterns = [
    path('', ListCreateExcusesView.as_view(), name='list_create_excuses'),
    path('<int:pk>/', RetrieveUpdateDeleteExcusesView.as_view(), name='retrieve_update_delete_excuse'),
    path('random/<str:category>/', RandomExcuseView.as_view(), name='random_excuse'),
]