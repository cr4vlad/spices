# Generated by Django 3.0.5 on 2020-05-26 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spices', '0005_auto_20200527_0222'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='keywords',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='category',
            name='meta_description',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, default='', max_length=4095),
        ),
        migrations.AddField(
            model_name='product',
            name='keywords',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='product',
            name='meta_description',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='product',
            name='price100',
            field=models.DecimalField(blank=True, decimal_places=0, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='price20',
            field=models.DecimalField(blank=True, decimal_places=0, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='price50',
            field=models.DecimalField(blank=True, decimal_places=0, max_digits=7, null=True),
        ),
    ]
