import lazy from '@app/pages/lazy';

export default lazy(() => import(/* webpackChunkName: 'todos' */ './Todos'));
