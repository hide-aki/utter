import {fk, many, attr, Model} from 'redux-orm'

class Terms extends Model {
  static get fields() {
    return {
      id: attr(),
      level: attr(),
      word: attr(),
      translation: attr(),
      level: fk('Levels')
    }
  }

  static parse(termsData) {
    // We could do useful stuff in here with relations,
    // but since we have no relations yet, all we need
    // to do is pass the pilot data on to upsert()

    // Note that in a static class method, `this` is the
    // class itself, not an instance
    return this.upsert(termsData)
  }

  static generate(newAttributes = {}) {
    const combinedAttributes = {
      ...defaultAttributes,
      ...newAttributes
    }

    return this.upsert(combinedAttributes)
  }

  static reducer(action, Terms, session) {
    switch (action.type) {
      case 'CREATE_TERM':
        Terms.upsert(action.payload)
        break
      case 'UPDATE_TERM':
        Terms.withId(action.payload.id).update(action.payload)
        break
      case 'REMOVE_TERM':
        const book = Terms.withId(action.payload)
        book.delete()
        break
      case 'ADD_AUTHOR_TO_TERM':
        Terms.withId(action.payload.termId).authors.add(action.payload.author)
        break
      case 'REMOVE_AUTHOR_FROM_TERM':
        Terms.withId(action.payload.termId).authors.remove(
          action.payload.authorId
        )
        break
    }

    // Return value is ignored.
  }

  toJSON() {
    return {...this.ref}
  }

  updateFrom(otherUser) {
    this.update(otherUser.ref)
  }

  toString() {
    return `Terms: ${this.name}`
  }
  // Declare any static or instance methods you need.
}

Terms.modelName = 'Terms'

export default Terms
