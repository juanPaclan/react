# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer, UserSerializer
from rest_framework import status, renderers, mixins, generics, viewsets
from rest_framework.decorators import api_view, detail_route
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import permissions
from snippets.permissions import IsOwnerOrReadOnly
from rest_framework.reverse import reverse
from rest_framework.authtoken.models import Token

# 5e1701f360961a99786e6de88df5aeac9ea45963
# usuario = User.objects.all()
# token = Token.objects.create(user=usuario[0])
# print('>>>>>>>>>>>>>>>>>>>>',token.key)

"""se crea un endpoint de entrada para la api con una vista basa en funciones regular y un decorador de solo lectura """
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'snippets': reverse('snippet-list', request=request, format=format)

    })
""" se crea un clase utilizando el modulo viewsets para poder listas y mostrar el detalle en una sola clase """
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    el modulo viewsets proporciona automaticamente las acciones de listas y detalle
    ReadOnlyModelViewSet es una clase para proporcionar automaticamente el valor por defecto de solo lectura
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SnippetViewSet(viewsets.ModelViewSet):
    """
    esta clase proporciona automaticamente acciones de lista, creacion, actualizar y eliminar
    ademas tambien proporciona unas acciones extras destacadas
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# """ se crean las vistas de los datos del usuario por que existe una relacion con el modelo de snippets """
# class UserList(generics.ListAPIView):
#     """ clase de listados de los usuarios """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
# class UserDetail(generics.RetrieveAPIView):
#     """ clase del detalle de los usuarios """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# """ vistas genericas basadas en clases """
# class SnippetList(generics.ListCreateAPIView):
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
#     queryset = Snippet.objects.all()
#     serializer_class = SnippetSerializer
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)
#
# class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly,
#                       IsOwnerOrReadOnly,)
#     queryset = Snippet.objects.all()
#     serializer_class = SnippetSerializer
#
# class SnippetHighlight(generics.GenericAPIView):
#     queryset = Snippet.objects.all()
#     renderer_classes = (renderers.StaticHTMLRenderer,)
#
#     def get(self, request, *args, **kwargs):
#         snippet = self.get_object()
#         return Response(snippet.highlighted)

# """ vistas basadas en clases utilizando mixins reduse el codigo, solo se le pasa el queryset y los serializers class """
# class SnippetList(mixins.ListModelMixin,
#                   mixins.CreateModelMixin,
#                   generics.GenericAPIView):
#     queryset = Snippet.objects.all()
#     serializer_class = SnippetSerializer
#
#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)
#
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)
#
# class SnippetDetail(mixins.RetrieveModelMixin,
#                     mixins.UpdateModelMixin,
#                     mixins.DestroyModelMixin,
#                     generics.GenericAPIView):
#     queryset = Snippet.objects.all()
#     serializer_class = SnippetSerializer
#
#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)
#
#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)
#
#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)

# """ vistas basadas en clases con apiview """
# class SnippetList(APIView):
#     """
#     lista todos los snippets, o crea unos nuevos snippets
#     """
#     def get(self, request, format=None):
#         snippets = Snippet.objects.all()
#         serializer = SnippetSerializer(snippets, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = SnippetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class SnippetDetail(APIView):
#     """
#     recupera, actualiza o elimina un snippets instanciado.
#     """
#     def get_object(self, pk):
#         try:
#             return Snippet.objects.get(pk=pk)
#         except Snippet.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = SnippetSerializer(snippet)
#         return Response(serializer.data)
#
#     def put(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = SnippetSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# """ Vistas basadas en funciones para servir informacion en objetos """
# @api_view(['GET', 'POST'])
# def snippet_list(request,  format=None):
#     """
#     lista todos los fracmentos de codigos o crea uno nuevo (snippets)
#     """
#     if request.method == 'GET':
#         snippets = Snippet.objects.all()
#         serializer = SnippetSerializer(snippets, many=True)
#         return Response(serializer.data)
#
#
#     elif request.method == 'POST':
#         serializer = SnippetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def snippet_detail(request, pk,  format=None):
#     """
#     recupera, actualiza o elimina un fracmento de codigo
#     """
#     try:
#         snippet = Snippet.objects.get(pk=pk)
#     except Snippet.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'GET':
#         serializer = SnippetSerializer(snippet)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = SnippetSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
