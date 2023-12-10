/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wqfv5i41n4kk9ba",
    "created": "2023-12-10 16:31:46.656Z",
    "updated": "2023-12-10 16:31:46.656Z",
    "name": "GetEventCampaign",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  EventCampaign.id ,\n  EventCampaign.Title,\n  EventCampaign.EffectiveDate,\n  EventCampaign.Type\nfrom EventCampaign \n  INNER join Campaign on EventCampaign.CampaignId = Campaign.id\norder by EventCampaign.EffectiveDate"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqfv5i41n4kk9ba");

  return dao.deleteCollection(collection);
})
