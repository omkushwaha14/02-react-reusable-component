import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
   
  return (
    <Card app={classes.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
      </form>
      <Button type="submit">Add User</Button>
    </Card>
  );
};

export default AddUser;
