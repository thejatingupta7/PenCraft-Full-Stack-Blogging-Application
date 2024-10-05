import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.section}>
                <h3>About Us</h3>
                <p>We are a full-stack blogging application dedicated to providing the best content for our users.</p>
            </div>
            <div style={styles.section}>
                <h3>Address</h3>
                <p>123 Blogging Lane, Content City, Blogland</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#1f2937',
        padding: '20px',
        textAlign: 'center' as 'center',
        display: 'flex',
        justifyContent: 'space-around',
    },
    section: {
        maxWidth: '300px',
    }
};

export default Footer;