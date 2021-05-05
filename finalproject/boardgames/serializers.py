from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import Boardgame, Designer, Category, Location, Play, Player

class DesignerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designer 
        fields = ('name','id')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('place','id')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('first_name', 'last_name', 'id')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('type','id')

class BoardgameSerializer(WritableNestedModelSerializer):
    category = CategorySerializer(many=False, required=False)
    designer = DesignerSerializer(many=True, required=False)

    class Meta:
        model = Boardgame
        fields = ('pk','name', 'year_published','min_players', 'max_players', 'edition', 'category',  'designer')

    """ def create(self, validated_data):
        designer_data = validated_data.pop('designer')
        boardgame = Boardgame.objects.create(**validated_data)
        Designer.objects.create(**designer_data)
        return boardgame """

class BoardgameNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boardgame
        fields = ('name',)

class PlaySerializer(WritableNestedModelSerializer):
    boardgame = BoardgameNameSerializer(required=True)
    winning_player_id = PlayerSerializer(required=False)
    players = PlayerSerializer(many=True, required=False)
    location = LocationSerializer()

    class Meta:
        model = Play
        fields = '__all__' #('pk','date', 'boardgame', 'winning_player_id','players', 'location')