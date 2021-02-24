import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Cases',
              data: [25496276, 33992519, 46107714, 63278982, 71081574],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',

  
              ],
              borderColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                  
              ],
              borderWidth: 1
          },
            {
                label: 'Recovery',
            data: [16826310, 23682551, 30847856, 40559345, 45349922],
            backgroundColor: [
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                
            ],
            borderColor: [
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',
                'rgba(173,255,47 0.5 )',

            ],
            borderWidth: 1
        },
        {
            label: 'Death',
        data: [850931, 1014954, 1196134, 1468457, 1594777],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.5)',     
        ],
        borderColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
        ],
        borderWidth: 1
    },
        
            
        ]
      },
      
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
