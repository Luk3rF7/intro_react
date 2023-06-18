import styled, { createGlobalStyle } from 'styled-components'
import * as color from '../config/color'
import 'react-toastify/dist/ReactToastify.css'
export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
}

body{
    font-family:sans-serif;
    background: ${color.primaryDarkColor};
    color: ${color.primaryDarkColor};
}

html, border-style, #root {
    height: 100%;
}
  button {
      cursor: pointer;
      background: ${color.primaryColor};
      border: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 700;
   }
   button:hover {
      background: #ccc;
      color: ${color.primaryColor};
      border: 1px solid ${color.primaryColor};
      transition: 0.3s ease-in-out;
   }
a{
    text-decoration:none;
    background:${color.primaryColor};
}

ul{
    list-style:style none;
}
//Toastify
   body .Toastify .Toastify__toast-container .Toastify__toast--success {
    color:black;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error  {
    color:black;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--warn  {
   color:black;
  }
`
export const Container = styled.section`
   max-width: 360px;
   height: 400px;
   background-color: #fff;
   margin: 30px auto;
   padding: 30px;
   border-radius: 4px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`
