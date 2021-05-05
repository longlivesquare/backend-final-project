from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets, permissions

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Boardgame, Designer, Category, Play, Player
from .serializers import *


class BoardGameViewSet(viewsets.ModelViewSet):
    queryset = Boardgame.objects.all()
    serializer_class = BoardgameSerializer

class DesignerViewSet(viewsets.ModelViewSet):
    queryset = Designer.objects.all()
    serializer_class = DesignerSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer
