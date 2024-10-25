import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Modal from '../../components/Modal';

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState(null);

    useEffect(() => {
        fetch('https://api.opendota.com/api/heroes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setHeroes(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
    };

    const handleCloseModal = () => {
        setSelectedHero(null);
    };

    return (
        <div className={styles.container}>
            <h1>Герои</h1>
            <div className={styles.heroesList}>
                {heroes.map(hero => (
                    <div key={hero.id} className={styles.heroCard} onClick={() => handleHeroClick(hero)}>
                        <h2>{hero.localized_name}</h2>
                        <p>Тип атаки: {hero.attack_type}</p>
                        <p>Основной атрибут: {hero.primary_attr}</p>
                        <p>Роли: {hero.roles.join(', ')}</p>
                    </div>
                ))}
            </div>
            {selectedHero && (
                <Modal hero={selectedHero} onClose={handleCloseModal} />
            )}
        </div>
    );
}
