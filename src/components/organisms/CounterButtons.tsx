import * as React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  asyncIncrement: React.MouseEventHandler<HTMLButtonElement>;
}

export const CounterButtons: React.SFC<Props> = ({
  increment,
  decrement,
  asyncIncrement,
}) => (
  <>
    <Button
      variant="contained"
      color="primary"
      onClick={increment}
      data-test="increment-button"
    >
      Increment 3
    </Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={decrement}
      data-test="decrement-button"
    >
      Decrement 2
    </Button>
    <Button
      variant="contained"
      color="default"
      onClick={asyncIncrement}
      data-test="async-increment-button"
    >
      Async Increment 5
    </Button>
  </>
);
