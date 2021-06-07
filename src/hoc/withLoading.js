import {useEffect,useState,useContext} from 'react'
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.backgroundColor };
`
 // WrappedComponent = App.js, fetchData = getLanguages
export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null)
    const [theme] = useContext(ThemeContext)

    useEffect(() => {
      fetch();
    },[])

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv theme ={theme}> ロード中... </LoadDiv> 
    )
    return data ? <WrappedComponent data={data} /> : Loading;
  }
}