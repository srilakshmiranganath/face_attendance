from django.urls import path, include
from rest_framework import routers
from attendance.views import UploadViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'upload', UploadViewSet, basename="upload")
#router.register(r'compare', CompareViewSet, basename="compare")

urlpatterns = [
    path('', include(router.urls)),
    #path('compare/', CompareViewSet.as_view({'post': 'compare'}), name='compare'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)