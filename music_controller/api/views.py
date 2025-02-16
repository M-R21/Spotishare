from rest_framework import generics 
from django.shortcuts import render
from .serializers import RoomSerializer 
from .models import Room


class Roomview(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer