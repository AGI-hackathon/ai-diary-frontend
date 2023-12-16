import {useState, useEffect} from 'react';
import {Input, Button} from 'antd';
import {publishDiary} from '@/pages/Home/request';

const {TextArea} = Input;

const NewDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
          onClick={() => {
            publishDiary({title, content});
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default NewDiary;
