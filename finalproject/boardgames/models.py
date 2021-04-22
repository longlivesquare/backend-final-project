from django.db import models

# Create your models here.

class Designer(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self) -> str:
        return self.name

class Category(models.Model):
    type = models.CharField(max_length=20)

class Player(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)

class Play(models.Model):
    date = models.DateField(null=True, blank=True)
    winning_player_id = models.ForeignKey(Player, on_delete=models.CASCADE, null=True, blank=True)
    players = models.ManyToManyField(Player)
class Boardgame(models.Model):
    name = models.CharField(max_length=256)
    designer = models.ManyToManyField(Designer, blank=True)
    year_published = models.IntegerField(null=True, blank=True)
    min_players = models.IntegerField(null=True, blank=True)
    max_players = models.IntegerField(null=True, blank=True)
    edition = models.FloatField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name

