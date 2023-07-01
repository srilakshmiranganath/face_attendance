from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import ClassSerializer, SubjectSerializer, AttendanceSerializer
from django.core.files.storage import FileSystemStorage
from .models import Class, Subject, Attendance
from face_recognition import compare_faces, face_encodings, load_image_file
import os

# class CompareViewSet(ViewSet):
#     serializer_class = ClassSerializer

#     def compare(self, request):
#         if request.method == 'POST':
#             file_uploaded = request.FILES.get('compare')
#             if file_uploaded is not None:
#                 file_uploaded_path = os.path.join('comparison/', 'capture.png')

#                 if os.path.exists(file_uploaded_path):
#                     os.remove(file_uploaded_path)

#                 fs = FileSystemStorage(location='comparison/')
#                 fs.save('capture.png', file_uploaded)

#                 compare_encodings = face_encodings(load_image_file(file_uploaded_path))
#                 if len(compare_encodings) >0:
#                     compare_encoding = compare_encodings[0]
#                 else:
#                     return Response("File not encoded")

#                 saved_images_folder = 'media/'
#                 saved_images_files = os.listdir(saved_images_folder)

#                 for image_file in saved_images_files:
#                     image_path = os.path.join(saved_images_folder, image_file)
#                     image_encoding = face_encodings(load_image_file(image_path))[0]


#                     result = compare_faces([image_encoding], compare_encoding, tolerance=0.4)
#                         #result = False

#                     if result[0]:
#                         res = "Match found"
#                         return Response(res)
                        
#                 res = "Match not found"
#                 return Response(res)
#             else:
#                 return Response("No file uploaded")

class UploadViewSet(ViewSet):
    serializer_class = ClassSerializer
    
    def create(self, request):
        if request.method == 'POST':
            files_uploaded = request.FILES.getlist('file')
            file_models = []

            for file_uploaded in files_uploaded:
                file_model = Class()
                file_model.StudentFace = file_uploaded
                file_models.append(file_model)

            Class.objects.bulk_create(file_models)

            response = "Face Saved!!"
            return Response(response)

        response = "Invalid request method"
        return Response(response)
    
class AddClassViewSet(ViewSet):
    serializer_class = ClassSerializer

    def add(self, request):
        if request.method == "POST":
            class_id = request.POST.get['class_id']
            course = request.POST.get['course']
            sem = request.POST.get['sem']
            batch = request.POST.get['batch']
