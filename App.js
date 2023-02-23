import logo from './logo.svg';
import './App.css';
import Titel from './compenents/Titel';
import HomePage from './compenents/HomePage';
import AddRoom from './compenents/AddRoom';
import { Provider } from './contextApi';
import { Consumer } from './contextApi';
import {BrowserRouter,Link,Route,RouterProvider,Routes} from 'react-router-dom'
import { useState } from 'react';
import ShowRooms from './compenents/ShowRooms';
import Rooms from './compenents/Rooms';
import { useNavigate } from 'react-router-dom';
 

function App() {

   
  


  const[devicesArr,setDevices]=useState([])
  let roomInfo;
  let deviceInfoStatuse;
  // const[selectedItemFromAdd,setSelected]=useState([])
  const[indSelected,setInd]=useState();
  const roomIndex=(ind)=>{
    setInd(ind)
    console.log(ind)
  }
  class DeviceStatuseOnOff{
    status = false;
    constructor(deviceInfo){
      this.deviceInfo = deviceInfo
    }
    checkStattuse(){
      if(this.status == false)
      return false
      else return true
    }
  }
  console.log(devicesArr)
  const deviceStatuse =(str)=>{
        if(str== 'true')
       {
         deviceInfoStatuse= new DeviceStatuseOnOff('device is on')
         deviceInfoStatuse.status = true
         colorAfterChange='green'
         console.log(deviceInfoStatuse)
      }
      else{
        deviceInfoStatuse= new DeviceStatuseOnOff('device is off')
        deviceInfoStatuse.status = false
        colorAfterChange = 'red'
        console.log(deviceInfoStatuse)
      }
      setDevices([...devicesArr,deviceInfoStatuse]);
  }
  
//   const navToRoom=useNavigate();

// const roomFunc=(index)=>{
//     // navToRoom('/room')
 
//     alert(index)
// }

  
  const [roomsArr,setRooms]=useState([])
  const [newAfterSelected,setNewAfterSelected]=useState([])
  let selectedRoomA ;
  const [arrafterAdding,setTheArr]=useState([])
  let colorAfterChange=''


  const addRooms=(roomName,roomColor,selectedRoom)=>{
    selectedRoomA= new Room(roomName,roomColor,selectedRoom)
    setRooms([...roomsArr,selectedRoomA])
    console.log(roomsArr)
    selectedRoomA.nomberOfRooms= roomsArr.length+1;
    }
 

   const selectedItems =(index,selectedItem,cnt)=>{
  
    //  roomArrDet.push(selectedItem)
        roomInfo = new RoomInfo(selectedItem)
        if(cnt>0){
           alert('can not add more than one sterio sesteme')
         
        }
        else{
          if(roomsArr[index].roomDevices.length <5){
           
            roomsArr[index].roomDevices.push(roomInfo )
          }
  
        }
        
        
       

          console.log(roomInfo.nameOfDevice)
        
          console.log(roomsArr[index].roomDevices)
         
          
        
        }


console.log(roomsArr)

 
    

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/addroom' element={<AddRoom   addRooms={addRooms}/>}/>
          <Route path='/' element ={<HomePage roomsArr={roomsArr} roomIndex={roomIndex}  />}/>
      
          <Route path='/room' element={<Rooms  roomsArr={roomsArr} ind={indSelected} selectedItems={selectedItems} deviceStatuse={deviceStatuse}  colorAfterChange={colorAfterChange}/>}/>
      
             
           

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

class Room{
   roomDevices=[];
  nomberOfRooms =0;
  constructor(roomName,color,roomData ){
    this.roomName = roomName;
    this.roomData  = roomData;
    this.color = color;
    }
}
 class RoomInfo {
    constructor(nameOfDevice){
this.nameOfDevice = nameOfDevice;

   }
   
}
 

// const example=()=>{
//   let selectedRoom = new Room(roomNameselected,chosenColer,RoomInfo)  
//   console.log(selectedRoom)
// }

 