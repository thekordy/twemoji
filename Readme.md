A dockrized image of https://github.com/twitter/twemoji . Provides Node API service to parse text, detect all unicode emojies, and converts them to HTML images <img>. 

The main benefit is to unify emoji representation across all user interfaces.

## Usage

### Request

Send json request to API `POST /parse`:

```json
{
  "content": "I \u2764\uFE0F emoji!",
  "options": {
      "size": 72
  }
}
```
- content: `some string with ❤️ emoji` (string, required)
- options: (object, required) see [Twemoji options](https://github.com/twitter/twemoji#object-as-parameter)

### Response 201:

JSON response with `201` status code, in case of success

```json
{
  "converted": "I <img class=\"emoji\" draggable=\"false\" alt=\"❤️\" src=\"https://twemoji.maxcdn.com/2/72x72/2764.png\"> emoji!"
}
```

### Response 422:

JSON response with `422` status code, in case of invalid inputs

```json
{
  "content": "Content field is required"
}
```

## Installation

### Install using dockerhub

```bash
docker run -d -p 3000:3000 kordy/twemoji bash -c "npm install && node_modules/.bin/nodemon -L --watch . ./app.js"
```

### Install using docker-compose

```bash
docker-compose up -d
```

# License

Code licensed under the MIT License: http://opensource.org/licenses/MIT