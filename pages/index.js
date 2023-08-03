import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import { hours } from '../data.js';
import { useState } from 'react';
import ReportTable from '../components/ReportTable';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
const { login, user, logout } = useAuth();
export default function Home() {

  const [locations, setLocations] = useState([])
  const [ararys, setArrays] = useState([])
  const [summation, setSummation] = useState([])
  const [totalSummation, setTotalSummation] = useState(0)
  const [validatinLogin, setValidatinLogin] = useState({})
  const [virticalSummation, setVirticalSummation] = useState([])
  const { login, user, logout } = useAuth();
  const { resource, loading, createResource, deleteResource,fetchResource } = useResource();


  function submitHandler(event) {
    event.preventDefault();
    
    const randomArray = [];
    const matrixArray = []
    let sum = 0
    let virtical = 0
    let k = 0
    let colArray = []
    for (let i = 0; i < 14; i++) {
      const randomNum = parseInt(Math.floor(Math.random() * (parseInt(event.target.maximum.value) - parseInt(event.target.minimum.value) + 1)) + parseInt(event.target.minimum.value));

      randomArray.push(randomNum);
      console.log(typeof randomNum);
      sum = sum + randomNum
    }
    setTotalSummation(totalSummation + sum)
    matrixArray.push(randomArray)




    
    const locationObj = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.min.value,
      maximum_customers_per_hour: event.target.max.value,
      average_cookies_per_sale: event.target.avg.value
    }

    setLocations([...locations, locationObj])
    setArrays([...ararys, randomArray])
    setSummation([...summation, sum])
    // setVirticalSummation([12,1,4,5])
    // console.log(ararys[2][2]);
    createResource(locations)

    // for (let i = 0; i < 14; i++) {

    //   for (let j = 0; j < ararys.length; i++) {
    //     virtical += ararys[j][k]
    //     console.log(ararys[j][k])
    //   }
    //   colArray.push(virtical)
    //   k++
    //   virtical = 0

    // }

  }

  function loginHandler(event){
    event.preventDefault();
    setValidatinLogin({
      username: event.target.username.value,
      password: event.target.password.value,
    })
  }


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>


      {/* Header */}
      <Header />
      <main className='flex flex-col min-h-screen items-center py-4 space-y-8'>                                                                                                                                                                                                                                         
        {/* form */}
        <setValidatinLogin loginHandler={loginHandler}/>
        {user.username == validatinLogin.username  ? (
          <>
            <button className="p-2 text-white bg-gray-500 rounded" onClick={() => logout()}>Logout</button>
            <h2>Welcome {user.username}</h2>
            <CreateForm1 onCreate={createResource} />
            <ReportTable locations={locations} hours={hours} ararys={ararys} summation={summation} totalSummation={totalSummation} virticalSummation={virticalSummation} data={resource} loading={loading} onDelete={deleteResource} />

            {/* <StandList data={resource} loading={loading} onDelete={deleteResource} /> */}
          </>
        ) : (
          <>
            <h1>Toqa Bany Yassen
            </h1>
            <button className="p-2 text-white bg-gray-500 rounded" onClick={() => login("root", "123")}>Login</button>
            <h2>Need to log in</h2>
          </>
        )}

        <CreateForm handler={submitHandler} hours={hours} />
        

      </main>
      <footer className="p-4 mt-auto bg-lime-900 text-gray-50 ">
        &copy; 2023
      </footer>

    </>
  )
}






function StandList({ data, loading, onDelete }) {

  if (loading) return <p>Loading ...</p>
  return (
    <>
      <h3 className="text-xl">Cookies Stand List</h3>
      {data.map(item => (
        <li key={item.id}>
          <span>{item.location}</span>
          <span onClick={() => onDelete(item.id)}>[X]</span>
        </li>
      ))}

    </>
  )
}


function CreateForm1({ onCreate }) {

  function handleSubmit(event) {
    event.preventDefault();
    const standInfo = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.min.value,
      maximum_customers_per_hour: event.target.max.value,
      average_cookies_per_sale: event.target.avg.value
    }
    onCreate(standInfo)
  }
  return (
    <>
      <h3 className="text-xl"> Create new item</h3>
      <form onSubmit={handleSubmit}>
        <input className="border border-black" name="location" placeholder='Location' />
        <input className="border border-black" name="min" placeholder='min' />
        <input className="border border-black" name="max" placeholder='max' />
        <input className="border border-black" name="avg" placeholder='avg' />
        <button className="p-2 bg-gray-500 text-white">Create</button>
      </form>
    </>
  )
}


function login_validation(props) {

  return (
    <>
      <h3 className="text-xl"> Create new item</h3>
      <form onSubmit={props.loginHandler}>
        <input className="border border-black" name="username" placeholder='username' />
        <input className="border border-black" type='password' name="password" placeholder='password' />
        
        <button className="p-2 bg-gray-500 text-white">Log in</button>
      </form>
    </>
  )
  
}