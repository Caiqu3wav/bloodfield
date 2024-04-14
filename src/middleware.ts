import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

const middleware = (request: NextRequestWithAuth) => {

}

const callbackOptions = {}

export default withAuth(middleware, callbackOptions);

export const config = {
    matcher: '/private'
}