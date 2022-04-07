import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>
        <Routes>
          {/* ROUTE DEL MAIN (PUBLICAS) */}
          <Route path="login" element={<Login />} />
         
          <Route element={<Main />}>
            <Route path="/" element={<App />} />
  
          </Route>
        
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;