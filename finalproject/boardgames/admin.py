from django.contrib import admin
from .models import Player, Play, Designer, Category, Boardgame, Location
# Register your models here.

admin.site.register(Player)
admin.site.register(Play)
admin.site.register(Designer)
admin.site.register(Category)
admin.site.register(Boardgame)
admin.site.register(Location)