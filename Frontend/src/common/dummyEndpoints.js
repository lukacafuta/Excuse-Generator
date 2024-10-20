const dummyEndpoints = [
    {
        id: "get-all-excuses",
        title: "Get all Excuses",
        description: "Get all excuses in the database",
        endpoint: "/excuse/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"category": "School",<br>
            &emsp;&emsp;"excuse": "My homework turned into origami after I accidentally spilled water on it."<br>
            &emsp;}, {<br>
            &emsp;&emsp;"id": 2,<br>
            &emsp;&emsp;"category": "School",<br>
            &emsp;&emsp;"excuse": "I thought today was Saturday, so I didn't show up."<br>
            }]
            `
    },
    {
        id: "get-specific-excuse",
        title: "Get a single Excuse",
        description: "Get a specific excuse by ID",
        endpoint: "/excuse/{ID}",
        example: "/excuse/1",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"category": "School",<br>
            &emsp;&emsp;"excuse": "My homework turned into origami after I accidentally spilled water on it."<br>
            }]
            `
    },
    {
        id: "post-an-excuse",
        title: "Post an Excuse",
        description: "Add an Excuse to the database",
        endpoint: "/excuse/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"category": "School",<br>
            &emsp;&emsp;"excuse": "My homework turned into origami after I accidentally spilled water on it."<br>
            }]
            `
    }, {
        id: "patch-an-excuse",
        title: "Patch an Excuse",
        description: "Partial update of an Excuse in the database",
        endpoint: "/excuse/",
        content:
            `
            [{<br>
            &emsp;&emsp;"excuse": "My homework turned into origami after I accidentally spilled COFFEE on it.",<br>
            &emsp;}]
            `
    }, {
        id: "delete-an-excuse",
        title: "Delete an Excuse",
        description: "Delete a specific Excuse by ID",
        endpoint: "/excuse/{ID}",
        example: "/excuse/1",
        content:
            `
            [{<br>
            {"message": "Excuse deleted successfully."}<br>
            }]
            `
    },
    {
        id: "search-for-excuses",
        title: "Search for Excuses",
        description: "Get all excuses from the database, containing a string in category or excuse",
        endpoint: "/excuse/search/{search_term}",
        example: "/excuse/search/homework/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"category": "School",<br>
            &emsp;&emsp;"excuse": "My homework turned into origami after I accidentally spilled water on it."<br>
            }]
            `
    }
]

export default dummyEndpoints;