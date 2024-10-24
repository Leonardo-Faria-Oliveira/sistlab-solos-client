import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorModalComponent } from './components/modals/error-modal.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MenuComponent } from './components/dashboard/menu.component';
import { FooterComponent } from './components/dashboard/footer.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LabsComponent } from './components/labs/labs.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PricingsComponent } from './components/pricing/pricings.component';
import { StaticsComponent } from './components/statics/statics.component';
import { EmployeesComponent } from './components/employee/employees.component';
import { FirstAccessComponent } from './components/first-access/first-access.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ModalSignupClientComponent } from './components/clients/modal-signup-client.component';
import { SuccessModalComponent } from './components/modals/success-modal.component';
import { SearchClientComponent } from './components/clients/search-client.component';
import { ListClientsComponent } from './components/clients/list-clients.component';
import { ScaleChartsComponent } from './components/charts/scale-charts/scale-charts.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { EmployeeLoginFormComponent } from './components/login/employee-login-form.component';
import { AdminLoginFormComponent } from './components/login/admin-login-form.component';
import { ListEmployeesComponent } from './components/employee/list-employees.component';
import { ModalSignupEmployeeComponent } from './components/employee/modal-signup-employee.component';
import { SearchEmployeeComponent } from './components/employee/search-employee.component';
import { ListReportsComponent } from './components/reports/list-reports.component';
import { ChemicalAnalysisComponent } from './components/reports/modal-new-report/chemical-analysis/chemical-analysis.component';
import { MicronutrientsComponent } from './components/reports/modal-new-report/micronutrients/micronutrients.component';
import { ModalNewReportComponent } from './components/reports/modal-new-report/modal-new-report.component';
import { PhysicalAnalysisComponent } from './components/reports/modal-new-report/physical-analysis/physical-analysis.component';
import { ChemicalPhysicalPdfComponent } from './components/reports/modal-new-report/report-preview/pdf/chemical-physical-pdf.component';
import { ChemicalAttr1PdfComponent } from './components/reports/modal-new-report/report-preview/pdf/frames/chemical-attr-1/chemical-attr1-pdf.component';
import { ChemicalAttr2PdfComponent } from './components/reports/modal-new-report/report-preview/pdf/frames/chemical-attr-2/chemical-attr2-pdf.component';
import { PhysicalAttrPdfComponent } from './components/reports/modal-new-report/report-preview/pdf/frames/physical-attr/physical-attr-pdf.component';
import { RadarChartFramePdfComponent } from './components/reports/modal-new-report/report-preview/pdf/frames/radar-chart/radar-chart-frame-pdf.component';
import { TechnicalSignaturePdfComponent } from './components/reports/modal-new-report/report-preview/pdf/frames/signature/technical-signature-pdf.component';
import { ChemicalPhysicalPreviewComponent } from './components/reports/modal-new-report/report-preview/preview/chemical-physical-preview.component';
import { ChemicalAttr1Component } from './components/reports/modal-new-report/report-preview/preview/frames/chemical-attr-1/chemical-attr1.component';
import { ChemicalAttr2Component } from './components/reports/modal-new-report/report-preview/preview/frames/chemical-attr-2/chemical-attr2.component';
import { PhysicalAttrComponent } from './components/reports/modal-new-report/report-preview/preview/frames/physical-attr/physical-attr.component';
import { RadarChartFrameComponent } from './components/reports/modal-new-report/report-preview/preview/frames/radar-chart/radar-chart-frame.component';
import { TechnicalSignatureComponent } from './components/reports/modal-new-report/report-preview/preview/frames/signature/technical-signature.component';
import { ReportPreviewComponent } from './components/reports/modal-new-report/report-preview/report-preview.component';
import { ReportSettingsComponent } from './components/reports/modal-new-report/report-settings/report-settings.component';
import { HeaderConfigComponent } from './components/reports/report-config/header/header-config.component';
import { PhosphorValueConfigComponent } from './components/reports/report-config/phosphor-config/phosphor-value-config.component';
import { ReportConfigComponent } from './components/reports/report-config/report-config.component';
import { FirstStepComponent } from './components/sign-up/first-step.component';
import { FourthStepComponent } from './components/sign-up/fourth-step.component';
import { SecondStepComponent } from './components/sign-up/second-step.component';
import { ThirdStepComponent } from './components/sign-up/third-step.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
    declarations: [
        AppComponent,
        StaticsComponent,
        OverviewComponent,
        OverviewComponent,
        LabsComponent,
        MicronutrientsComponent,
    ],
    providers: [
        GoogleChartsModule,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        provideCharts(withDefaultRegisterables())
    ],
    bootstrap: [AppComponent],
    imports: [
        // AppComponent,
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive,
        ListClientsComponent,
        CommonModule,
        HttpClientModule,
        RadarChartComponent,
        MenuComponent,
        FooterComponent,
        EmployeesComponent,
        ModalSignupEmployeeComponent,
        ClientsComponent,
        ModalSignupClientComponent,
        SearchEmployeeComponent,
        ListEmployeesComponent,
        FirstAccessComponent,
        SearchClientComponent,
        DashboardComponent,
        ErrorModalComponent,
        SuccessModalComponent,
        LoginComponent,
        EmployeeLoginFormComponent,
        AdminLoginFormComponent,
        // DashboardComponent, // Removed from declarations
        SignUpComponent,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        FourthStepComponent,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        FourthStepComponent,
        ReportsComponent,
        ListReportsComponent,
        ReportConfigComponent,
        HeaderConfigComponent,
        PhosphorValueConfigComponent,
        ModalNewReportComponent,
        ReportSettingsComponent,
        PhysicalAnalysisComponent,
        ChemicalAnalysisComponent,
        ReportPreviewComponent,
        ScaleChartsComponent,
        ChemicalAttr1Component,
        RadarChartFrameComponent,
        PhysicalAttrComponent,
        TechnicalSignatureComponent,
        ChemicalAttr2Component,
        ChemicalPhysicalPreviewComponent,
        ChemicalPhysicalPdfComponent,
        ChemicalAttr1PdfComponent,
        PhysicalAttrPdfComponent,
        TechnicalSignaturePdfComponent,
        ChemicalAttr2PdfComponent,
        RadarChartFramePdfComponent,
    ],
})
export class AppModule { }
