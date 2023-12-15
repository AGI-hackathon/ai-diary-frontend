import {useEffect, useState} from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/diary/fetch').then(res => res.json()).then(res => {
      setList(res.diary_list);
    });
  }, [])

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
