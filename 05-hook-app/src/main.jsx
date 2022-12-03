import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook'
import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { CallbackHook } from './06-memos/CallbackHook'
//import { HooksApp } from './HooksApp'

import './index.css'
import { Padre } from './07-tarea-memo/Padre'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Padre />
  //</React.StrictMode>
)
