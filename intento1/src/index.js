import React from "react";
import ReactDOM from "react-dom/client";
import {exported, exported2}  from "./externalmodule";
import Exportall, {exportsec} from "./exportallmodules";
import { Console , Showstats} from "./modulesnames";
import { Botton } from "./botton";
import { Card } from "./css";
import { Hola } from "./clases";
import { Teclado, Click } from "./eventos";
import { Publicar } from "./api-fetch";
import { ThemesBottons } from "./modulosTerciariosIconos";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

function Saludo() {
  //normal framework de componente igual que opp
  return <h1>saludos a todos soy un componenete</h1>;
}

function siono() {
  //si o no
  const son = false;
  return <h1>{son ? "verdadero" : "falso"}</h1>;
}

function variable(){
  const user = {
    fisrName: 'vilen',
    lastname: 'tay'
    //convertir a string == stringify()
    //<h1>{JSON.stringify(user)}</h1>
    //para solo aparecer boleans resultados toString()
  }
  return <div>
    <h1> { user.fisrName }</h1>
    <h3>{ user.lastname}</h3>
  </div>
}  
function hola() {
  function suma(x, y) {
    return x + y;
    
  }
  return <div>
    <h1>{suma(10, 20)}</h1>
  </div> 

}
//<>contenedores vacios</>
rootElement.render(
  <div>
    <h1>hola</h1>
    <Saludo/>
    {siono()}
    {variable()}
    {hola()}
    {exported()}
    {exported2()}
    {Exportall()}
    {exportsec()}
    <Hola/>
    <Console title= {"holamundo"} name={"listo"}/>
    <Showstats name = {"lico"} lastn={"como va"} live = {true}/>
    <Botton text = "puto"/>
    <Botton text ="hola" user="listo"/>
    <Card bool={true}/>
    <Teclado/>
    <Click/>
    <Publicar/>
    <ThemesBottons/>
  </div>
  
);
