/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rob8s5l9056owe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmdt89g5",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rob8s5l9056owe")

  // remove
  collection.schema.removeField("xmdt89g5")

  return dao.saveCollection(collection)
})
