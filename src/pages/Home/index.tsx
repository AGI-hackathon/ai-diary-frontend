import { history } from 'umi';
import {useEffect} from 'react';
import { Card, Tooltip, message } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './index.less';
import { useList } from "./store";
import { getList, deleteDiary } from "./request";

const HomePage: React.FC = () => {
  const {list, setList} = useList();

  useEffect(() => {
    getList().then(res => {
      setList(res.data.diary_list || []);
    });
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {list.map((item) => (
          <div
            key={item._id}
            className={styles.card}
            onClick={() => {
              history.push(`/blog/${item._id}`);
            }}
          >
            <Card
              title={item.title}
              extra={
                <Tooltip title="删除">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      const res = deleteDiary(item._id);
                      if (res) {
                        setList(list.filter((i) => i._id !== item._id));
                        message.success("删除成功");
                      }
                    }}
                  >
                    <DeleteOutlined />
                  </span>
                </Tooltip>
              }
            >
              <p>{item.content}</p>
            </Card>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
