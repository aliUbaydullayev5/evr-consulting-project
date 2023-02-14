import '@/styles/globals.css'
import {Provider} from "react-redux";
import Message from "@/components/Message";
import store from "@/redux/store";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import AOS from 'aos';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, [])
  return(
      <Provider store={store}>
        <Message />
        <Component {...pageProps} />
      </Provider>
  )
}