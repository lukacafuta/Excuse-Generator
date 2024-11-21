from django.urls import path
from excuse.views import ListCreateExcusesView, RetrieveUpdateDeleteExcusesView, RandomExcuseView, LikeExcuseView, \
    RandomExcuseAllCategoriesView

urlpatterns = [
    path('', ListCreateExcusesView.as_view(), name='list_create_excuses'),
    path('<int:pk>/', RetrieveUpdateDeleteExcusesView.as_view(), name='retrieve_update_delete_excuse'),
    path('random/<str:category>/', RandomExcuseView.as_view(), name='random_excuse'),
    path('random/', RandomExcuseAllCategoriesView.as_view(), name='random_excuse_no_category'),
    path('<int:pk>/like/', LikeExcuseView.as_view(), name='like_excuse'),  # endpoint for liking
]