import { history } from 'umi';
import {useEffect} from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import axios from 'axios';
import { useList } from "./store";

const HomePage: React.FC = () => {
  const {list, setList} = useList();

  useEffect(() => {
    axios.get('/diary/fetch').then(res => {
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
              history.push(`/diary/${item._id}`);
            }}
          >
            <Card
              title={item.title}
              extra={null}
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
