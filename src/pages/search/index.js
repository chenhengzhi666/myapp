import React, { useRef, useState, useEffect } from 'react';
import { useStore } from 'umi';
// 直接全部引入
// import * as echarts from 'echarts';
// 按需引入
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';

const Search = () => {
  const echartsRef = useRef();
  const store = useStore();
  const { global } = store.getState();
  const [myChart, setMyChart] = useState();
  useEffect(() => {
    const { globalColor } = global;
    if (globalColor && !myChart) {
      const myChartInit = echarts.init(echartsRef.current);
      setMyChart(myChartInit);
      myChartInit.setOption({
        title: {
          text: 'ECharts',
          letf: 'center',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              color: globalColor,
            },
          },
        ],
      });
    }
  }, [global]);

  return (
    <div>
      <div ref={echartsRef} style={{ height: 500 }} />
    </div>
  );
};

export default Search;
