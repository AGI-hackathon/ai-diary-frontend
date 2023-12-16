import {history} from 'umi';
import {useState, useEffect} from 'react';
import {Input, Button, message} from 'antd';
import {publishDiary, getEmotion} from '@/pages/Home/request';
import { animated, config, useSpring } from '@react-spring/web';
import styles from './styles.module.css';

const {TextArea} = Input;

const NewDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState('');
  // const [background, setBackground] = useState('var(--default)'); // Default background color
  const [emotionClass, setEmotionClass] = useState('defaultEmotion'); // Initial class

  // Function to map emotion to a class name
  const updateEmotionClass = (emotion) => {
    switch (emotion) {
      case 'happy':
        return 'happyEmotion';
      case 'sad':
        return 'sadEmotion';
      case 'cry':
        return 'cryEmotion';
      case 'high':
        return 'highEmotion';
      case 'low':
        return 'lowEmotion';
      case 'normal':
        return 'normalEmotion';
      default:
        return 'defaultEmotion';
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (content) {
        getEmotion(content).then((res) => {
          setEmotion(res.data.mood);
          setEmotionClass(updateEmotionClass(res.data.mood));
          console.log(res.data.mood);
        });
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [content]);

  return (
    <div>
      <h1>Write a new diary here</h1>

      <div>Title of your diary</div>
      <Input
        placeholder="Write down your mood diary here..."
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />

      <div>Content of your diary</div>

      <TextArea
        className={styles[emotionClass]} // Apply the dynamic class
        placeholder="Write down your mood diary here..."
        value={content}
        onChange={e => {
          setContent(e.target.value);
        }}
        rows={24}
      />

      <div>
        <Button
          type="primary"
          onClick={async () => {
            const res = await publishDiary({title, content});
            if (res) {
              message.success('发表成功');
              history.push('/blog/home');
            }
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default NewDiary;
