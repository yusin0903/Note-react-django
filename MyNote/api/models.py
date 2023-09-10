from django.db import models


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now=True)

    def __str__(self):
        return self.body[0:50]