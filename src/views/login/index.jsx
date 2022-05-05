import React from 'react';
import { Redirect } from 'react-router-dom';

import GIF from 'gif.js';
import {A,B } from '../../images'

import './styles.css';

const Login = () => {
  // const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  // if(isLogin) {
  //   return <Redirect to="/app" />
  // }
  console.log(A)
 

  const getGif = () => {
    let gif = new GIF({
      workers: 2,
      quality: 10,
      workerScript: 'public/gif.worker.js'
    });

    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');

    let arr = [img1, img2];

    arr.map(item =>{
      gif.addFrame(item, {delay: 1000});
    })


    gif.on('finished', function(blob) {
      // window.open(URL.createObjectURL(blob));
      let el = document.createElement('a')
      el.href = URL.createObjectURL(blob);
      el.download = 'a.gif';
      document.body.appendChild(el);
      let evt = document.createEvent("MouseEvent");
      evt.initEvent('click',false,false)
      el.dispatchEvent(evt);
      document.body.removeChild(el)
    });

    gif.render();
  }
  
  return (
    <div>
      <h2>Login Page</h2>

      {/* <img id ='img1' src='https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg'></img>
      <img id ='img2' src='https://www.keaidian.com/uploads/allimg/190424/24110307_23.jpg'></img> */}
      <img id ='img1' src={A}></img>
      <img id ='img2' src={B}></img>
      <button onClick={getGif}> 下载 </button>
    </div>
  )
};

export default Login;
