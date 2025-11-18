import React from 'react'
import Btn from '../components/Btn'

const Prop = () => {
  return (
    <div>
     <Btn title="Change" color="btn btn-danger"text='text-info' />
    <Btn title="Beautify" color="btn btn-dark"text='text-light' />
    <Btn title="Decorate"color="btn btn-outline-primary"text='text-warning' />
    <Btn title="Add"color="btn btn-info"text='text-primary' />
    <Btn title="Update"color="btn btn-warning"text='text-danger' />
    </div>
  )
}

export default Prop