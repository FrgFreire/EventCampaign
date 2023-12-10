/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqfv5i41n4kk9ba")

  collection.options = {
    "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type,\n  Campaign.Name,\n  Campaign.Description\nfrom EventCampaign \n  INNER join Campaign on EventCampaign.CampaignId = Campaign.id\norder by EventCampaign.EffectiveDate"
  }

  // remove
  collection.schema.removeField("wkd30lz2")

  // remove
  collection.schema.removeField("jlwuyrhg")

  // remove
  collection.schema.removeField("egjaqeej")

  // remove
  collection.schema.removeField("biy8mzhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wj606fha",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svclwd7h",
    "name": "EffectiveDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dw8pvylp",
    "name": "Type",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8vcqed1w",
    "name": "Name",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1jt8ubhp",
    "name": "Description",
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
  const collection = dao.findCollectionByNameOrId("wqfv5i41n4kk9ba")

  collection.options = {
    "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type,\n  Campaign.Description\nfrom EventCampaign \n  INNER join Campaign on EventCampaign.CampaignId = Campaign.id\norder by EventCampaign.EffectiveDate"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkd30lz2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlwuyrhg",
    "name": "EffectiveDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egjaqeej",
    "name": "Type",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "biy8mzhx",
    "name": "Description",
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

  // remove
  collection.schema.removeField("wj606fha")

  // remove
  collection.schema.removeField("svclwd7h")

  // remove
  collection.schema.removeField("dw8pvylp")

  // remove
  collection.schema.removeField("8vcqed1w")

  // remove
  collection.schema.removeField("1jt8ubhp")

  return dao.saveCollection(collection)
})
