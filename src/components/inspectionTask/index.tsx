import { DataModel } from 'types/DataModel';
import TaskBg from 'images/task_bg.png';
import { ReactComponent as TaskNotStarted } from 'svg/task_not_started.svg';
import { ReactComponent as TaskErrorImplementation } from 'svg/task_error_implementation.svg';
import { ReactComponent as TaskSuccessImplementation } from 'svg/task_success_implementation.svg';
import { ReactComponent as TaskUnderImplementation } from 'svg/task_under_implementation.svg';
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
          <div className="item under-implementation">
            <div className="label">
              <div className="icon-bg">
                <TaskUnderImplementation className="icon" />
              </div>
              <div className="text">执行中</div>
            </div>
            <div className="count">{data?.underImplementation || 0}</div>
          </div>
          <div className="item success-implementation">
            <div className="label">
              <div className="icon-bg">
                <TaskSuccessImplementation className="icon" />
              </div>
              <div className="text">执行成功</div>
            </div>
            <div className="count">{data?.successImplementation || 0}</div>
          </div>
          <div className="item error-implementation">
            <div className="label">
              <div className="icon-bg">
                <TaskErrorImplementation className="icon" />
              </div>
              <div className="text">执行失败</div>
            </div>
            <div className="count">{data?.errorImplementation || 0}</div>
          </div>
          <div className="item not-started">
            <div className="label">
              <div className="icon-bg">
                <TaskNotStarted className="icon" />
              </div>
              <div className="text">未开始</div>
            </div>
            <div className="count">{data?.notStarted || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
