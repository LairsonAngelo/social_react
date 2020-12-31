import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200,{
  user: { 
    id: 1,
    name: 'admin',
    email: 'admin@admin.com',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQF7ow7412xZQA/profile-displayphoto-shrink_400_400/0/1606930313058?e=1612396800&v=beta&t=ZUNOSzVh82JqsaNrOcHtqsKRDBzFX32uwIq_8wFVYL8'
  }
});


mock.onPost('/api/home/login').reply((config) => {
  const {email,password} = JSON.parse(config.data);
  

  if(email !== 'admin@admin.com' || password !== 'admin'){
    return [400, {message: 'Seu e-mail ou senha estão incorretos'}]
  }
  const user = {
    id: 1,
    name: 'admin',
    email: 'admin@admin.com',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQF7ow7412xZQA/profile-displayphoto-shrink_400_400/0/1606930313058?e=1612396800&v=beta&t=ZUNOSzVh82JqsaNrOcHtqsKRDBzFX32uwIq_8wFVYL8'
  }

  return [200, {user}];
});
