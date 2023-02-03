import { DataModel } from 'types/DataModel';
import InspectionBg from 'images/inspection_bg.png';
import { ReactComponent as InspectionFault } from 'svg/inspection_fault.svg';
import { ReactComponent as InspectionError } from 'svg/inspection_error.svg';
import { ReactComponent as InspectionWarn } from 'svg/inspection_warn.svg';
import { ReactComponent as InspectionNormal } from 'svg/inspection_normal.svg';
import './index.css';

export function InspectionCard(props: { data?: DataModel }) {
  const { data } = props;

  return (
    <div className="box-wrap inspection">
      <div className="bg-wrap">
        <img src={InspectionBg} className="ability-bg" alt="" />
        <div className="ability-content-wrap">
          <div className="ability-content">
            <div className="ability-content">
              <div className="content-top">
                <span className="ability-big-text">{data?.inspectionItem || 0}</span>
                <span>个</span>
              </div>
              <div className="content-bottom">巡检项</div>
            </div>
          </div>
        </div>
      </div>
      <div className="inspection-ability">
        <div className="ability-title">巡检能力</div>
      </div>
      <div className="last-inspection-res">
        <div className="inspection-head">
          <div className="inspection-title">最后一次巡检结果</div>
          <div className="inspection-time">巡检时间: {data?.lastInspectionTime || ''}</div>
        </div>
        <div className="inspection-grid-wrap">
          <div className="inspection-grid fault">
            <div className="head">
              <div className="grid-icon-bg">
                <InspectionFault className="icon" />
              </div>
              <div className="text">故障</div>
            </div>
            <div className="bottom">{data?.inspectionFault || 0}</div>
          </div>
          <div className="inspection-grid error">
            <div className="head">
              <div className="grid-icon-bg">
                <InspectionError className="icon" />
              </div>
              <div className="text">错误</div>
            </div>
            <div className="bottom">{data?.inspectionError || 0}</div>
          </div>
          <div className="inspection-grid warn">
            <div className="head">
              <div className="grid-icon-bg">
                <InspectionWarn className="icon" />
              </div>
              <div className="text">告警</div>
            </div>
            <div className="bottom">{data?.inspectionWarn || 0}</div>
          </div>
          <div className="inspection-grid normal">
            <div className="head">
              <div className="grid-icon-bg">
                <InspectionNormal className="icon" />
              </div>
              <div className="text">正常</div>
            </div>
            <div className="bottom">{data?.inspectionNormal || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
