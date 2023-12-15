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
          <Card
            key={item.id}
            title={item.title}
            extra={null}
            className={styles.card}
          >
            <p>{item.content}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
