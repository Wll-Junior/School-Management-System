from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta: model=Student; fields='__all__'
class TeacherSerializer(serializers.ModelSerializer):
    class Meta: model=Teacher; fields='__all__'
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta: model=Attendance; fields='__all__'
class FeeSerializer(serializers.ModelSerializer):
    class Meta: model=Fee; fields='__all__'
class RoleSerializer(serializers.ModelSerializer):
    class Meta: model=Role; fields='__all__'
