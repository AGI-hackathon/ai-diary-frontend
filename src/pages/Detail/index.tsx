import { getEmotion, getList } from '@/pages/Home/request';
import { useList } from '@/pages/Home/store';
import { animated, config, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { useParams } from 'umi';
import './index.css';
import styles from './styles.module.css';

const Detail = () => {
  const { id } = useParams();
  const { list, setList } = useList();
  const blog = list.find((item) => item._id === id);
  const [emotion, setEmotion] = useState('');

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
      default:
        return 'var(--default)';
    }
  };

  useEffect(() => {
    const fetchEmotion = () => {
      if (blog?.content) {
        getEmotion(blog.content).then((res) => {
          // Assume res.data contains the emotion string
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

  console.log(
    `Current emotion: ${emotion}, Background color: ${emotionToColor(emotion)}`,
  );

  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <div>{blog?.content}</div>
      <animated.div className={styles.background} style={springProps} />
    </div>
  );
};

export default Detail;
