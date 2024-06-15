import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartDataset, ChartData, Plugin } from 'chart.js';
import * as d3 from 'd3';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  standalone: true,
  imports: [BaseChartDirective],
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent implements OnInit{
  @ViewChild(BaseChartDirective)  baseChart?: BaseChartDirective;

  constructor() { }


  @Input({required:true}) points!: number[]
  @Input({required:true}) minValue!: number
  @Input({required:true}) maxValue!: number

  public radarChartData: ChartData | undefined


  public font = new FontFace("Titillium Web", "url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap')", {
  weight:"100"
  });

  public radarChartOptions: ChartOptions = {
    elements:{

      point:{
        borderWidth: 1
      },
      line:{
        borderWidth: 1
      }
    },
    responsive:true,
    scales: {
      r: {
        beginAtZero:true,
        min: 0,
        max: 200,
        type: "radialLinear",
        grid:{
          circular:true,
          // color: ["#C8D2C6", "#B30C0C", "#BAA60F",  "#123624"],  
        },
        pointLabels: {
          font:{
            
            size: this.maxValue > 100 ? 8 : 5
          }
        },
        ticks: {
          backdropColor: "transparent",
          color: "transparent",
          display: true,
          font: {
            size: this.maxValue > 100 ? 8 : 5 // Tamanho da fonte das labels
          }
        },
      }
    },
    plugins:{
      legend:{
        display: false
      },
      title: {
        display: false,
      },
      
    },
  
  };

  public radarChartLabels: string[] = ['AL%', 'C%', 'K%', 'Mg%', 'SB%'];

  public pluginPreview:Plugin[] = [{
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart:any, args:any, options:any) => {
      const {ctx} = chart;

      var x3 = 49;
      var y3 = 52;
      var raio3 = 29;
      var inicioAngulo3 = 0;
      var fimAngulo3 = Math.PI * 2;
      var sentidoAntiHorario3 = false;
      ctx.beginPath();
      ctx.arc(x3, y3, raio3, inicioAngulo3, fimAngulo3, sentidoAntiHorario3);
      ctx.fillStyle = "#eee"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x3 = 49;
      var y3 = 52;
      var raio3 = 22;
      var inicioAngulo3 = 0;
      var fimAngulo3 = Math.PI * 2;
      var sentidoAntiHorario3 = false;
      ctx.beginPath();
      ctx.arc(x3, y3, raio3, inicioAngulo3, fimAngulo3, sentidoAntiHorario3);
      ctx.fillStyle = "rgba(0,255,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x2 = 49;
      var y2 = 52;
      var raio2 = 15;
      var inicioAngulo2 = 0;
      var fimAngulo2 = Math.PI * 2;
      var sentidoAntiHorario2 = false;
      ctx.beginPath();
      ctx.arc(x2, y2, raio2, inicioAngulo2, fimAngulo2, sentidoAntiHorario2);
      ctx.fillStyle = "rgba(255,255,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x = 49;
      var y = 52;
      var raio = 7;
      var inicioAngulo = 0;
      var fimAngulo = Math.PI * 2;
      var sentidoAntiHorario = false;
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, raio, inicioAngulo, fimAngulo, sentidoAntiHorario);
      ctx.fillStyle = "rgba(255,0,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      

      ctx.restore();
    }
  }];

  public pluginPdf:Plugin[] = [{
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart:any, args:any, options:any) => {
      const {ctx} = chart;

      var x3 = 73;
      var y3 = 77;
      var raio3 = 54;
      var inicioAngulo3 = 0;
      var fimAngulo3 = Math.PI * 2;
      var sentidoAntiHorario3 = false;
      ctx.beginPath();
      ctx.arc(x3, y3, raio3, inicioAngulo3, fimAngulo3, sentidoAntiHorario3);
      ctx.fillStyle = "#eee"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x3 = 73;
      var y3 = 77;
      var raio3 = 41;
      var inicioAngulo3 = 0;
      var fimAngulo3 = Math.PI * 2;
      var sentidoAntiHorario3 = false;
      ctx.beginPath();
      ctx.arc(x3, y3, raio3, inicioAngulo3, fimAngulo3, sentidoAntiHorario3);
      ctx.fillStyle = "rgba(0,255,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x2 = 73;
      var y2 = 77;
      var raio2 = 27;
      var inicioAngulo2 = 0;
      var fimAngulo2 = Math.PI * 2;
      var sentidoAntiHorario2 = false;
      ctx.beginPath();
      ctx.arc(x2, y2, raio2, inicioAngulo2, fimAngulo2, sentidoAntiHorario2);
      ctx.fillStyle = "rgba(255,255,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      var x = 73;
      var y = 77;
      var raio = 13;
      var inicioAngulo = 0;
      var fimAngulo = Math.PI * 2;
      var sentidoAntiHorario = false;
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, raio, inicioAngulo, fimAngulo, sentidoAntiHorario);
      ctx.fillStyle = "rgba(255,0,0,1)"; // Define a cor de preenchimento do círculo
      ctx.fill(); // Preenche o círculo com a cor definida
      ctx.closePath(); // Fecha o caminho do círculo

      

      ctx.restore();
    }
  }];
  
  public ngOnInit(): void {
    
    let aux = this.points.map(num => num*2)
    this.radarChartData = { 
      datasets: [
        { 
          data: aux,
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          backgroundColor: "rgb(15, 102, 58, 80%)",
          borderColor: "rgb(15, 102, 58)"
        }
      ], 
      labels: this.radarChartLabels,
    }
    
  }

}
