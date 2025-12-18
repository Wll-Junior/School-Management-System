from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health),
    path('login/', views.login_view),
    path('dashboard/', views.dashboard),
]
