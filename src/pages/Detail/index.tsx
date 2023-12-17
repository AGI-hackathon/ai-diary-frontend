import { Emoji } from 'emoji-picker-react';
import { getEmotion, getList } from '@/pages/Home/request';
import { useList } from '@/pages/Home/store';
import { animated, config, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { useParams } from 'umi';
import './index.css';
import styles from './styles.module.css';

export const emojiMap = {
  happy: '1f600',
  sad: '1f614',
  cry: '1f62d',
  high: '1f601',
  low: '1f60c',
  normal: '1f636',
  default: '1fae5',
};

const Detail = () => {
  const { id } = useParams();
  const { list, setList } = useList();
  const blog = list.find((item) => item._id === id);
  const [emotion, setEmotion] = useState('default');

  useEffect(() => {
    if (!blog) {
      getList().then((res) => {
        setList(res.data.diary_list || []);
      });
    }
  }, []);

  // Function to map emotion to a background color
  const emotionToColor = (emotion) => {
    switch (emotion) {
      case 'happy':
        return 'var(--happy)';
      case 'sad':
        return 'var(--sad)';
      case 'cry':
        return 'var(--cry)';
      case 'high':
        return 'var(--high)';
      case 'low':
        return 'var(--low)';
      case 'normal':
        return 'var(--normal)';
      case 'default':
        return 'var(--default)';
      default:
        return 'var(--default)';
    }
  };

  useEffect(() => {
    const fetchEmotion = () => {
      if (blog?.content) {
        getEmotion(blog.content).then((res) => {
          setEmotion(res.data.mood);
        });
      }
    };
    fetchEmotion();
  }, [blog?.content]);

  // Animate background change
  // const [{ background }] = useSpring({
  //   // background: emotionToColor(emotion),
  //   config: config.molasses,
  //   from: { background: 'var(--default)' },
  //   to: { background: emotionToColor(emotion) },
  // }, [emotion]);

  const springProps = useSpring({
    to: { background: emotionToColor(emotion) },
    from: { background: 'var(--default)' },
    config: config.molasses,
  });

  return (
    <div className={styles.container}>
      <h1>
        {blog?.title}
        <Emoji unified={emojiMap[emotion || 'default']} size="25" />
      </h1>

      <div>{blog?.content}</div>
      <animated.div className={styles.background} style={springProps} />
    </div>
  );
};

export default Detail;
