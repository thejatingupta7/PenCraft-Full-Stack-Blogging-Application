import React from 'react';

const styles = {
    googleButton: {
        backgroundColor: '#1f2937', // Specified background color
        color: '#fff', // White text color for contrast
        textTransform: 'none',
        padding: '8px 120px', // Standard padding
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
    },
    googleIcon: {
        marginRight: '8px', // Standard margin
    },
};

const GoogleButton: React.FC = () => {
    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
        console.log('Google Sign-In clicked');
    };

    return (
        <button style={styles.googleButton} onClick={handleGoogleSignIn} >
            <svg
                style={styles.googleIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
            >
                <path
                    fill="#4285F4"
                    d="M24 9.5c3.1 0 5.6 1.1 7.5 2.9l5.6-5.6C33.8 3.1 29.2 1 24 1 14.9 1 7.3 6.8 4.3 14.9l6.9 5.4C12.8 14.1 17.9 9.5 24 9.5z"
                />
                <path
                    fill="#34A853"
                    d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.4z"
                />
                <path
                    fill="#FBBC05"
                    d="M10.2 28.3c-1.1-3.1-1.1-6.5 0-9.6l-6.9-5.4C.5 17.1 0 20.5 0 24s.5 6.9 1.3 10l6.9-5.7z"
                />
                <path
                    fill="#EA4335"
                    d="M24 48c5.9 0 10.8-1.9 14.4-5.2l-7.4-5.7c-2.1 1.4-4.8 2.3-7.5 2.3-6.1 0-11.3-4.1-13.1-9.6l-6.9 5.7C7.3 41.2 14.9 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Sign up with Google
        </button>
    );
};

export default GoogleButton;