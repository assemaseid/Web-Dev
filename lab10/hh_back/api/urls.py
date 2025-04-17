from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListCreate.as_view()),
    path('companies/<int:id>/', views.CompanyRetrieveUpdateDestroy.as_view()),
    path('vacancies/', views.VacancyListCreate.as_view()),
    path('vacancies/<int:id>/', views.VacancyRetrieveUpdateDestroy.as_view()),
]
