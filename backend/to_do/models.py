from django.db import models


class ToDo(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length = 1000)

    def __str__(self):
        return self.title