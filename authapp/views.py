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
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import *

@login_required
def dashboard(request):
    return render(request,'dashboard.html')

@login_required
def students(request):
    return render(request,'students.html',{'data':Student.objects.all()})

@login_required
def teachers(request):
    return render(request,'teachers.html',{'data':Teacher.objects.all()})

@login_required
def classes(request):
    return render(request,'classes.html',{'data':Class.objects.all()})

@login_required
def attendance(request):
    return render(request,'attendance.html',{'data':Attendance.objects.all()})

@login_required
def fees(request):
    return render(request,'fees.html',{'data':Fee.objects.all()})

@login_required
def reports(request):
    return render(request,'reports.html',{'data':Report.objects.all()})
