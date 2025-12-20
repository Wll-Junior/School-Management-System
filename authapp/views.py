from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def home(request):
    return render(request, 'home.html')

def register_view(request):
    if request.method == 'POST':
        if request.POST['password'] != request.POST['confirm']:
            return redirect('/')
        user = User.objects.create_user(
            username=request.POST['username'],
            email=request.POST['email'],
            password=request.POST['password']
        )
        login(request, user)
        return redirect('/dashboard/')
    return redirect('/')

def login_view(request):
    if request.method == 'POST':
        user = authenticate(
            username=request.POST['username'],
            password=request.POST['password']
        )
        if user:
            login(request, user)
            return redirect('/dashboard/')
    return redirect('/')

def dashboard(request):
    if not request.user.is_authenticated:
        return redirect('/')
    return render(request, 'dashboard.html')

def logout_view(request):
    logout(request)
    return redirect('/')
