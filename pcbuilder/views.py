from urllib import request
from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import  APPLICATION, CPU, CPU_COOLER, MOTHERBOARD, RAM, GPU, STORAGE, PSU, CASE, SAVED_BUILD, MAIN_BUILD

from django.db.models import Q

# Create your views here.
#function seeks for the html file within the pages directory
def index(request):
    return render(request, 'index.html')

def browsebuilds(request):
    BUILD_list = MAIN_BUILD.objects.all()
    
    return render(request, 'browse-builds.html', { 'BUILD_list' : BUILD_list})

def searchbuilds(request):
    query = request.GET.get("q")
    BUILD_list = MAIN_BUILD.objects.filter(
        Q(name__icontains=query) | Q(CPU__icontains=query) | Q(CPU_COOLER__icontains=query) | Q(MOTHERBOARD__icontains=query) | Q(RAM__icontains=query) | Q(GPU__icontains=query) | Q(STORAGE__icontains=query) | Q(PSU__icontains=query) | Q(CASE__icontains=query)
    )

    return render(request, 'browse-builds.html', { 'BUILD_list' : BUILD_list })

def buildpc(request):
    CPU_list = CPU.objects.all()
    MOBO_list = MOTHERBOARD.objects.all()
    COOLER_list = CPU_COOLER.objects.all()
    RAM_list = RAM.objects.all()
    GPU_list = GPU.objects.all()
    STORAGE_list = STORAGE.objects.all()
    PSU_list = PSU.objects.all()
    CASE_list = CASE.objects.all()
    BUILD_list = SAVED_BUILD.objects.all()

    context = {
        'CPU_list' : CPU_list,
        'COOLER_list': COOLER_list,
        'MOBO_list': MOBO_list,
        'RAM_list': RAM_list,
        'GPU_list': GPU_list,
        'STORAGE_list': STORAGE_list,
        'PSU_list': PSU_list,
        'CASE_list': CASE_list,
        'BUILD_list': BUILD_list
    }

    return render(request, 'build-pc.html', context)

def save_pc(request):
    if request.method =='POST':
        selected_cpu = request.POST['cpu'].split("!")
        selected_cooler = request.POST['cpu-cooler'].split("!")
        selected_mobo = request.POST['mobo'].split("!")
        selected_ram = request.POST['memory'].split("!")
        selected_gpu = request.POST['gpu'].split("!")
        selected_storage = request.POST['storage'].split("!")
        selected_psu = request.POST['psu'].split("!")
        selected_case = request.POST['case'].split("!")

        selected_name = request.POST['build-name']
        author = request.POST['author']
        price = int(selected_cpu[1]) + int(selected_cooler[1]) + int(selected_mobo[1]) + int(selected_ram[1]) + int(selected_gpu[1]) + int(selected_storage[1]) + int(selected_psu[1]) + int(selected_case[1])
                
    pc = MAIN_BUILD.objects.create(
        name = selected_name,
        author = author,
        CPU = selected_cpu[0],
        CPU_COOLER = selected_cooler[0],
        MOTHERBOARD = selected_mobo[0],
        RAM = selected_ram[0],
        GPU = selected_gpu[0],
        STORAGE = selected_storage[0],
        PSU = selected_psu[0],
        CASE = selected_case[0],
        price = price
    )

    pc.save()

    return render(request, 'index.html')

def sysreqsdb(request):
    APPLICATION_list = APPLICATION.objects.all()

    return render(request, 'sysreqs-db.html', { 'APPLICATION_list' : APPLICATION_list})

def searchapps(request):
    query = request.GET.get("q")
    APPLICATION_list = APPLICATION.objects.filter(
        Q(name__icontains=query) | Q(CPU__icontains=query) | Q(RAM__icontains=query) | Q(OS__icontains=query) | Q(GPU__icontains=query) | Q(DISK_SPACE__icontains=query)
    )

    return render(request, 'sysreqs-db.html', { 'APPLICATION_list' : APPLICATION_list})

def ar(request):
    return render(request, 'ar.html')