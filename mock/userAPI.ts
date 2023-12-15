const blogs = [
  { id: 0, title: 'Happy blog', content: "I\'m very happy today", emotion: 'happy' },
  { id: 1, title: 'Sad blog', content: "I\'m very sad today", emotion: 'sad' },
];

export default {
  'GET /api/v1/queryBlogList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: blogs },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
