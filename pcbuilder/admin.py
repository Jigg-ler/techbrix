from django.contrib import admin
from .models import APPLICATION, CPU, CPU_COOLER, MOTHERBOARD, RAM, GPU, STORAGE, PSU, CASE, SAVED_BUILD, MAIN_BUILD

# Register your models here.
admin.site.register(CPU)
admin.site.register(MOTHERBOARD)
admin.site.register(RAM)
admin.site.register(CPU_COOLER)
admin.site.register(GPU)
admin.site.register(STORAGE)
admin.site.register(PSU)
admin.site.register(CASE)
admin.site.register(SAVED_BUILD)
admin.site.register(APPLICATION)
admin.site.register(MAIN_BUILD)