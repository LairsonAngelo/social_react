import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {
   
  }
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Lairson Angelo',
      userName: 'lairsonangelo',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQF7ow7412xZQA/profile-displayphoto-shrink_400_400/0/1606930313058?e=1612396800&v=beta&t=ZUNOSzVh82JqsaNrOcHtqsKRDBzFX32uwIq_8wFVYL8'
    },
    title: 'Isso é um cabeçalho',
    date: 'Dezember 04, 2020',
    description: 'Isso e um post',
    hashtags: '#php',
    image: 'https://vidadeprogramador.com.br/uploads/2018/10/tirinha1901.png'

  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Lairson Angelo',
      userName: 'lairsonangelo',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQF7ow7412xZQA/profile-displayphoto-shrink_400_400/0/1606930313058?e=1612396800&v=beta&t=ZUNOSzVh82JqsaNrOcHtqsKRDBzFX32uwIq_8wFVYL8'
    },
    title: 'Isso é outro post',
    date: 'Dezember 04, 2020',
    description: 'Isso e um post mais fr',
    hashtags: '#php',
    image: 'https://miro.medium.com/max/800/1*H8PH-HaV43gZyBJz0mJHxA.png'

  },
];
 
function Feed(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }   
     
    </div>
  );
}

export default Feed;