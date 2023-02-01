import { DataModel } from 'types/DataModel';
import { ReactComponent as InspectionCircle } from 'svg/inspection_circle.svg';
import { ReactComponent as InspectionPolygon } from 'svg/inspection_polygon.svg';
import './index.css';

export function InspectionCard(props: { data?: DataModel }) {
  const { data } = props;

  return (
    <div className="box-wrap inspection">
      <div className="inspection-ability">
        <div className="ability-title">巡检能力</div>
        <div className="ability-content-wrap">
          <div className="ability-content">
            <InspectionCircle className="p-center inspection-circle" />
            <InspectionPolygon className="p-center inspection-polygon" />
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
      <div className="last-inspection-res">
        <div className="inspection-head">
          <div className="inspection-title">最后一次巡检结果</div>
          <div className="inspection-time">巡检时间: {data?.lastInspectionTime || ''}</div>
        </div>
        <div className="inspection-grid-wrap">
          <div className="inspection-grid fault">
            <div className="head">
              <div className="grid-icon"></div>
              <div className="text">故障</div>
            </div>
            <div className="bottom">{data?.inspectionFault || 0}</div>
          </div>
          <div className="inspection-grid error">
            <div className="head">
              <div className="grid-icon"></div>
              <div className="text">错误</div>
            </div>
            <div className="bottom">{data?.inspectionError || 0}</div>
          </div>
          <div className="inspection-grid warn">
            <div className="head">
              <div className="grid-icon"></div>
              <div className="text">告警</div>
            </div>
            <div className="bottom">{data?.inspectionWarn || 0}</div>
          </div>
          <div className="inspection-grid normal">
            <div className="head">
              <div className="grid-icon"></div>
              <div className="text">正常</div>
            </div>
            <div className="bottom">{data?.inspectionNormal || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
