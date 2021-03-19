import { Header } from "./Header.js"
import { Table } from "./Table.js"

export const App = { 
  template: `
    <div class="container">
      <header-component></header-component>
      <table-component></table-component>
    </div>
  `,
  components: {
    "header-component": Header,
    "table-component": Table
  }
}