import {useEffect, useState} from 'react';
import { trim } from '@/utils/format';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const blogList = [];

const HomePage: React.FC = () => {
  const [list, setList] = useState([]);
  const { name } = useModel('global');

  useEffect(() => {
    fetch('/diary/fetch').then(res => res.json()).then(res => {
      setList(res.diary_list);
    });
  }, [])

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        {list.map((item, index) => (
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
