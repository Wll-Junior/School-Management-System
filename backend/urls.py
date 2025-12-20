from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
 path('admin/', admin.site.urls),
 path('', views.home),
 path('register/', views.register_view),
 path('login/', views.login_view),
 path('logout/', views.logout_view),

 path('dashboard/', views.dashboard),
 path('students/', views.students),
 path('teachers/', views.teachers),
 path('classes/', views.classes),
 path('attendance/', views.attendance),
 path('fees/', views.fees),
 path('reports/', views.reports),
]
