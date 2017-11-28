from rest_framework import serializers
from snippets.models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    """ muestra la relacion del usuario y los snippets con el primary key de snippets """
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ('url' ,'id', 'username', 'snippets')

class SnippetSerializer(serializers.ModelSerializer):
    """ modelo o campos del modelo para serializar se pueden incluir las validaciones y
    el formato de presentacion en html similar a los formularios de django"""
#(serializers.ModelSerializer) se importa el modelo y se define que datos se utilizaran
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='snippet-highlight', format='html')

    class Meta:
        model =Snippet
        fields = ('url','id', 'highlight' , 'owner', 'title', 'code','linenos','language', 'style' )

    # se utiliza  (serializers.Serializer) se utiliso la creacion del modelo
    # id = serializers.IntegerField(read_only=True)
    # title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    # code = serializers.CharField(style={'base_template': 'textarea.html'})
    # linenos = serializers.BooleanField(required=False)
    # language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
    # style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

    def create(self, validated_data):
        """
        crea y retorna un nuevo snippet instanciado, dados los datos validados
        """
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Actualiza y devuelve una instacia de snippet existente, dados los datos validados
        """
        instance.title = validated_data.get('title', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance
