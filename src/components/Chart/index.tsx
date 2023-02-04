import './index.css';
import { Button, Popover, Select } from '@arco-design/web-react';
import { IconQuestionCircle } from '@arco-design/web-react/icon';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
export default function Chart(props: {
  showSelect?: boolean;
  title: string;
  buttonText: string;
  xAxisArr?: string[];
  errorData?: number[];
  warnData?: number[];
  faultData?: number[];
  selectChange?: (value: string) => void;
  buttonClick: (e: Event) => void;
  sortClick: (event: MouseEvent<HTMLElement>) => void;
  tooltipFormatter: Function;
  defaultOrderContent: ReactNode;
}) {
  const {
    showSelect = false,
    title,
    buttonText,
    errorData = [],
    warnData = [],
    faultData = [],
    xAxisArr = [],
    sortClick,
    buttonClick,
    selectChange,
    tooltipFormatter,
    defaultOrderContent,
  } = props;
  const chartEl = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<ReturnType<typeof echarts.init>>();

  useEffect(() => {
    if (!chartEl.current) return;
    const chart = echarts.init(chartEl.current);
    setMyChart(chart);

    setData(chart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setData = useCallback(
    (chart = myChart) => {
      chart?.setOption({
        title: {
          show: false,
        },
        legend: {
          show: true,
          right: '0',
          top: 'center',
          orient: 'vertical',
          itemWidth: 12,
          itemHeight: 12,
        },
        grid: {
          top: '10%',
          bottom: '0%',
          left: '0%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          formatter: tooltipFormatter,
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              // @ts-ignore
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(233,238,243, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(233,238,243, 0.2)', // 50% 处的颜色
                  },
                  {
                    offset: 0.999999,
                    color: 'rgba(233,238,243, 1)', // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(233,238,243, 1)', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisArr,
          },
        ],
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '故障',
            type: 'bar',
            stack: 'total',
            barWidth: '14px',
            data: faultData,
            itemStyle: {
              color: '#6290FF',
            },
          },
          {
            name: '错误',
            type: 'bar',
            stack: 'total',
            data: errorData,
            itemStyle: {
              color: '#62CDFF',
            },
          },
          {
            name: '告警',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'top',
              formatter: '分数：{c}',
            },
            data: warnData,
            itemStyle: {
              color: '#FFB586',
            },
          },
        ],
      });
    },
    [myChart, xAxisArr, tooltipFormatter, errorData, warnData, faultData]
  );

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <div className="box-wrap chart">
      <div className="head">
        <div className="left">
          <div className="head-title">{title}</div>
          {showSelect && (
            <Select className="order-select" onChange={selectChange} defaultValue="order">
              <Select.Option style={{ fontSize: '12px' }} value="order">
                按告警总量排序
              </Select.Option>
              <Select.Option style={{ fontSize: '12px' }} value="order2">
                按告警总量排序
              </Select.Option>
            </Select>
          )}
        </div>
        <div className="right">
          <div className="default-order">
            <div onClick={sortClick} className="order-text">
              恢复默认排序
            </div>
            <Popover content={defaultOrderContent}>
              <IconQuestionCircle style={{ fontSize: '14px' }} />
            </Popover>
          </div>
          <Button onClick={buttonClick} type="secondary" size="mini" className="set-inspection">
            {buttonText}
          </Button>
        </div>
      </div>
      <div className="chart-wrap">
        <div className="chart-content" ref={chartEl}></div>
      </div>
    </div>
  );
}
