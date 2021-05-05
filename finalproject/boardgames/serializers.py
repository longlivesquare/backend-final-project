from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import Boardgame, Designer, Category

class DesignerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designer 
        fields = ('name','id')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('type','id')

class BoardgameSerializer(WritableNestedModelSerializer):
    category = CategorySerializer(many=False);
    designer = DesignerSerializer(many=True, required=False)

    class Meta:
        model = Boardgame
        fields = ('pk','name', 'year_published','min_players', 'max_players', 'edition', 'category',  'designer')

    """ def create(self, validated_data):
        designer_data = validated_data.pop('designer')
        boardgame = Boardgame.objects.create(**validated_data)
        Designer.objects.create(**designer_data)
        return boardgame """

