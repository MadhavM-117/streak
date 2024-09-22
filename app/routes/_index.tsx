import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [{ title: 'Strea' }, { name: 'description', content: 'Track your habit streaks!' }];
};

export default function Index() {
    return <>Hello World</>;
}
