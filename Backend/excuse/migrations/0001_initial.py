# Generated by Django 5.1.3 on 2024-11-17 14:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("category", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Excuse",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("excuse_text", models.CharField(max_length=1000)),
                ("nickname", models.CharField(blank=True, max_length=50, null=True)),
                ("likes", models.IntegerField(default=0)),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="excuses",
                        to="category.category",
                    ),
                ),
            ],
        ),
    ]
