from rest_framework import serializers
from proyecto2.models import Articulo, Cliente

class ArticuloSerializer(serializers.ModelSerializer):
    """docstring for ArticuloSerializer."""
    class Meta:
        model =Articulo
        fields = ('id' ,'producto','marca', 'modelo' , 'descripcion', 'precio', 'imagen' )

    def create(self, validated_data):
        return Articulo.objects.create(**validated_data)

class ClienteSerializer(serializers.ModelSerializer):
    """docstring for ArticuloSerializer."""
    class Meta:
        model =Cliente
        fields = ('usuario','password', 'nombre' , 'apellidos', 'direccion', 'telefono', 'email' )
