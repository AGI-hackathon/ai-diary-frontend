import axios from 'axios';

export const getList = () => axios.get('/diary/fetch');
export const getEmotion = text => axios.get(`/diary/emotion?current_text=${encodeURIComponent(text)}`);
