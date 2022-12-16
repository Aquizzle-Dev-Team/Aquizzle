export function getMessageFromError(errorCode: string): string {
    switch(errorCode.split('/')[1]) {
        default: return 'Something went wrong.';
        case 'invalid-email': return 'Please enter a valid email address.';
        case 'email-already-in-use': return 'The email is already in use.';
        case 'user-not-found': return 'There is no user with that email address.';
        case 'wrong-password': return 'Incorrect password.';
        case 'weak-password': return'Your password must be at least 6 characters long.';
    }
}
