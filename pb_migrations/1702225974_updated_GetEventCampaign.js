/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqfv5i41n4kk9ba")

  collection.options = {
    "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type,\n  Campaign.Description\nfrom EventCampaign \n  INNER join Campaign on EventCampaign.CampaignId = Campaign.id\norder by EventCampaign.EffectiveDate"
  }

  // remove
  collection.schema.removeField("p1kelaey")

  // remove
  collection.schema.removeField("mz5paiop")

  // remove
  collection.schema.removeField("9jxpzd5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lfgks8cx",
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
    "id": "j2ifaw8x",
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
    "id": "hjoltskm",
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
    "id": "gdckl4xa",
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
    "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type\nfrom EventCampaign \n  INNER join Campaign on EventCampaign.CampaignId = Campaign.id\norder by EventCampaign.EffectiveDate"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p1kelaey",
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
    "id": "mz5paiop",
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
    "id": "9jxpzd5p",
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

  // remove
  collection.schema.removeField("lfgks8cx")

  // remove
  collection.schema.removeField("j2ifaw8x")

  // remove
  collection.schema.removeField("hjoltskm")

  // remove
  collection.schema.removeField("gdckl4xa")

  return dao.saveCollection(collection)
})
