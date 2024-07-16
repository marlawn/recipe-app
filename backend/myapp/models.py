from django.db import models

class Recipe(models.Model):
    recipe_name = models.CharField(max_length=200)
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()

    def __str__(self):
        return self.recipe_name

class Review(models.Model):
    recipe_reviewed = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    rating = models.IntegerField()

    def __str__(self):
        return f"Recipe: {self.recipe_reviewed}\nRating: {self.rating}/5"