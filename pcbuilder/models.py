from django.db import models

# Create your models here.
class CPU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()

    socket = models.CharField(max_length=10, default='NOT SET')
    #gen = models.IntegerField() obsolete, kahit di na i-set

    gen_code = models.CharField(max_length=10, default='NOT SET')

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "CPU"


class MOTHERBOARD(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()

    gen = models.CharField(max_length=10)
    socket = models.CharField(max_length=10, default='NOT  SET')
    max_mem = models.IntegerField(default=0)
    ddr_gen = models.CharField(max_length=15, default="NOT SET")

    formfactor = models.IntegerField(default=0)
    #integer codes:
    #1 - mITX
    #2 - mATX
    #3 - ATX

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "Motherboard"

class RAM(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    capacity = models.IntegerField() #capacity in Gigabyte nalang
    max_speed = models.IntegerField() #speed in Mega hertz nalang
    ddr_gen = models.CharField(max_length=10, default="NOT SET")


    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "RAM"

class CPU_COOLER(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    socket = models.CharField(max_length=20)

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "CPU Cooler"

class GPU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "GPU"

class STORAGE(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    form = models.CharField(max_length=10)

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "Storage"

class PSU(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    watts = models.IntegerField()

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "PSU"

class CASE(models.Model):
    model = models.CharField(max_length=100)
    price = models.IntegerField()
    form_supp = models.IntegerField() 
    #integer codes:
    #1 - mITX
    #2 - mATX
    #3 - ATX

    def __str__(self):
        return self.model
    
    class Meta: 
        verbose_name = "Case"

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

    def __str__(self):
        return self.name
    
    class Meta: 
        verbose_name = "Main Build"

class test_model(models.Model): #obsolete, pangtesting lang -kian
    procie = models.CharField(max_length=100)