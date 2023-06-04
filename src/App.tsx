import './App.css'
import Address from './Components/Address';
import DynTitleNLogo from './Components/DynTitleNLogo';
import useRandNameApi from './hooks/useRandNameApi'

function App() {
  const {data,refetch}=useRandNameApi();

  if(!data){
    return <h3>Loading...</h3>
  }

  return (
    <DynTitleNLogo name={data?.name?.first} icon={data?.picture?.thumbnail}>
    <div className='img-container'>
    <div className='img-wrapper'>
      <img src={data.picture.large}/>
    </div>
    </div>
    <h1>{data.name.title}. {data.name.first} {data.name.last}</h1>
    <Address location={data.location}/>
    <h3>{data.email}</h3>
    <h4>Phone - {data.phone} | Cell - {data.cell}</h4>
    <button onClick={refetch}>Fetch New User</button>
    </DynTitleNLogo>
  )
}

export default App
