import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import { VacancyService } from './services/vacancy.service';
import { Company } from './company';
import { Vacancy } from './vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule]
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number) {
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
