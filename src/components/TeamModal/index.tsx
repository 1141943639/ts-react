import { Checkbox } from '@arco-design/web-react';
import CommonModal from 'components/CommonModal';
import { useEffect, useState } from 'react';
import { CommonModalPropsType } from 'types/components/CommonModalTypes';
import './index.css';

export default function TeamModal(
  props: Omit<CommonModalPropsType, 'title' | 'warnContent' | 'children'>
) {
  const { visible } = props;
  const [data, setData] = useState<{
    options: { label: string; value: number }[];
  }>();

  useEffect(() => {
    (async () => {
      if (!visible) return;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({
        options: Array.from({ length: 30 }).map((val, index) => ({
          label: '巡检组01',
          value: index + 1,
        })),
      });
    })();
  }, [visible]);

  return (
    <CommonModal
      className="team-modal"
      warnContent={<div>最多可选择20个巡检组</div>}
      title="设置巡检组"
      {...props}
    >
      <div className="team-wrap">
        <Checkbox.Group className="checkbox-group" options={data?.options}></Checkbox.Group>
      </div>
    </CommonModal>
  );
}
