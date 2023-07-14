import React from 'react'
import { useDispatch } from 'react-redux'
import * as exampleActions from '../../store/modules/example/actions'
import { toast } from 'react-toastify'
/*
import axios from '../../services/axios'
*/
//styled

import { Title } from './styled'
import { Container } from '../../styles/GlobalStyled'

export default function Login() {
   /*  UTILIZANDO  toasty
   toast.success('Bem vindo ao React !')
   */
   /*  EXEMPLO USANDO HOOK USEFFECT:
      React.useEffect(() => {
      async function getData() {
         const resp = await axios.get('/alunos')
         const { data } = resp
         console.log(data)
      }
      getData()
      // ele me retorna assicrono
   }, []) //cada variavel mudavel entra no array) */
   const dispatch = useDispatch()

   function handleClick(e) {
      e.preventDefault()
      const timer = () => {
         new Promise(resolve => {
            setTimeout(() => {
               dispatch(exampleActions.clicaBotaoRequest())
               resolve()
            }, 3000)
         })
      }
      timer()
      toast.warn('pegando Requisição !')
   }
   return (
      <Container>
         <Title>React 18 Hello world !</Title>
         <button type="button" onClick={handleClick}>
            Base React
         </button>
      </Container>
   )
}
