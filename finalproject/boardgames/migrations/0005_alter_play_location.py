# Generated by Django 3.2 on 2021-04-27 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardgames', '0004_auto_20210427_0834'),
    ]

    operations = [
        migrations.AlterField(
            model_name='play',
            name='location',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]