import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import "../utils/globals.css"
import Layout from "../components/layout"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid } from '@material-ui/data-grid';

// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import {getComments} from "../services/orderService"
import {apiCommentCreate, apiCommentByName} from "../services/news"


function CommentPage({data}) {
  var [comments, setComments] = useState([]);
  const [inputField , setInputField] = useState({
    opinion: '',
    // last_name: '',
    // gmail: ''
})
const [testData, setTestData] = useState({
  fName:"mi",
  lName:"thank"
});

const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {    //is called when move to other pages.
      alert(3);
      clearInterval(timer);
    };
  }, []);

const [item,setItem] = useState("")
const items = ["bread","meat"];


  // useEffect(() => {
  //   getData("bread");
  // }, []);

  const getdata = (item) => {
    // const { data: comments } = await getComments(item);
    apiCommentByName(item)
    .then(res => {
      if (res) {
        console.log(res);
        setComments(res);
        // history.push('/')
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      console.log('===== error: ', error);
      // ...
    });

    setComments(comments); 
    setItem(item);
    console.log(comments);        
  };

  const CommentList = ({comments})=>{
    

    if(comments.length === 0) return <div>PUSH BUTTON</div>;
  
    return(
      <div className="flex flex-wrap flex-col-2 gap-4 pt-5">
        {comments.map((item,index) => {
          return(
            <p className={"bg-green-400 rounded-md p-3 shadow-md " + (item === "Best" ? " bg-red-600 ":" ")} key={index}>{item}</p>
          );
        })}
      </div>
  );
}

const addComment = () => {
  if(item === "") return false;
  
  var data = {[item]:inputField.opinion};

  apiCommentCreate(data)
      .then(res => {
        if (res) {
          console.log(res);
          setComments(res);
          // history.push('/')
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log('===== error: ', error);
        // ...
      });

}

const inputChangeHandler = (event) => {
  
  var name = event.target.name;
  var value = event.target.value;
  console.log(name,value);
  setInputField({[name]:value});
}

// const InputBox = ()=>{ // inputbox is function so it lose focus after one typing.
//   return (
    
//   )
// }

// const testDataChange = ()=>{
//   console.log(testData);
//     setTestData(prevState=>({
//       ...prevState,
//       lName:"Yong"
//     }));
// }

  return (
  
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>

      <div className="grid grid-cols-3 gap-4 pt-32 md:p-10 min-h-screen" >
        <div className="col-span-1 h-full md:border-r-2 md:border-gray-500 pr-10">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 content-center">
          {items.map((item, index) => (
          
          <div className="flex-1 text-white bg-gradient-to-r from-teal-400 to-blue-500 py-2 px-5 flex justify-center hover:bg-gradient-to-r hover:from-blue-300 hover:to-pink-400 hover:shadow-lg " key={index} onClick = {()=>getdata(item)}>
            <p className="cursor-pointer">Show {item}</p>
          </div>
        
           ))}
          </div>
        
        </div>

        <div className="col-span-2">
        <div className = "flex flex-col-2 justify-start gap-x-4">
           <input type="text" name="opinion" onChange = {inputChangeHandler} value = {inputField.opinion} className = "border"/>
           <button className = {'bg-primary py-1 px-2'} onClick={addComment}> ADD</button>
           <Button className = {'bg-primary py-1 px-2'} color="primary" onClick={addComment}>Add</Button>
    
        </div>
          <CommentList comments = {comments}></CommentList>

          {/* <CircularProgress variant="determinate" value={progress} /> */}
      

        
          
        </div>



        
        
      </div>

    
      

    </Layout >
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default CommentPage
