# Generated by Django 3.2 on 2021-04-27 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardgames', '0003_alter_play_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='first_name',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AlterField(
            model_name='player',
            name='last_name',
            field=models.CharField(blank=True, max_length=25),
        ),
    ]
