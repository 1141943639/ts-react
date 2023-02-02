import { InspectionCard } from 'components/InspectionCard';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { DataModel } from 'types/DataModel';
import './App.css';
import { ReactComponent as TitleIcon } from './svg/title_icon.svg';
import { InspectionTask } from 'components/InspectionTask';
import Chart from 'components/Chart';
import '@arco-design/web-react/dist/css/arco.css';

function App() {
  const [data, setData] = useState<DataModel | undefined>(undefined);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({
        inspectionItem: 17,
        lastInspectionTime: moment().format('YYYY/MM/DD HH:mm:ss'),
        inspectionWarn: 0,
        inspectionError: 3,
        inspectionFault: 4,
        inspectionNormal: 17,
        underImplementation: 4,
        successImplementation: 3,
        errorImplementation: 0,
        notStarted: 17,
        inspectionItems: {
          xAxisArr: [
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
            '巡检项',
          ],
          errorData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
          faultData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
          warnData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
        },
        inspectionTeam: {
          xAxisArr: [
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
            '巡检组',
          ],
          errorData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
          faultData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
          warnData: [1, 2, 3, 4, 50, 20, 10, 50, 20, 10, 50, 20, 10],
        },
      });
    })();
  }, []);

  return (
    <div className="app">
      <div className="content">
        <div className="title">
          <TitleIcon className="icon" />
          <div className="text">巡检概览</div>
        </div>
        <div className="top">
          <InspectionCard data={data} />
          <InspectionTask data={data} />
        </div>
        <div className="bottom">
          <Chart
            showSelect
            title="故障/错误/告警-巡检组"
            buttonText="设置巡检组"
            {...data?.inspectionItems}
          />
          <Chart {...data?.inspectionTeam} title="故障/错误/告警-巡检项" buttonText="设置巡检项" />
        </div>
      </div>
    </div>
  );
}

export default App;
