import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from 'react-datasheet-grid'

function App() { 
const Example = () => {
  const [ data, setData ] = useState([
    { active: true, firstName: 'Elon', lastName: 'Musk' },
    { active: false, firstName: 'Jeff', lastName: 'Bezos' },
  ])

  const columns = [
    { ...keyColumn('active', checkboxColumn), title: 'Active' },
    { ...keyColumn('firstName', textColumn), title: 'First name' },
    { ...keyColumn('lastName', textColumn), title: 'Last name' },
  ]

  return (
    <DataSheetGrid
      value={data}
      onChange={setData}
      columns={columns}
    />
  )
}
}

export default App;


