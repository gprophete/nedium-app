from django.contrib import admin

from .models import User, Post, Comment, Clap

admin.site.register([User, Post, Comment, Clap])