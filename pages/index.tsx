import { trpc } from '../utils/trpc';

export default function HomePage() {
  const {
    data,
    isLoading,
    isError,
  } = trpc.useQuery(['hello', { text: 'client' }]);
  if (isLoading) {
    return (<div>im loading bitch...</div>);
  }
  if (data) {
    return (<div>{data.greeting}</div>);
  }
  if (isError) {
    return (<div>whoops Error!</div>);
  }
}
