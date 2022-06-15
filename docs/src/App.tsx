import React, { useState } from 'react'

import { GiPreviousButton, GiNextButton } from 'react-icons/gi'

import GettingStarted from './components/GettingStarted'
import Badge from './components/Badge'
import Button from './components/Button'
import Card from './components/Card'
import Checkbox from './components/Checkbox'
import Container from './components/Container'
import Divider from './components/Divider'
import Input from './components/Input'
import List from './components/List'
import Progress from './components/Progress'
import Radio from './components/Radio'
import Select from './components/Select'
import Table from './components/Table'
import Tab from './components/Tab'
import Textarea from './components/Textarea'
import Title from './components/Title'
import Utilities from './components/Utilities'

function App() {

  const [ index, setIndex ] = useState(0)
  const increment = () => index < components.length - 1 && setIndex(i => i + 1)
  const decrement = () => index > 0 && setIndex(i => i - 1)
  const changeIndex = (name: string) => {
    let idx = components.findIndex(el => el.name === name)
    setIndex(idx)
  }

  const components = [
    { name: '👋 Getting Started', el: <GettingStarted />},
    { name: 'Badges', el: <Badge /> },
    { name: 'Buttons', el: <Button /> },
    { name: 'Cards', el: <Card /> },
    { name: 'Checkboxes', el: <Checkbox /> },
    { name: 'Containers', el: <Container /> },
    { name: 'Dividers', el: <Divider /> },
    { name: 'Inputs', el: <Input /> },
    { name: 'Lists', el: <List /> },
    { name: 'Progress', el: <Progress />},
    { name: 'Radios', el: <Radio /> },
    { name: 'Selects', el: <Select /> },
    { name: 'Tables', el: <Table /> },
    { name: 'Tabs', el: <Tab /> },
    { name: 'Textarea', el: <Textarea /> },
    { name: 'Titles', el: <Title /> },
    { name: '🔨 Utilities', el: <Utilities /> }
  ]

  return (
    <div className="app">
      
      <div className="col center-x space-y-0 pt-50">
        <h1 className="title">Retro.css</h1>
        <h2 className="subtitle">A CSS kit from the sixties ✌</h2>
      </div>

      <div className="col center-x">
        <hr className="divider" />
      </div>

      <div className="row center space-x-15">
        <button 
          className={`button ${index == 0 && 'is-disabled'}`} 
          onClick={decrement}
        >
          <GiPreviousButton />
        </button>
        <select 
        className="select" 
        onChange={e => changeIndex(e.target.value)}
        value={components[index].name}
        >
          {components.map(el => 
            <option key={el.name}>
              {el.name}
            </option>
          )}
        </select>
        <button 
          className={`button ${index == components.length - 1 && 'is-disabled'}`}
          onClick={increment}
        >
          <GiNextButton />
        </button>
      </div>

      <div className="row center-x mt-50">
        {components[index].el}
      </div>

    </div>
  )
}

export default App
