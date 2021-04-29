from django.db import models

# Create your models here.

class Designer(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self) -> str:
        return self.name

class Category(models.Model):
    type  = models.CharField(max_length=20)

    def __str__(self):
        return self.type

class Player(models.Model):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

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

class Play(models.Model):
    boardgame = models.ForeignKey(Boardgame, on_delete=models.CASCADE, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    winning_player_id = models.ForeignKey(Player, on_delete=models.CASCADE, null=True, blank=True, related_name='+')
    players = models.ManyToManyField(Player)
    location = models.TextField(blank=True, null=True)