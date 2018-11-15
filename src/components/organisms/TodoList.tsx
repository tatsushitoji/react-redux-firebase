import * as React from 'react';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { ITodo } from '../../modules/todo';
import { TodoListItem } from '../molecules';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 4,
    },
  });

interface Props extends WithStyles<typeof styles> {
  todos: ITodo[];
  toggle: (_: React.ChangeEvent) => void;
}

const TodoListComponent: React.SFC<Props> = ({ todos, toggle, classes }) => (
  <List className={classes.root}>
    {todos.map((item: ITodo) => (
      <TodoListItem
        id={item.id}
        key={item.id}
        text={item.text}
        completed={item.completed}
        toggle={toggle}
      />
    ))}
  </List>
);

export const TodoList = withStyles(styles)(TodoListComponent);
