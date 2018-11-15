import * as React from 'react';
import { pure } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
  id: string;
  text: string;
  completed: boolean;
  toggle: (_: React.ChangeEvent<Element>) => void;
}

export const Item: React.SFC<Props> = ({ id, text, completed, toggle }) => (
  <ListItem>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <Checkbox id={id} onChange={toggle} checked={completed} />
    </ListItemSecondaryAction>
  </ListItem>
);

export const TodoListItem = pure(Item);
