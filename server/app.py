#!/usr/bin/env python3

from flask import request
from models import Song, Favorite

from config import app, db

@app.get('/')
def index():
    return "Routes: GET /music - Top Ten Songs"

@app.get('/songs')
def all_songs():
    all_songs = Song.query.all()
    return [ song.to_dict() for song in all_songs ], 200


@app.get('/favorites')
def all_favorites():
    all_favorites = Favorite.query.all()
    return [ fav.to_dict() for fav in all_favorites ]


@app.post('/favorites')
def create_favorite():
    data = request.json # { 'song_id': 18, user_id: 20 }

    found_song = Favorite.query.where(Favorite.song_id == data['song_id']).first()

    if found_song:
        return { 'message': 'NO. HOW DARE YOU.' }, 400

    # new_favorite = Favorite( song_id=data['song_id'])
    new_favorite = Favorite( **data )

    db.session.add(new_favorite)
    db.session.commit()

    return new_favorite.to_dict(), 201


@app.delete('/favorites/<int:id>')
def delete_favorite(id):
    fav_to_delete = Favorite.query.where(Favorite.id == id).first()

    db.session.delete(fav_to_delete)
    db.session.commit()

    return {}, 204



if __name__ == '__main__':
    app.run(port=5555, debug=True)