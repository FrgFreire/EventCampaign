/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "egh7lzxtldsk8cl",
    "created": "2023-12-10 16:14:12.038Z",
    "updated": "2023-12-10 16:14:12.038Z",
    "name": "GetEventCampaigns",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wjkdy3jm",
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
      },
      {
        "system": false,
        "id": "mruyhbt4",
        "name": "EffectiveDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "6s55udrg",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type\nfrom EventCampaign \norder by EventCampaign.EffectiveDate"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("egh7lzxtldsk8cl");

  return dao.deleteCollection(collection);
})
