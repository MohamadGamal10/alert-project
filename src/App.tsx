import { BellRing } from 'lucide-react'
import './App.css'
import Alert from './components/ui/Alert/Alert'

function App() {

  return (
    <div>
      <Alert type={"alert-default"} icon={<BellRing size={20} />} title={'Alert Title'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ex. Nostrum soluta, explicabo maiores quam dolor doloribus nobis, eaque omnis nam reiciendis, expedita nulla assumenda. Recusandae nam aliquam officiis!"} />
      <Alert type={"alert-error"} icon={<BellRing size={20} />} title={'Alert Title'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ex. Nostrum soluta, explicabo maiores quam dolor doloribus nobis, eaque omnis nam reiciendis, expedita nulla assumenda. Recusandae nam aliquam officiis!"} />
      <Alert type={"alert-warning"} icon={<BellRing size={20} />} title={'Alert Title'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ex. Nostrum soluta, explicabo maiores quam dolor doloribus nobis, eaque omnis nam reiciendis, expedita nulla assumenda. Recusandae nam aliquam officiis!"} />
      <Alert type={"alert-info"} icon={<BellRing size={20} />} title={'Alert Title'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ex. Nostrum soluta, explicabo maiores quam dolor doloribus nobis, eaque omnis nam reiciendis, expedita nulla assumenda. Recusandae nam aliquam officiis!"} />
      <Alert type={"alert-success"} icon={<BellRing size={20} />} title={'Alert Title'} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ex. Nostrum soluta, explicabo maiores quam dolor doloribus nobis, eaque omnis nam reiciendis, expedita nulla assumenda. Recusandae nam aliquam officiis!"} />
    </div>
  )
}

export default App
