from django.urls import path
from category.views import RetrieveUpdateDeleteCategoryView, ListCategoriesView, \
    CreateCategoryView


urlpatterns = [
    path('', ListCategoriesView.as_view(), name='list_categories'),  # public endpoint to list categories
    path('create/', CreateCategoryView.as_view(), name='create_category'),  # admin endpoint to create a category
    path('<int:pk>/', RetrieveUpdateDeleteCategoryView.as_view(), name='retrieve_update_delete_category'),  # admin endpoint for RUD
]