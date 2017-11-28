from django.conf.urls import url, include
from proyecto2.views import ArticuloViewSet
from rest_framework import renderers
#se agrega para anadir un conjunto
from rest_framework.urlpatterns import format_suffix_patterns
from proyecto2 import views
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view


# se crea un router y refistro de viewsets
router = DefaultRouter()
router.register(r'articulo', views.ArticuloViewSet)

#se agrega el esque para la api cor
schema_view = get_schema_view(title='Pastebin API')

# la API URLs son determinadas de forma automaticas por el router
#adicional mente se incluye el login en la url por le navegador de la api
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #url del esquema de la api cor
    url(r'^schema/$', schema_view),
]
