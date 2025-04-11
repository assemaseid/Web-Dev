from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class= Product


class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'

class ProductsByCategoryView(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
