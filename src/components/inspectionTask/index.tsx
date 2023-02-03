import { DataModel } from 'types/DataModel';
import TaskBg from 'images/task_bg.png';
import './index.css';

export function InspectionTask(props: { data?: DataModel }) {
  const { data } = props;

  return (
    <div className="box-wrap inspection-task">
      <div className="img-content">
        <img src={TaskBg} alt="" />
      </div>
      <div className="head">近7天巡检任务</div>
      <div className="task-content">
        <div className="placeholder"></div>
        <div className="list">
          <div className="item">
            <div className="label">
              <div className="icon"></div>
              <div className="text">执行中</div>
            </div>
            <div className="count">{data?.underImplementation || 0}</div>
          </div>
          <div className="item">
            <div className="label">
              <div className="icon"></div>
              <div className="text">执行成功</div>
            </div>
            <div className="count">{data?.successImplementation || 0}</div>
          </div>
          <div className="item">
            <div className="label">
              <div className="icon"></div>
              <div className="text">执行失败</div>
            </div>
            <div className="count">{data?.errorImplementation || 0}</div>
          </div>
          <div className="item">
            <div className="label">
              <div className="icon"></div>
              <div className="text">未开始</div>
            </div>
            <div className="count">{data?.notStarted || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
