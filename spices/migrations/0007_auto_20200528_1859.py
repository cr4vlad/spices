# Generated by Django 3.0.5 on 2020-05-28 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spices', '0006_auto_20200527_0225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='keywords',
            field=models.CharField(blank=True, default='', max_length=1023),
        ),
        migrations.AlterField(
            model_name='product',
            name='keywords',
            field=models.CharField(blank=True, default='', max_length=1023),
        ),
        migrations.AlterField(
            model_name='product',
            name='logo',
            field=models.FileField(blank=True, null=True, upload_to='logos'),
        ),
    ]
