from django.db import models

# Create your models here.
class CPU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    socket = models.CharField(max_length=10)
    gen = models.IntegerField()

class MOTHERBOARD(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    chipset = models.CharField(max_length=10)
    formfactor = models.CharField(max_length=10)

class RAM(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    capacity = models.IntegerField() #capacity in Gigabyte nalang
    max_speed = models.IntegerField() #speed in Mega hertz nalang

class CPU_COOLER(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    socket = models.CharField(max_length=20)

class GPU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()

class STORAGE(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    form = models.CharField(max_length=10)

class PSU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    watts = models.IntegerField()

class CASE(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    form_supp = models.IntegerField()
    #integer codes:
    #1 - mATX
    #2 - mATX, ATX
    #3 - ATX

class SAVED_BUILD(models.Model): #obsolete
    name = models.CharField(max_length=100)
    CPU = models.CharField(max_length=100)
    CPU_COOLER = models.CharField(max_length=100)
    MOTHERBOARD = models.CharField(max_length=100)
    RAM = models.CharField(max_length=100)
    GPU = models.CharField(max_length=100)
    STORAGE = models.CharField(max_length=100)
    PSU = models.CharField(max_length=100)
    CASE = models.CharField(max_length=100)
    price = price = models.IntegerField()

## FOR SYSTEM REQUIREMENTS ##
class APPLICATION(models.Model):
    name = models.CharField(max_length=100)
    CPU = models.CharField(max_length=100)
    RAM = models.CharField(max_length=100)
    OS = models.CharField(max_length=100)
    GPU = models.CharField(max_length=100)
    DISK_SPACE = models.CharField(max_length=100)

class MAIN_BUILD(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    CPU = models.CharField(max_length=100)
    CPU_COOLER = models.CharField(max_length=100)
    MOTHERBOARD = models.CharField(max_length=100)
    RAM = models.CharField(max_length=100)
    GPU = models.CharField(max_length=100)
    STORAGE = models.CharField(max_length=100)
    PSU = models.CharField(max_length=100)
    CASE = models.CharField(max_length=100)
    price = price = models.IntegerField()

class test_model(models.Model): #obsolete, pangtesting lang -kian
    procie = models.CharField(max_length=100)