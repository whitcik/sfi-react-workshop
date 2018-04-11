import mailMock from './mocks/mailMock';

export default function getMailData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(mailMock), 500);
    });
};