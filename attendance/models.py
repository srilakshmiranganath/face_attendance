from django.db import models

class Class(models.Model):
    ClassID = models.CharField(max_length=10, primary_key=True)
    Course = models.CharField(max_length=20)
    Sem = models.CharField(max_length=1)
    Batch = models.CharField(max_length=1)
    StudentName = models.CharField(max_length=30)
    StudentFace = models.FileField(blank=False, null=False, upload_to='media/')

    def __str__(self):
        return self.StudentFace.name

class Subject(models.Model):
    SubID = models.CharField(max_length=10, primary_key=True)
    SubName = models.CharField(max_length=30)

class Attendance(models.Model):
    Date = models.DateField()
    Hour = models.CharField(max_length=1)
    Class = models.ForeignKey(Class, on_delete=models.CASCADE)
    Subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    Attendance = models.CharField(max_length=3)
