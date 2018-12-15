import React from 'react';
import Boton from './Boton';
export default class Actionbar extends React.Component {
  render() {
    return(
      <table>
        <tr>
          <th><Boton/></th>
          <th><Boton/></th>
          <th><Boton/></th>
        </tr>
      </table>
      );
  }
}
