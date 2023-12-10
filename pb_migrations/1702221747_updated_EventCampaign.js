/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rob8s5l9056owe")

  // remove
  collection.schema.removeField("oxdtxxcb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eng2f2fd",
    "name": "Title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rob8s5l9056owe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxdtxxcb",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "32mzraj5vaitygy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("eng2f2fd")

  return dao.saveCollection(collection)
})
