import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentComponent from './CommentComponent';
import ApprovalCard from './ApprovalCard'
import data from './db';

const App = () => {
  data.forEach((item,index) =>{
  console.log(item.author);
  });
  return (    
    <div className="ui container comments" >
    <ApprovalCard>
        <CommentComponent
          author={data[0].author}
          postTime={data[0].postTime}
          content={data[0].content}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentComponent
          author={data[1].author}
          postTime={data[1].postTime}
          content={data[1].content}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentComponent
          author={data[2].author}
          postTime={data[2].postTime}
          content={data[2].content}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


