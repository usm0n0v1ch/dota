
import React from 'react';
import styles from './style.module.css';

const Modal = ({ hero, onClose }) => {
    if (!hero) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2>{hero.localized_name}</h2>
                <p><strong>Тип атаки:</strong> {hero.attack_type}</p>
                <p><strong>Основной атрибут:</strong> {hero.primary_attr}</p>
                <p><strong>Роли:</strong> {hero.roles.join(', ')}</p>
                <p><strong>Описание:</strong> {hero.description || 'Описание не доступно.'}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
