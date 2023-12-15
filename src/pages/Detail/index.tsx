import {useParams} from 'umi';
import {useList} from '@/pages/Home/store';

const Detail = () => {
  const {id} = useParams();
  const {list} = useList();
  const blog = list.find((item) => item._id === id);

  return (
    <div>
      {blog.content}
    </div>
  );
};

export default Detail;
