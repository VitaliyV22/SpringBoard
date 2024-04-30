"""Flask app for Cupcakes"""
from flask import Flask, jsonify, request
from models import db, Cupcake

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Part Two: Listing, Getting & Creating Cupcakes
@app.route('/api/cupcakes')
def get_cupcakes():
    cupcakes = Cupcake.query.all()
    return jsonify(cupcakes=[cupcake.to_dict() for cupcake in cupcakes])

@app.route('/api/cupcakes/<int:cupcake_id>')
def get_cupcake(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake=cupcake.to_dict())

@app.route('/api/cupcakes', methods=['POST'])

def create_cupcake():
    data = request.json
    cupcake = Cupcake(
        flavor=data['flavor'],
        size=data['size'],
        rating=data['rating'],
        image=data.get('image', 'https://tinyurl.com/demo-cupcake')
    )
    db.session.add(cupcake)
    db.session.commit()
    return jsonify(cupcake=cupcake.to_dict()), 201

if __name__ == '__main__':
    app.run(debug=True)
