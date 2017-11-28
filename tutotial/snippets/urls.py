from django.conf.urls import url, include
from snippets.views import SnippetViewSet, UserViewSet, api_root
from rest_framework import renderers
#se agrega para anadir un conjunto
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view


# se crea un router y registro de viewsets
router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

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







# """
# Utilizando las clases viewset se crean variables que instancian las clase y se le envia el contexto, los tipos de
# permisos, de esta forma la clase no se tiene que pasar directamente por la url, son las acciones http requeridas de cada vista
# """
# snippet_list = SnippetViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# snippet_detail = SnippetViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })
# snippet_highlight = SnippetViewSet.as_view({
#     'get': 'highlight'
# }, renderer_classes=[renderers.StaticHTMLRenderer])
# user_list = UserViewSet.as_view({
#     'get': 'list'
# })
# user_detail = UserViewSet.as_view({
#     'get': 'retrieve'
# })
#
# urlpatterns = [
#     url(r'^$', api_root),
#     url(r'^snippets/$', snippet_list, name='snippet-list'),
#     url(r'^snippets/(?P<pk>[0-9]+)/$', snippet_detail,  name='snippet-detail'),
#     url(r'^snippets/(?P<pk>[0-9]+)/highlight/$', snippet_highlight,name='snippet-highlight'),
#     url(r'^users/$', user_list, name='user-list'),
#     url(r'^users/(?P<pk>[0-9]+)/$', user_detail,  name='user-detail'),
#     url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
#
#     # """ url para las vistas basadas en clases """
#     # url(r'^snippets/$', views.snippet_list),
#     # url(r'^snippets/(?P<pk>[0-9]+)/$', views.snippet_detail),
# ]
#
# urlpatterns = format_suffix_patterns(urlpatterns)
