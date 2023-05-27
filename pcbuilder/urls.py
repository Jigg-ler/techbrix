from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('route', views.nameOfFunction, name='nameOfRoute'); check views.py
    path('browse-builds', views.browsebuilds, name='browse-builds'),
    path('build-pc', views.buildpc, name='build-pc'),
    path('sysreqs-db', views.sysreqsdb, name='sysreqs-db'),
    path('build-pc/', views.save_pc, name='save_pc'),
    path('ar/', views.ar, name='ar-guide'),
    path('browse-builds/search', views.get_results, name="get_results")
    ]