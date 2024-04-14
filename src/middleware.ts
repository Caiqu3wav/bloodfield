import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';



const callbackOptions = {}

export default withAuth(callbackOptions);

export const config = {
    matcher: '/private'
}