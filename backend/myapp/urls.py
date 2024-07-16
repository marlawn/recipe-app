from django.urls import include, path
from .views import RecipeListCreate, RecipeDetail, ReviewCreate

urlpatterns = [
    path('api/recipes/', RecipeListCreate.as_view(), name='recipe-list-create'),
    path('api/recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe_detail'),
    path('api/reviews/', ReviewCreate.as_view(), name='review-create'),
]