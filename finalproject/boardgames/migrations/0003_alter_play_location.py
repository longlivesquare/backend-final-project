# Generated by Django 3.2 on 2021-04-23 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardgames', '0002_auto_20210422_1909'),
    ]

    operations = [
        migrations.AlterField(
            model_name='play',
            name='location',
            field=models.CharField(blank=True, max_length=256),
        ),
    ]
