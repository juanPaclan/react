# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-30 19:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyecto2', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to=b'articulos'),
        ),
    ]
