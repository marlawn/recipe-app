from django.urls import include, path
from .views import RecipeListCreate, RecipeDetail, ReviewCreate, delete_all_reviews

urlpatterns = [
    path('api/recipes/', RecipeListCreate.as_view(), name='recipe-list-create'),
    path('api/recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe_detail'),
    path('api/reviews/', ReviewCreate.as_view(), name='review-create'),
    path('api/reviews/delete_all/', delete_all_reviews, name='delete_all_reviews'),
]