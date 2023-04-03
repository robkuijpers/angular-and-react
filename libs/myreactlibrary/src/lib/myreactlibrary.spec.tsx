import { render } from '@testing-library/react';

import Myreactlibrary from './myreactlibrary';

describe('Myreactlibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Myreactlibrary />);
    expect(baseElement).toBeTruthy();
  });
});
