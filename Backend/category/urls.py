from django.urls import path

from category.views import ListCreateCategoryView, RetrieveUpdateDeleteCategoryView

urlpatterns = [
    path('', ListCreateCategoryView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteCategoryView.as_view())
]