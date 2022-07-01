### Working data model

This is still heavily a WIP, just writing down my current thoughts

```json
{
    "character": {
        "stats": {
            // This is just the result of the compilation of characteristics
        },
        "characteristics": [ // These act as the core data model, feats, class features, racials, all that goes here
            {
                "name": "Name of the feat/modifier",
                "effect": {
                    "type": "mod", // This is just to give us flexibility in how a characteristic takes effect, i.e. base value, mode, an action etc
                    "value": null // The actual change in the value
                }
            } // ...
        ],
        "inventory": [ // list of containers, with one default container "equipped" or maybe "carried"?
            {
                "name": "equipped",
                "equipped": true, // a holdover of the fact that you should be able to drop a container, doesn't mean much for the default equipped container, but consistency
                "contents": [ // List of item objects
                    {   // Things in the equipped category have their "effects" applied
                        "name": "Example item of displaying",
                        "weight": 0,
                        "value": 0,
                        "quantity": 1,
                        "effects": [ /* Same effect objects as before */ ]
                    }
                ] 
            }
        ], // will likely add a "statuses" to handle temporary effects. i.e. blinded, restrained, etc...
        "lore": {
            // This can be formatted however, mostly just here as a place to store this in the characterdata file
        }
    }   
}
```