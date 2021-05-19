import CreateComponent from '../utils/CreateComponent'

import Select from './components/Select/Select'
import Accordion from './components/Accordion/Accordion'

class App {
  constructor () {
    this.init().then(() => {})
  }

  async init () {
    await this.initComponents()
    await this.sandbox()
  }

  sandbox () {

  }

  initComponents () {
    new CreateComponent('.select', Select)
    new CreateComponent('.accordion', Accordion)
  }
}

export default App
