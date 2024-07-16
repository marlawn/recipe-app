from rest_framework import serializers 
from .models import Recipe, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'recipe_reviewed', 'rating']

class RecipeSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Recipe
        fields = ['id', 'recipe_name', 'description', 'ingredients', 'instructions', 'reviews']