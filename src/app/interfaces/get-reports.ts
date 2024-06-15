import { Report } from "../models/report";
import { ReportPdf } from "../models/reportPdf";

export interface GetReports{
    reports: ReportPdf[]
}