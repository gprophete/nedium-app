from django.db import models





class User(models.Model):
    name = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=150)
    article = models.TextField()
    image_url = models.TextField()
    tags = models.CharField(max_length=200)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts'
    )

    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.CharField(max_length=255)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments'
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='comments'
    )
class Clap(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='claps'
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='claps'
    )
