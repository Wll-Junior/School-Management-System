from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    name = models.CharField(max_length=100)
    grade = models.CharField(max_length=20)

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=50)

class Attendance(models.Model):
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    date = models.DateField()
    present = models.BooleanField(default=True)

class Fee(models.Model):
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8,decimal_places=2)
    paid = models.BooleanField(default=False)

class Role(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    role = models.CharField(max_length=20)
