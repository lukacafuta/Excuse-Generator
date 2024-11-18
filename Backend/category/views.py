from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from category.models import Category
from category.serializers import CategorySerializer


# Create your views here.

# list categories (no authentication required)
class ListCategoriesView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# create a new category (admin-only)
class CreateCategoryView(CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# retrieve, update, or delete a category (admin-only)
class RetrieveUpdateDeleteCategoryView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


