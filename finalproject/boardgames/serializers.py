from rest_framework import serializers
from .models import Boardgame, Designer

class BoardgameSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    designer = serializers.StringRelatedField(many=True)

    class Meta:
        model = Boardgame
        fields = ('name', 'year_published','min_players', 'max_players', 'edition', 'category',  'designer')