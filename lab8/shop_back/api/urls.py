from django.urls import path
from .views import (
    ProductListView, ProductDetailView,
    CategoryListView, CategoryDetailView,
    ProductsByCategoryView
)

urlpatterns = [
    path('products/', ProductListView.as_view()),
    path('products/<int:id>/', ProductDetailView.as_view()),
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:id>/', CategoryDetailView.as_view()),
    path('categories/<int:id>/products/', ProductsByCategoryView.as_view()),
]
