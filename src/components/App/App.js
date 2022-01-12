import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
import GuestForm from '../GuestForm/GuestForm'

function App() {
  let [guestList, setGuestList] = useState([]);
  // let [newGuestName, setNewGuestName] = useState('');
  // let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (guest) => {
    axios.post('/guests', guest)
      .then(response => {
        // clear inputs
        // setNewGuestName('');
        // setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (newGuestName) {
  //     addGuest();
  //   }
  //   else {
  //     alert('The new guest needs a name!');
  //   }
  // }

  return (
    <div className="App">
      <Header title='prim proper props' />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <h2>Add a new guest</h2>
      <GuestForm addNewGuest={addGuest}/>
      <h2>Guest List</h2>
      <GuestList 
      list={guestList}
      />
      <DinnerSupplies guestList={guestList} />
      <Footer encourage="Have Fun!" warning="Don't forget to mind your p's and q's"/>
    </div>
  );
}

export default App;
