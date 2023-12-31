# Generated by Django 4.0.7 on 2023-06-29 05:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('ClassID', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('Course', models.CharField(max_length=20)),
                ('Sem', models.CharField(max_length=1)),
                ('Batch', models.CharField(max_length=1)),
                ('StudentName', models.CharField(max_length=30)),
                ('StudentFace', models.FileField(upload_to='media/')),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('SubID', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('SubName', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date', models.DateField()),
                ('Hour', models.CharField(max_length=1)),
                ('Attendance', models.CharField(max_length=3)),
                ('Class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='attendance.class')),
                ('Subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='attendance.subject')),
            ],
        ),
    ]
