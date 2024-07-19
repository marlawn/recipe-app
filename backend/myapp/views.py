from django.shortcuts import render
from rest_framework import generics
from .models import Review, Recipe
from .serializers import ReviewSerializer, RecipeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['DELETE'])
def delete_all_reviews(request):
    if request.method == 'DELETE':
        Review.objects.all().delete()
        return Response({'message': 'All reviews deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class ReviewCreate(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer