from rest_framework import viewsets

from .models import Post, User, Comment, Clap

from .serializers import PostSerializer, CommentSerializer, UserSerializer, ClapSerializer, FeedSerializer

class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ClapView(viewsets.ModelViewSet):
    queryset = Clap.objects.all()
    serializer_class = ClapSerializer

class FeedView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = FeedSerializer
