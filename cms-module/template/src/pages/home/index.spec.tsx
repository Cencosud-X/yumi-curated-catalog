import { render } from '@testing-library/react';

import Page from '.';

describe('TemplateModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
