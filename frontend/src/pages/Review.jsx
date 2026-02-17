import { useState } from 'react';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import styles from '../styles/auth.module.css';
import buttonStyles from '../styles/button.module.css'

export default function Review() {
    return (
        <div>
            <h1>Review</h1>
            <Button label="Review" />
        </div>
    );
}