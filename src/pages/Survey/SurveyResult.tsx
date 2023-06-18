import ApexChart from 'react-apexcharts';
import { Flex } from 'components/Box';

const barData = {
  series: [
    { name: '여성', data: [44, 55, 41, 64, 22, 43, 21] },
    {
      name: '남성',
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ],
};

const pieData = {
  series: [23, 18, 21, 17, 15],
};

const columnBarData = {
  series: [
    {
      name: '인원수',
      data: [18, 23, 20, 17, 15, 12],
    },
  ],
};

const pyramidData = {
  series: [
    {
      name: '',
      data: [4, 11, 18, 26, 23],
    },
  ],
};

const SurveyResult = () => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="5rem">
      <ApexChart
        options={{
          chart: {
            type: 'bar',
            height: 800,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff'],
            },
          },
          title: {
            text: '나이',
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
          },
          tooltip: {
            shared: true,
            intersect: false,
          },
          xaxis: {
            categories: ['10세 이하', '10-20', '20-30', '30-40', '50-60', '60세 이상'],
          },
        }}
        series={barData.series}
        type="bar"
        width="650"
      />
      <ApexChart
        options={{
          chart: {
            type: 'polarArea',
          },
          labels: ['유튜브', '블로그', '인스타그램', '페이스북', '지인추천'],
          stroke: {
            colors: ['#fff'],
          },
          fill: {
            opacity: 0.8,
          },
          title: {
            text: '서비스 사용 경로',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        }}
        series={pieData.series}
        type="polarArea"
        width="500"
      />
      <ApexChart
        options={{
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ['#304758'],
            },
          },

          xaxis: {
            categories: ['1개월 미만', '1-6개월', '7-12개월', '1-2년', '2-3년', '3년이상'],
            position: 'top',
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          title: {
            text: '서비스 사용 기간',
            floating: true,
          },
        }}
        series={columnBarData.series}
        type="bar"
        width="600"
      />
      <ApexChart
        options={{
          chart: {
            type: 'bar',
            height: 350,
          },
          colors: ['#F44F5E', '#E55A89', '#CA6CD8', '#8D95EB', '#62ACEA'],
          dataLabels: {
            enabled: true,
            dropShadow: {
              enabled: true,
            },
          },
          title: {
            text: '만족도',
          },
          xaxis: {
            categories: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'],
          },
          legend: {
            show: false,
          },
        }}
        series={pyramidData.series}
        type="bar"
        width="600"
      />
    </Flex>
  );
};

export default SurveyResult;
