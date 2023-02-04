import { InspectionCard } from 'components/InspectionCard';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { DataModel } from 'types/DataModel';
import './App.css';
import { ReactComponent as TitleIcon } from './svg/title_icon.svg';
import { InspectionTask } from 'components/InspectionTask';
import Chart from 'components/Chart';
import '@arco-design/web-react/dist/css/arco.css';
import TeamModal from 'components/TeamModal';
import ItemModal from 'components/ItemModal';

function App() {
  const [data, setData] = useState<DataModel | undefined>(undefined);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showItemModal, setShowItemsModal] = useState(true);
  const sortClick = () => {
    console.log('默认排序click');
  };
  const selectChange = () => {
    console.log('select click');
  };
  const buttonClick = () => {
    console.log('buttonClick click');
  };
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

  const teamFormat = useCallback((valueArr: any) => {
    const [faultData, errorData, warnData] = valueArr;
    const count = valueArr.reduce((pre: number, val: any) => pre + val.value, 0);
    const name = faultData.axisValue;

    return `
      <div style="font-size: 12px;">
        <span style="font-weight: bold; color: #475F7D;">${name} <br/></span>
        <span style="color: #738499;">告警/总巡检项：${warnData.value}/${count} <br/></span>
        <div style="height: 10px;"></div>
        <span style="color: #33363B;">${faultData.seriesName}：${faultData.value} <br/></span>
        <span style="color: #33363B;">${errorData.seriesName}：${errorData.value} <br/></span>
        <span style="color: #33363B;">${warnData.seriesName}：${warnData.value} <br/></span>
      </div>
    `;
  }, []);

  const itemFormat = useCallback((valueArr: any) => {
    const [faultData, errorData, warnData] = valueArr;
    const name = faultData.axisValue;

    return `
      <div style="font-size: 12px;">
        <span style="font-weight: bold; color: #475F7D;">${name} <br/></span>
        <span style="color: #738499;">所属：这里是巡检组名称 <br/></span>
        <div style="height: 10px;"></div>
        <span style="color: #33363B;">${faultData.seriesName}：${faultData.value} <br/></span>
        <span style="color: #33363B;">${errorData.seriesName}：${errorData.value} <br/></span>
        <span style="color: #33363B;">${warnData.seriesName}：${warnData.value} <br/></span>
      </div>
    `;
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
            sortClick={sortClick}
            buttonClick={() => {
              buttonClick();
              setShowTeamModal(true);
            }}
            selectChange={selectChange}
            tooltipFormatter={teamFormat}
            defaultOrderContent={
              <>
                <div>默认排序：</div>
                <div>告警总数：告警总数Top10</div>
                <div>分数：从低到高Top10</div>
              </>
            }
            {...data?.inspectionTeam}
          />
          <Chart
            {...data?.inspectionItems}
            sortClick={sortClick}
            buttonClick={() => {
              buttonClick();
              setShowItemsModal(true);
            }}
            title="故障/错误/告警-巡检项"
            buttonText="设置巡检项"
            tooltipFormatter={itemFormat}
            defaultOrderContent={<div>默认排序：告警总数Top10</div>}
          />
        </div>
      </div>
      <TeamModal
        visible={showTeamModal}
        onConfirm={() => setShowTeamModal(false)}
        onCancel={() => setShowTeamModal(false)}
      />

      <ItemModal
        visible={showItemModal}
        onConfirm={() => setShowItemsModal(false)}
        onCancel={() => setShowItemsModal(false)}
      />
    </div>
  );
}

export default App;
