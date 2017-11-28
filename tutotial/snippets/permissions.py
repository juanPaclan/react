from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    permisos personalizados para que solo los usuarios autorizados puedan crear o aptualizar datos.
    """

    def has_object_permission(self, request, view, obj):
        # se permiten permisos de lectura a cualquier solicitud
        # por lo que siempre permite las solicitudes get, head o options
        if request.method in permissions.SAFE_METHODS:
            return True

        # los permisos de escritura solo se permiten alpropietario del snippets 
        return obj.owner == request.user
