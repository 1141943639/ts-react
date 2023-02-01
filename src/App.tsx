import { InspectionCard } from 'components/InspectionCard';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { DataModel } from 'types/DataModel';
import './App.css';
import { ReactComponent as TitleIcon } from './svg/title_icon.svg';

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
          <div className="box-wrap inspection-task" />
        </div>
        <div className="bottom">
          <div className="box-wrap" />
          <div className="box-wrap" />
        </div>
      </div>
    </div>
  );
}

export default App;
