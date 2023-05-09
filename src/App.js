import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

// echo "# my-assin" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jayed-phero/my-assin.git
// git push -u origin main
