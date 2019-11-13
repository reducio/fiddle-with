import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../shared';
import styles from './styles.module.scss';

const AuthorizationForm = () => {
    const handleSubmit = () => {};

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <div className={styles.actions}>
                <Button type="primary" htmlType="submit" className={styles.loginButton} block>
                    Log in
                </Button>
                <Link to="/registration">Registration</Link>
            </div>
        </Form>
    )
}

export default AuthorizationForm;