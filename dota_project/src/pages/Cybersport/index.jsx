import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Cybersport() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.opendota.com/api/publicMatches')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMatches(data.slice(0, 5));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Киберспорт - Dota 2</h1>
            <div className={styles.description}>
                <h2>Последние 5 матчей</h2>
                {matches.length > 0 ? (
                    matches.map(match => (
                        <div key={match.match_id} className={styles.match}>
                            <p><strong>Match ID:</strong> {match.match_id}</p>
                            <p><strong>Duration:</strong> {match.duration} seconds</p>
                            <p><strong>Winner:</strong> {match.radiant_win ? 'Radiant' : 'Dire'}</p>
                            <p><strong>Start Time:</strong> {new Date(match.start_time * 1000).toLocaleString()}</p>
                            <p><strong>Players:</strong></p>
                            <ul>
                                {match.players && match.players.map((player, index) => (
                                    <li key={index}>{player.personaname} (Hero ID: {player.hero_id})</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No matches found.</p>
                )}
            </div>
        </div>
    );
}
