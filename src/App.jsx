import { useState } from "react";
import img from "./components/images/shape.png"
function App() {
  var [ab, setab] = useState()
  var [bc, setbc] = useState()
  var [ac, setac] = useState()
  var [unit, setUnit] = useState()
  var setu = (evt) => {
    setUnit(evt.target.value)
  }
  var changeab = (event) => {
    setab(event.target.value)
  }
  var changebc = (event) => {
    setbc(event.target.value)
  }
  var changeac = (event) => {
    setac(event.target.value)
  }
  // chuyen kieu du lieu
  var ab1 = Number(ab)
  var bc1 = Number(bc)
  var ac1 = Number(ac)
  // tu dong hoan thanh
  if (ab1 > 0 && bc1 > 0) {
    var ac2 = Math.sqrt(Math.pow(ab1, 2) + Math.pow(bc1, 2))
    ac1 = ac2
  }
  else if (ab1 > 0 && ac1 > 0) {
    var bc2 = Math.sqrt(Math.pow(ac1, 2) - Math.pow(ab1, 2))
    bc1 = bc2
  }
  else if (bc1 > 0 && ac1 > 0) {
    var ab2 = Math.sqrt(Math.pow(ac1, 2) - Math.pow(bc1, 2))
    ab1 = ab2
  }
  // tinh goc a
  var sinA, cosA, tanA, cotA, aA
  if (ab1 > 0 && bc1 > 0 && ac1 > 0) {
    sinA = (bc1 / ac1).toFixed(2)
    cosA = (ab1 / ac1).toFixed(2)
    tanA = (bc1 / ab1).toFixed(2)
    cotA = (ab1 / bc1).toFixed(2)
    aA = (Math.asin(sinA) * (180 / Math.PI)).toFixed(2)
  }
  else {
    sinA = cosA = tanA = cotA = aA = 0
  }
  //tinh goc c
  var sinC, cosC, tanC, cotC, aC
  if (ab1 > 0 && ac1 > 0 && bc1 > 0) {
    sinC = (ab1 / ac1).toFixed(2)
    cosC = (bc1 / ac1).toFixed(2)
    tanC = (ab1 / bc1).toFixed(2)
    cotC = (bc1 / ab1).toFixed(2)
    aC = (Math.asin(sinC) * (180 / Math.PI)).toFixed(2)
  }
  else {
    sinC = cosC = tanC = cotC = aC = 0
  }
  return (
    <>
      <div className="all">
        <div className="box1">
          <img src={img} className="shape" />
        </div>
        <div className="box2">
          <div className="input">
            <span>AB = <input type="text" value={ab} onChange={changeab} className="numip" placeholder="Số đo" /> <input type="text" value={unit} onChange={(e) => setu(e)} className="unip" placeholder="Đơn vị" /> </span>
            <span>BC = <input type="text" value={bc} onChange={changebc} className="numip" placeholder="Số đo" /> <input type="text" value={unit} onChange={(e) => setu(e)} className="unip" placeholder="Đơn vị" />  </span>
            <span>AC = <input type="text" value={ac} onChange={changeac} className="numip" placeholder="Số đo" /> <input type="text" value={unit} onChange={(e) => setu(e)} className="unip" placeholder="Đơn vị" />  </span>
          </div>
        </div>
        <div className="box3">
          <div className="a">
            <p className="text">sin ∠A = {sinA}</p>
            <p className="text">cos ∠A = {cosA}</p>
            <p className="text">tan ∠A = {tanA}</p>
            <p className="text">cot ∠A = {cotA}</p>
            <p className="text">∠A = {aA}°</p>
          </div>
          <div className="a">
            <p className="text">sin ∠C = {sinC}</p>
            <p className="text">cos ∠C = {cosC}</p>
            <p className="text">tan ∠C = {tanC}</p>
            <p className="text">cot ∠C = {cotC}</p>
            <p className="text">∠C = {aC}°</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
