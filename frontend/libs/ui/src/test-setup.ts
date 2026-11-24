import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
// NEW: DOM matchers for Testing Library tests (toBeInTheDocument, toBeDisabled,
// toHaveAttribute ...). Version 7 is the newest that supports Vitest 4.
import '@testing-library/jest-dom/vitest';

setupTestBed();
