from rest_framework import serializers;

class ClassSerializer(serializers.Serializer):
    class_id = serializers.CharField()
    course = serializers.CharField()
    sem = serializers.CharField()
    batch = serializers.CharField()
    student_name = serializers.CharField()
    student_face = serializers.FileField()

    class Meta:
        fields = ['class_id', 'course', 'sem', 'batch', 'student_name', 'student_face']

class SubjectSerializer(serializers.Serializer):
    sub_id = serializers.CharField()
    sub_name = serializers.CharField()

    class Meta:
        fields = ['sub_id', 'sub_name']

class AttendanceSerializer(serializers.Serializer):
    date = serializers.DateField()
    hour = serializers.CharField()
    attendance = serializers.CharField()

    class Meta:
        fields = ['date', 'hour', 'class_id', 'sub_id', 'attendance']
