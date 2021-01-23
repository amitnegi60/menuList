import React, {useState} from "react";
import "./App.css";
import Menu from './layouts/Menu';
import Categories from './layouts/Categories';
import data from './layouts/Data';

function App() {

const [menuItems, setMenuItmes] = useState(data);

const list = () => {

if(data.Categories === 'all'){
return '';
}
return setMenuItmes(data);
}


const shakes = () => {

 const newitems = data.filter((dat) => dat.category === 'shakes');
 setMenuItmes(newitems);
}


const lunch = () => {

  const newitem1 = data.filter((dat) => dat.category === 'lunch');
  setMenuItmes(newitem1);
}


const breakfast = () => {

const newitem2 = data.filter((dat) => dat.category === 'breakfast');
setMenuItmes(newitem2);

}


  return (
    <>
   <main>
     <section className="menu section">
<div className="title">
<h2>Our Menu</h2>
<div className="underline"></div>
</div>
<Categories list={list} shakes={shakes} lunch={lunch} breakfast={breakfast}/>
<Menu menuItems= {menuItems}/>
     </section>
   </main>
    </>
  );
}

export default App;
