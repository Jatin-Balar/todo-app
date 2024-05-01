import './App.css';
import TodoApp from './components/todo/TodoApp'
import { MsalProvider } from "@azure/msal-react";
function App({instance}) {
  return (
    <MsalProvider instance={instance}>
    <div className="App">
      <TodoApp />
    </div>
    </MsalProvider>
  )
}
export default App;
