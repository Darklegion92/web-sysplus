import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import reportWebVitals from './reportWebVitals'
import { GlobalProvider } from './context/GlobalContext'
import esEs from 'antd/lib/locale/es_ES'
import 'antd/dist/antd.css'

ReactDOM.render(
  <ConfigProvider locale={esEs}>
    <React.StrictMode>
      <GlobalProvider>
        <Router>
          <App />
        </Router>
      </GlobalProvider>
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
