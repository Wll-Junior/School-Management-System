from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

@api_view(['GET'])
def health(request):
    return Response({'status': 'API OK'})

@api_view(['POST'])
def register(request):
    data = request.data
    user = User.objects.create_user(
        username=data['username'],
        password=data['password'],
        email=data.get('email','')
    )
    return Response({'status': 'registered'})
