import {createRoot} from 'react-dom/client';
// import {ErrorBoundary} from 'react-error-boundary';

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

function Root() {
  return <div>Root</div>;
}
