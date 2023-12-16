import axios from 'axios';

const url = 'https://gg3mbenk6m.ap-northeast-1.awsapprunner.com';

export const getList = () => axios.get(`${url}/diary/fetch`);
export const getEmotion = text => axios.get(`${url}/diary/emotion?current_text=${encodeURIComponent(text)}`);
export const publishDiary = params => axios.put(`${url}/diary/upload`, params);
export const deleteDiary = id => axios.delete(`${url}/diary/delete/${id}`);
