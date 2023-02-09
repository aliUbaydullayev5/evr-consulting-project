import '@/styles/globals.css'
import {Provider} from "react-redux";
import Message from "@/components/message";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return(
      <Provider store={store}>
        <Message />
        <Component {...pageProps} />
      </Provider>
  )
}