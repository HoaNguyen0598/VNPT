import { Steps, Button, message } from 'antd';
import React from 'react';
import Step1 from './Layouts/Step1';
import Step2 from './Layouts/Step2';

const { Step } = Steps;

const steps = [
    {
        title: 'Step 1',
        content: <Step1 />,
    },
    {
        title: 'Step 2',
        content: <Step2 />,
    },
    {
        title: 'Step 3',
        content: 'Step3-content',
    },
    {
        title: 'Step 4',
        content: 'Step4-content',
    },
    {
        title: 'Step 5',
        content: 'Step5-content',
    },
];

const CreateUserPage = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onChange = (current) => {
        setCurrent(current);
    }

    return (
        <>
            <Steps current={current}
                onChange={onChange}
                className='rc_steps'
            >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default CreateUserPage;