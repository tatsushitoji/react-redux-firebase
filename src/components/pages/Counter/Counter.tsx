import * as React from 'react';
import { PaperContainer } from '../../atoms';
import { CounterCount } from '../../molecules';
import { CounterButtons } from '../../organisms';

export interface Props {
  count: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  asyncIncrement: React.MouseEventHandler<HTMLButtonElement>;
}

export const Counter: React.SFC<Props> = ({
  count,
  increment,
  decrement,
  asyncIncrement,
}) => (
  <PaperContainer>
    <CounterCount count={count || 0} />
    <CounterButtons
      increment={increment}
      decrement={decrement}
      asyncIncrement={asyncIncrement}
    />
  </PaperContainer>
);
