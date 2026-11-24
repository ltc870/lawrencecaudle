// CHANGED: replaces the generated "should create" test with Testing Library
// queries (roadmap decision 25) and an axe check (decision 26).
import { provideRouter } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { axeViolations } from '../../testing/axe-violations';
import { ComponentSheet } from './component-sheet';

describe('ComponentSheet', () => {
  // The sheet's links use RouterLink, which needs a router to exist.
  function renderSheet() {
    return render(ComponentSheet, { providers: [provideRouter([])] });
  }

  it('has exactly one page heading', async () => {
    await renderSheet();

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('names every section after its heading', async () => {
    await renderSheet();

    const sectionNames = [
      'Type',
      'Buttons',
      'Chips',
      'Status chips',
      'Forms',
      'Surfaces',
      'Post card',
      'Content',
      'Pager',
      'Skeleton',
    ];
    for (const sectionName of sectionNames) {
      expect(
        screen.getByRole('region', { name: sectionName }),
      ).toBeInTheDocument();
    }
  });

  it('shows the pressed filter chip as pressed', async () => {
    await renderSheet();

    expect(screen.getByRole('button', { name: /^C#/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('keeps the busy button disabled and marked busy', async () => {
    await renderSheet();

    const busyButton = screen.getByRole('button', { name: 'Signing in...' });
    expect(busyButton).toBeDisabled();
    expect(busyButton).toHaveAttribute('aria-busy', 'true');
  });

  it('links every form field to a visible label', async () => {
    await renderSheet();

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInvalid();
    expect(screen.getByLabelText('Excerpt')).toBeInTheDocument();
  });

  it('has no axe violations', async () => {
    const { container } = await renderSheet();

    expect(await axeViolations(container)).toEqual([]);
  });
});
