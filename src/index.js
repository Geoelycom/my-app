import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return ( 
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="sam"  
                timeAgo="Today at 4:56PM" 
                blogPost="A great post"
                    avatar={faker.image.avatar()} /> 
          </ApprovalCard>

          <ApprovalCard>
                <CommentDetail 
                author="shanny"
                    timeAgo="Today at 3:00pm" 
                    blogPost="Love this post Sam!"
                    avatar={faker.image.avatar()} /> 
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail
                        author="emma"  
                        timeAgo="Yesterday at 1:45pm" 
                        blogPost="amazing content again Sam" 
                        avatar={faker.image.avatar()} /> 
       </ApprovalCard>
        </div>
    );  
};



ReactDOM.render( < App /> , document.querySelector('#root'))