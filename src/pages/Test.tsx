import React from 'react';
import { useSearchParams } from 'react-router-dom';

export interface ITestPageProps {}

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const food = searchParams.get('food');
    const dog = searchParams.get('dog');

    return (
        <div>
            <p>This is the test page.</p>
            {food && <p>Favorite food is: {food}</p>}
            {dog && <p>My dogs name is: {dog}</p>}
            <button onClick={() => setSearchParams({ food: 'chicken', dog: 'kyle' })}>Change up the Params!</button>
        </div>
    );
};

export default TestPage;
