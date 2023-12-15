import {useEffect} from 'react';
import {useParams} from 'umi';
import {useList} from '@/pages/Home/store';
import {getList, getEmotion} from '@/pages/Home/request';

const Detail = () => {
  const {id} = useParams();
  const {list, setList} = useList();
  const blog = list.find((item) => item._id === id);

  useEffect(() => {
    if(!blog) {
      getList().then((res) => {
        setList(res.data.diary_list || []);
      });
    }
  }, []);

  useEffect(() => {
    getEmotion(blog?.content).then((res) => {
      console.log(res);
    })
  }, [list]);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <div>
        {blog?.content}
      </div>
    </div>
  );
};

export default Detail;
