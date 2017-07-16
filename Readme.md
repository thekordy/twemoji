Node API service to parse text, detect all unicode emojies, 
and convert them to HTML images <img>.

*Goal* is to unify emoji representation between all user interfaces.

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

## Installation using Docker

```bash
docker-compose up -d
```

# License

Code licensed under the MIT License: http://opensource.org/licenses/MIT