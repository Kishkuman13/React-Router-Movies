import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  let history = useHistory()
  const returnHome = () => {
    history.push('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink> 
      ))}
      <div className="home-button" onClick={returnHome}>Home</div>
    </div>
  );
}
