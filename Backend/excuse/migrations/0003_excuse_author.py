# Generated by Django 5.1.3 on 2024-11-11 13:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("excuse", "0002_remove_excuse_author"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name="excuse",
            name="author",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="excuses",
                to=settings.AUTH_USER_MODEL,
            ),
            preserve_default=False,
        ),
    ]