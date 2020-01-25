import React, { useEffect, useContext } from 'react';
import { Empty } from 'antd';
import { Button, Paper } from '../../shared';
import Dictionary from '../../components/Dictionary'
import useFetch from '../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../api/keys';
import { DictionariesActionsContext } from '../../contexts/DictionariesContext';
import styles from './styles.module.scss';

const Dictionaries = () => {
    const { toggleModal } = useContext(DictionariesActionsContext);

    const [state, request] = useFetch({ key: DICTIONARY_GET });
    useEffect(() => {
        request()
    }, []);

    const { response: dictionaries, fetching, errors } = state;

    if (errors) {
        return <div>Wrong!</div>
    }

    if (!dictionaries.length && !fetching) {
        return (
            <div>
            <Paper>
                <Empty description="You don't have a dictionary yet">
                    <Button type="primary" onClick={toggleModal}>Create Dictionary</Button>
                </Empty>
            </Paper>
            </div>
        )
    }

    return (
        dictionaries.map(dictionary => {
            return (
                <div className={styles.row}>
                    <Dictionary key={dictionary.id} {...dictionary} />
                </div>
            )
        })
    )
}

export default Dictionaries;