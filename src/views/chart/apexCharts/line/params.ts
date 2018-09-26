import { dataSeries } from './dataSeries';

export const lineChartOptions = {
  chart: {
    height: 380,
    type: 'line',
    zoom: {
      enabled: !1,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  colors: ['#ffbc00'],
  stroke: {
    width: [4],
    curve: 'straight',
  },
  series: [{
    name: 'Desktops',
    data: [30, 41, 35, 51, 49, 62, 69, 91, 126],
  }],
  title: {
    text: 'Product Trends by Month',
    align: 'center',
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: '#f1f3fa',
  },
  labels: [
    '13 Nov 2017',
    '14 Nov 2017',
    '15 Nov 2017',
    '16 Nov 2017',
    '17 Nov 2017',
    '20 Nov 2017',
    '21 Nov 2017',
    '22 Nov 2017',
    '23 Nov 2017',
    '24 Nov 2017',
    '27 Nov 2017',
    '28 Nov 2017',
    '29 Nov 2017',
    '30 Nov 2017',
    '01 Dec 2017',
    '04 Dec 2017',
    '05 Dec 2017',
    '06 Dec 2017',
    '07 Dec 2017',
    '08 Dec 2017',
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        toolbar: {
          show: !1,
        },
      },
      legend: {
        show: !1,
      },
    },
  }],
};

export const lineChartDatalabelOptions = {
  chart: {
    height: 380,
    type: 'line',
    zoom: {
      enabled: !1,
    },
    toolbar: {
      show: !1,
    },
  },
  colors: ['#727cf5', '#0acf97'],
  dataLabels: {
    enabled: !0,
  },
  stroke: {
    width: [3, 3],
    curve: 'smooth',
  },
  series: [{
    name: 'High - 2018',
    data: [28, 29, 33, 36, 32, 32, 33],
  }, {
    name: 'Low - 2018',
    data: [12, 11, 14, 18, 17, 13, 13],
  }],
  title: {
    text: 'Average High & Low Temperature',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: '#f1f3fa',
  },
  markers: {
    style: 'inverted',
    size: 6,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month',
    },
  },
  yaxis: {
    title: {
      text: 'Temperature',
    },
    min: 5,
    max: 40,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: !0,
    offsetY: -25,
    offsetX: -5,
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        toolbar: {
          show: !1,
        },
      },
      legend: {
        show: !1,
      },
    },
  }],
};
let ts2 = 14844186e5;
const dates: any = [];
const spikes = [5, -5, 3, -3, 8, -8];

for (let i = 0; i < 120; i++) {
  const innerArr = [ts2 += 864e5, dataSeries[1][i].value];
  dates.push(innerArr);
}
export const lineChartZoomableOptions = {
  chart: {
    type: 'area',
    stacked: !1,
    height: 380,
    zoom: {
      enabled: !0,
    },
  },
  plotOptions: {
    line: {
      curve: 'smooth',
    },
  },
  dataLabels: {
    enabled: !1,
  },
  stroke: {
    width: [3],
  },
  series: [{
    name: 'XYZ MOTORS',
    data: dates,
  }],
  markers: {
    size: 0,
    style: 'full',
  },
  colors: ['#fa5c7c'],
  title: {
    text: 'Stock Price Movement',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: '#f1f3fa',
  },
  fill: {
    gradient: {
      enabled: !0,
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 70, 80, 100],
    },
  },
  yaxis: {
    min: 2e7,
    max: 25e7,
    labels: {
      formatter(e: any) {
        return (e / 1e6).toFixed(0);
      },
    },
    title: {
      text: 'Price',
    },
  },
  xaxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: !1,
    y: {
      formatter(e: any) {
        return (e / 1e6).toFixed(0);
      },
    },
  },
  responsive: [{
    breakpoint: 600,
    options: {
      chart: {
        toolbar: {
          show: !1,
        },
      },
      legend: {
        show: !1,
      },
    },
  }],
};
