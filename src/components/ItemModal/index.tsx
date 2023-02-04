import { Card, Checkbox, Input } from '@arco-design/web-react';
import CommonModal from 'components/CommonModal';
import { useCallback, useEffect, useState } from 'react';
import { CommonModalPropsType } from 'types/components/CommonModalTypes';
import { ReactComponent as ItemModalSearch } from 'svg/item_modal_search.svg';
import { ReactComponent as ItemModalArrow } from 'svg/item_modal_arrow.svg';
import { ReactComponent as ModalClose } from 'svg/modal_close.svg';
import './index.css';
import { InputProps } from '@arco-design/web-react/es/Input';

export default function ItemModal(
  props: Omit<CommonModalPropsType, 'title' | 'warnContent' | 'children'>
) {
  const { visible } = props;
  const [data, setData] = useState<{
    options: { label: string; value: number }[];
    optionsSec: { label: string; value: number }[];
    selectedOptions: { label: string; value: number }[];
  }>();

  useEffect(() => {
    (async () => {
      if (!visible) return;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({
        options: Array.from({ length: 5 }).map((val, index) => ({
          label: '巡检组01',
          value: index + 1,
        })),
        optionsSec: Array.from({ length: 20 }).map((val, index) => ({
          label: '巡检组01',
          value: index + 1,
        })),
        selectedOptions: Array.from({ length: 3 }).map((val, index) => ({
          label: '巡检组01',
          value: index + 1,
        })),
      });
    })();
  }, [visible]);

  const handleRemove = useCallback(() => {
    console.log('handleRemove');
  }, []);

  return (
    <CommonModal
      className="item-modal"
      warnContent={<div>最多可选择20个巡检项</div>}
      title="设置巡检项"
      {...props}
    >
      <div className="content-wrap">
        <div className="content-inner">
          <Card title={<div className="title">全部巡检项</div>} className="card checkbox-card">
            <div className="card-content">
              <CardItem options={data?.options} />
              <CardItem options={data?.optionsSec} />
            </div>
          </Card>
          <div className="arrow-wrap">
            <ItemModalArrow className="arrow" />
          </div>
          <Card title={<div className="title">已选(3)</div>} className="card selected-card">
            <div className="card-content">
              <div className="card-item">
                <SearchInput className="search-input" />
                <div className="checkbox-group">
                  {data?.selectedOptions?.map((item) => (
                    <div className="arco-checkbox">
                      <div className="arco-checkbox-text">{item.label}</div>
                      <ModalClose onClick={handleRemove} className="close-icon" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </CommonModal>
  );
}

function CardItem(props: { options?: { label: string; value: number }[] }) {
  const { options } = props;

  const handleFilter = useCallback(() => {
    console.log('handleFilter');
  }, []);

  const handleChange = useCallback(() => {
    console.log('handleChange');
  }, []);

  return (
    <div className="card-item">
      <SearchInput onInput={handleFilter} className="search-input" />
      <Checkbox.Group
        onChange={handleChange}
        className="checkbox-group"
        options={options}
      ></Checkbox.Group>
    </div>
  );
}

function SearchInput(props: InputProps) {
  const { suffix = <ItemModalSearch />, placeholder = '请输入名称', ...rest } = props;

  return (
    <Input suffix={suffix} placeholder={placeholder} className="search-Input" {...rest}></Input>
  );
}
